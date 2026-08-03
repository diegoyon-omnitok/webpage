"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/kc/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        router.push("/biblioteca");
        router.refresh();
      } else {
        setError(data.error ?? "No pudimos validar tu acceso.");
        setLoading(false);
      }
    } catch {
      setError("Error de conexión. Intenta de nuevo.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-gray-700">Usuario</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          autoComplete="username"
          required
          placeholder="tu-usuario"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-[#4D4A9D] focus:ring-2 focus:ring-[#4D4A9D]/15"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-gray-700">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
          placeholder="••••••••"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-[#4D4A9D] focus:ring-2 focus:ring-[#4D4A9D]/15"
        />
      </div>
      {error && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="gradient-brand w-full rounded-xl py-3 font-bold text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Ingresando…" : "Ingresar"}
      </button>
    </form>
  );
}
