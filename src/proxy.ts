import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  MARKET_COOKIE,
  getRedirectPath,
  latamCountryCodes,
  type MarketKey,
} from "@/lib/markets";

function getPreferredMarket(request: NextRequest): MarketKey | null {
  const cookieValue = request.cookies.get(MARKET_COOKIE)?.value;
  if (cookieValue === "latam" || cookieValue === "usa") {
    return cookieValue;
  }

  const country =
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("cf-ipcountry") ??
    request.headers.get("x-country-code");

  if (country === "US") return "usa";
  if (country && latamCountryCodes.has(country.toUpperCase())) return "latam";

  const acceptLanguage = request.headers.get("accept-language")?.toLowerCase() ?? "";
  if (acceptLanguage.includes("en-us") || acceptLanguage.includes("en")) return "usa";
  if (acceptLanguage.includes("es")) return "latam";

  return null;
}

function nextWithLang(request: NextRequest, lang: string) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-omni-lang", lang);
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const normalizedPath =
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  if (normalizedPath === "/thank-you") {
    return new NextResponse(null, { status: 410 });
  }

  // Return 410 Gone for legacy WordPress paths that no longer exist
  if (
    normalizedPath.startsWith("/wp-content") ||
    normalizedPath.startsWith("/wp-admin") ||
    normalizedPath.startsWith("/wp-json") ||
    normalizedPath.startsWith("/wp-includes") ||
    normalizedPath.startsWith("/category") ||
    normalizedPath.startsWith("/tag") ||
    normalizedPath.startsWith("/author") ||
    normalizedPath === "/feed" ||
    normalizedPath === "/feed/" ||
    normalizedPath === "/xmlrpc.php" ||
    normalizedPath === "/wp-login.php"
  ) {
    return new NextResponse(null, { status: 410 });
  }

  const redirectPath = getRedirectPath(pathname);
  if (redirectPath) {
    return NextResponse.redirect(new URL(`${redirectPath}${search}`, request.url), 301);
  }

  if (pathname === "/") {
    const preferredMarket = getPreferredMarket(request);

    if (preferredMarket === "usa") {
      return NextResponse.redirect(new URL("/en-us/", request.url), 307);
    }

    if (preferredMarket === "latam") {
      return NextResponse.redirect(new URL("/es/", request.url), 307);
    }

    return NextResponse.redirect(new URL("/es/", request.url), 307);
  }

  if (pathname === "/es" || pathname.startsWith("/es/")) {
    return nextWithLang(request, "es");
  }

  if (pathname === "/en-us" || pathname.startsWith("/en-us/")) {
    return nextWithLang(request, "en-US");
  }

  return nextWithLang(request, "en");
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
