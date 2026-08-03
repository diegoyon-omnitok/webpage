import { NextResponse } from "next/server";
import {
  validateCredentials,
  createSessionValue,
  KC_COOKIE,
  SESSION_MAX_AGE,
} from "@/lib/kc-auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const user = String(body?.user ?? "").trim();
  const password = String(body?.password ?? "");

  if (!validateCredentials(user, password)) {
    return NextResponse.json(
      { ok: false, error: "Usuario o contraseña incorrectos." },
      { status: 401 }
    );
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(KC_COOKIE, createSessionValue(user), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  return res;
}
