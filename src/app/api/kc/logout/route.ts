import { NextResponse } from "next/server";
import { KC_COOKIE } from "@/lib/kc-auth";

export const runtime = "nodejs";

export async function GET(request: Request) {
  // Al salir del portal, el cliente vuelve al inicio del sitio.
  const res = NextResponse.redirect(new URL("/", request.url));
  res.cookies.set(KC_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
