import type { Metadata } from "next";
import { Calendar, CheckCircle2, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Conversemos — Ve Omnitok en acción",
  description:
    "Agenda una demo personalizada de Omnitok. Sin compromiso, en español. Te mostramos cómo funciona con tu catálogo y retailers específicos.",
};

export default function DemoPage() {
  const demoPoints = [
    "Walkthrough personalizado de los módulos más relevantes para tu caso",
    "Demo con ejemplos de tu industria y retailers actuales",
    "Respuesta a todas tus preguntas técnicas y de negocio",
    "Propuesta de implementación adaptada a tu operación",
  ];

  return (
    <>
      <section className="pt-28 pb-0 gradient-hero relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5">
              <Calendar size={13} className="text-white" />
              <span className="text-xs font-medium text-white/80">Demo sin compromiso</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ve Omnitok en acción con tu catálogo real
            </h1>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              30 minutos. Sin PowerPoints genéricos. Te mostramos cómo Omnitok resuelve exactamente los problemas de tu marca en tus retailers actuales.
            </p>

            <div className="mt-6 space-y-2">
              {[
                { icon: Clock, text: "30 minutos, sin compromiso" },
                { icon: Users, text: "Con un especialista en tu industria" },
                { icon: CheckCircle2, text: "Respuesta en menos de 24 horas" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/70 text-sm">
                  <item.icon size={14} className="text-success flex-shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" /></svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Completa el formulario y te contactamos</h2>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Nombre *</label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Empresa *</label>
                    <input
                      type="text"
                      placeholder="Nombre de tu empresa"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Cargo *</label>
                    <input
                      type="text"
                      placeholder="Tu cargo"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">País *</label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white">
                      <option value="">Selecciona</option>
                      <option>Chile</option>
                      <option>Perú</option>
                      <option>Colombia</option>
                      <option>México</option>
                      <option>Argentina</option>
                      <option>Otro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email corporativo *</label>
                  <input
                    type="email"
                    placeholder="tu@empresa.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Teléfono (opcional)</label>
                  <input
                    type="tel"
                    placeholder="+56 9 XXXX XXXX"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">¿Qué quieres resolver con Omnitok? (opcional)</label>
                  <textarea
                    rows={3}
                    placeholder="Cuéntanos brevemente tu situación actual..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Calendar size={16} />
                  Solicitar Demo Gratuita
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Al enviar confirmas que aceptas nuestra{" "}
                  <a href="/privacidad" className="underline hover:text-gray-600">Política de Privacidad</a>
                </p>
              </form>
            </div>

            {/* Right side info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">¿Qué verás en la demo?</h3>
                <div className="space-y-3">
                  {demoPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full gradient-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-sm text-gray-600">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Confían en Omnitok</p>
                <div className="flex flex-wrap gap-2">
                  {["Marcas FMCG", "Electrónica", "Belleza", "Hogar", "Retail"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-white rounded-xl border border-gray-100">
                  <p className="text-xs text-gray-500 italic">
                    &quot;La demo fue en 30 minutos y en 48 horas ya teníamos un plan de implementación concreto.&quot;
                  </p>
                  <p className="text-xs font-semibold text-gray-700 mt-2">— Ecommerce Manager, marca FMCG Chile</p>
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <p className="text-sm font-bold text-gray-900 mb-1">¿Prefieres contacto directo?</p>
                <p className="text-sm text-gray-500">
                  Escríbenos a{" "}
                  <a href="mailto:hola@omnitok.com" className="text-primary font-semibold hover:underline">
                    hola@omnitok.com
                  </a>{" "}
                  o conéctate en{" "}
                  <a href="https://linkedin.com" className="text-primary font-semibold hover:underline">
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
