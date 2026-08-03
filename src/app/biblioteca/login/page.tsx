import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { readSession, KC_COOKIE } from "@/lib/kc-auth";
import LoginForm from "../_components/LoginForm";

export default async function LoginPage() {
  const store = await cookies();
  if (readSession(store.get(KC_COOKIE)?.value)) {
    redirect("/biblioteca");
  }

  return (
    <main className="gradient-hero relative flex min-h-screen items-center justify-center px-4 py-12">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-primary/40 blur-3xl" />

      <div className="relative w-full max-w-md">
        <div className="mb-6 text-center">
          <Image
            src="/omnitok-logo-portal.png"
            alt="Omnitok"
            width={1000}
            height={169}
            className="mx-auto h-10 w-auto rounded-lg shadow-lg"
            priority
          />
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-2xl">
          <h1 className="text-2xl font-extrabold text-gray-900">Biblioteca de Aprendizaje</h1>
          <p className="mb-6 mt-1.5 text-sm text-gray-500">
            Acceso exclusivo para clientes Omnitok. Ingresa con las credenciales que te compartimos.
          </p>
          <LoginForm />
        </div>
        <p className="mt-6 text-center text-xs text-white/60">
          ¿Problemas para ingresar? Escríbele a tu contacto de Omnitok.
        </p>
      </div>
    </main>
  );
}
