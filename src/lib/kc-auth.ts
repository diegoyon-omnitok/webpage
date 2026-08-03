import crypto from "node:crypto";

/**
 * Acceso a la Biblioteca de Aprendizaje (portal de clientes, gated).
 *
 * MVP: las credenciales viven en este archivo y la sesión se firma con HMAC
 * en una cookie httpOnly. Es suficiente para un portal de contenido interno.
 *
 * Para producción con muchos clientes, conviene:
 *   - mover las credenciales a una base de datos,
 *   - guardar las contraseñas hasheadas (bcrypt/argon2), no en texto plano,
 *   - definir KC_SECRET como variable de entorno (no usar el fallback de dev).
 */

export const KC_COOKIE = "omnitok_kc";
export const SESSION_MAX_AGE = 60 * 60 * 12; // 12 horas

// Clientes con acceso. Para agregar uno nuevo: "usuario-en-minuscula": "contraseña".
const USERS: Record<string, string> = {
  reckitt: "reckitt123",
};

// Nombre para mostrar en el saludo. Si no está, se capitaliza el usuario.
const DISPLAY_NAMES: Record<string, string> = {
  reckitt: "Reckitt",
};

const SECRET =
  process.env.KC_SECRET ?? "omnitok-kc-dev-secret-cambiar-en-produccion";

function sign(user: string): string {
  return crypto.createHmac("sha256", SECRET).update(user).digest("hex");
}

/** Valida usuario + contraseña (comparación en tiempo constante). */
export function validateCredentials(user: string, password: string): boolean {
  const expected = USERS[user.trim().toLowerCase()];
  if (!expected) return false;
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

/** Valor de cookie firmado para una sesión válida. */
export function createSessionValue(user: string): string {
  const u = user.trim().toLowerCase();
  return `${u}.${sign(u)}`;
}

/** Devuelve el usuario si la cookie es válida; null si no. */
export function readSession(value: string | undefined | null): string | null {
  if (!value) return null;
  const i = value.lastIndexOf(".");
  if (i <= 0) return null;
  const user = value.slice(0, i);
  const sig = Buffer.from(value.slice(i + 1));
  const expected = Buffer.from(sign(user));
  if (sig.length !== expected.length) return null;
  return crypto.timingSafeEqual(sig, expected) ? user : null;
}

export function displayName(user: string): string {
  return DISPLAY_NAMES[user] ?? user.charAt(0).toUpperCase() + user.slice(1);
}
