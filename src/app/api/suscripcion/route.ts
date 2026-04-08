import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const CSV_PATH = path.join(process.cwd(), "data", "suscriptores.csv");

function ensureFile() {
  const dir = path.dirname(CSV_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(CSV_PATH)) {
    fs.writeFileSync(CSV_PATH, "email,nombre,fecha\n", "utf8");
  }
}

export async function POST(req: NextRequest) {
  try {
    const { email, nombre } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email inválido." }, { status: 400 });
    }

    ensureFile();

    const content = fs.readFileSync(CSV_PATH, "utf8");
    if (content.includes(email)) {
      return NextResponse.json({ error: "Este email ya está suscrito." }, { status: 409 });
    }

    const fecha = new Date().toISOString().split("T")[0];
    const nombreLimpio = (nombre ?? "").replace(/,/g, " ").trim();
    const linea = `${email},${nombreLimpio},${fecha}\n`;
    fs.appendFileSync(CSV_PATH, linea, "utf8");

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Error interno." }, { status: 500 });
  }
}
