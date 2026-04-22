"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart, Truck, ShieldCheck, Heart, ChevronLeft, ChevronRight, Sparkles, X, Play, Volume2, Ruler, RotateCw } from "lucide-react";

const IMG = "/plataforma/content";
const slides = [
  `${IMG}/CARRUSEL 1.png`, `${IMG}/CARRUSEL 2.png`, `${IMG}/CARRUSEL 3.png`, `${IMG}/CARRUSEL 4.png`,
];
const techs = [
  { src: `${IMG}/OLED.png`, label: "Tecnología OLED", desc: "Negros perfectos con píxeles autoiluminados." },
  { src: `${IMG}/4k.png`, label: "Resolución 4K UHD", desc: "8.3 millones de píxeles, 4x más que Full HD." },
  { src: `${IMG}/hdr.png`, label: "HDR Dolby Vision", desc: "Colores y brillo más realistas." },
];
const ksps = [
  { img: `${IMG}/lifestlye 1.png`, title: "Colores que cobran vida", desc: "Negros absolutos y más de mil millones de colores. Cada píxel se ilumina de forma independiente.", dark: false },
  { img: `${IMG}/lifestyle 2.png`, title: "Sonido que te envuelve", desc: "Dolby Atmos integrado con 40W. El audio sigue la acción en pantalla para una experiencia de cine real.", dark: false },
  { img: `${IMG}/lifestyle 3.png`, title: "Diseño ultra delgado", desc: "Solo 5mm de perfil. Bordes casi invisibles que maximizan el área de pantalla.", dark: false },
  { img: `${IMG}/CARRUSEL 2.png`, title: "Explora cada ángulo", desc: "Vista 360° del producto. Rota el TV para ver el perfil, los puertos y los detalles de diseño antes de comprar.", dark: false },
];

const techFeatures = [
  { src: `${IMG}/OLED.png`, label: "OLED" },
  { src: `${IMG}/4k.png`, label: "4K UHD" },
  { src: `${IMG}/hdr.png`, label: "Dolby Vision" },
  { src: `${IMG}/QUANTOM DOT.png`, label: "Quantum Dot" },
];

/* ── Hotspot popup ── */
function HotspotPopup({ tech, onClose }: { tech: typeof techs[0]; onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-20 bg-black/50 backdrop-blur-sm flex items-end">
      <div className="w-full bg-white rounded-t-lg p-2">
        <div className="flex items-start gap-2">
          <Image src={tech.src} alt={tech.label} title={tech.label} width={40} height={40} className="rounded w-9 h-9 object-cover flex-shrink-0" />
          <div className="flex-1"><p className="text-[8px] font-bold text-gray-900">{tech.label}</p><p className="text-[6px] text-gray-500">{tech.desc}</p></div>
          <button type="button" onClick={onClose}><X size={9} className="text-gray-400" /></button>
        </div>
      </div>
    </div>
  );
}

/* ── Product info sidebar (shared) ── */
function ProductSidebar() {
  return (
    <div className="flex flex-col justify-start">
      <p className="text-[6px] text-primary font-bold uppercase tracking-wider">Brand A</p>
      <p className="text-[9px] font-bold text-gray-900 leading-tight mt-0.5">Smart TV OLED 55&quot; 4K UHD Dolby Vision + Atmos</p>
      <div className="flex items-center gap-0.5 mt-1">
        {[1,2,3,4].map((i) => <Star key={i} size={5} className="text-amber-400 fill-amber-400" />)}
        <Star size={5} className="text-gray-200" />
        <span className="text-[5px] text-gray-400 ml-0.5">(312)</span>
      </div>
      <div className="flex items-baseline gap-1.5 mt-1.5">
        <span className="text-[12px] font-black text-gray-900">$699.990</span>
        <span className="text-[7px] text-gray-400 line-through">$899.990</span>
        <span className="text-[5px] font-bold text-white bg-red-500 px-1 py-0.5 rounded">-22%</span>
      </div>
      <p className="text-[5px] text-green-600 font-semibold mt-0.5">6 cuotas sin interés</p>
      <div className="flex gap-1 mt-2">
        <button className="flex-1 rounded py-1 text-[6px] font-bold text-white flex items-center justify-center gap-0.5" style={{ background: "#FF177B" }}>
          <ShoppingCart size={7} /> Agregar al carro
        </button>
        <button className="w-6 rounded border border-gray-200 flex items-center justify-center"><Heart size={7} className="text-gray-400" /></button>
      </div>
      <div className="mt-2 space-y-1 border-t border-gray-100 pt-1.5">
        <div className="flex items-center gap-1"><Truck size={7} className="text-green-500" /><span className="text-[5px] text-gray-600">Despacho gratis, llega en 2-3 días</span></div>
        <div className="flex items-center gap-1"><ShieldCheck size={7} className="text-primary" /><span className="text-[5px] text-gray-600">Garantía oficial 3 años</span></div>
      </div>
      <div className="mt-2 border-t border-gray-100 pt-1.5">
        <p className="text-[6px] font-bold text-gray-700 mb-0.5">Especificaciones</p>
        {[["Pantalla", "OLED 55\""], ["Resolución", "4K UHD"], ["HDR", "Dolby Vision"], ["Audio", "Dolby Atmos 40W"], ["Smart TV", "webOS"], ["HDMI", "4 (eARC)"]].map(([k, v]) => (
          <div key={k} className="flex justify-between py-[1.5px] border-b border-gray-50 last:border-0">
            <span className="text-[5px] text-gray-400">{k}</span>
            <span className="text-[5px] text-gray-600 font-medium">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  SIN CONTENIDO                                                     */
/* ================================================================== */

function BasicContent() {
  return (
    <>
      {/* 2-col product area */}
      <div className="grid grid-cols-[1.2fr_0.8fr] gap-0 border-b border-gray-100">
        <div className="p-2.5 border-r border-gray-100">
          <div className="aspect-[4/3] rounded bg-gray-50 overflow-hidden border border-gray-100 flex items-center justify-center">
            <Image src={slides[0]} alt="Smart TV OLED 55 pulgadas — ejemplo de imagen de producto en PDP" title="Ejemplo de página de producto sin contenido enriquecido" width={800} height={600} className="w-full h-full object-contain p-2" sizes="(max-width: 640px) 60vw, 400px" quality={95} />
          </div>
          <div className="flex gap-0.5 mt-1">
            {slides.map((s, i) => <div key={i} className="w-7 h-7 rounded border border-gray-200 overflow-hidden"><Image src={s} alt={`Miniatura ${i + 1} de producto ejemplo`} width={28} height={28} className="w-full h-full object-contain" /></div>)}
          </div>
        </div>
        <div className="p-2.5">
          <ProductSidebar />
        </div>
      </div>

      {/* Plain text description */}
      <div className="px-3 pt-2 pb-1.5">
        <p className="text-[7px] font-bold text-gray-700 mb-1">Descripción y Especificaciones Técnicas</p>
        <p className="text-[6px] text-gray-500 leading-relaxed">
          Descripción del Producto: Este Smart TV OLED de 55 pulgadas ofrece resolución 4K UHD con tecnología Dolby Vision para imágenes más realistas y Dolby Atmos integrado para un sonido envolvente*. Su panel OLED cuenta con píxeles autoiluminados que permiten negros perfectos y un contraste infinito. Equipado con 4 puertos HDMI (1 eARC), sistema operativo webOS con inteligencia artificial ThinQ AI y conectividad WiFi y Bluetooth.
        </p>
        <p className="text-[6px] text-gray-500 leading-relaxed mt-1">*Comparado con paneles LED convencionales.</p>
        <p className="text-[6px] font-semibold text-gray-600 mt-2 mb-1">Características Principales</p>
        <p className="text-[6px] text-gray-500 leading-relaxed">
          - Pantalla OLED de 55 pulgadas.{"\n"}
          - Resolución 4K UHD (3840 x 2160).{"\n"}
          - HDR: Dolby Vision / HDR10+.{"\n"}
          - Audio: Dolby Atmos, 40W.{"\n"}
          - Sistema operativo: webOS con ThinQ AI.{"\n"}
          - Conectividad: WiFi, Bluetooth, 4 HDMI, 3 USB.{"\n"}
          - Procesador inteligente a9 Gen6.{"\n"}
          - Modo filmmaker y modo juego.
        </p>
      </div>

      {/* Specs table */}
      <div className="px-3 border-t border-gray-100 pt-2 pb-1.5">
        <p className="text-[7px] font-bold text-gray-700 mb-1">Especificaciones</p>
        {[["Marca", "Brand A"], ["Tipo de Producto", "Smart TV OLED"], ["Modelo", "OLED55-4K-2026"], ["Tamaño Pantalla", "55 Pulgadas"], ["Resolución", "4K UHD (3840x2160)"], ["Tecnología HDR", "Dolby Vision / HDR10+"], ["Sistema de Audio", "Dolby Atmos 40W"], ["Sistema Operativo", "webOS"], ["Puertos HDMI", "4 (1 eARC)"], ["Puertos USB", "3"], ["Conectividad", "WiFi / Bluetooth"], ["Potencia", "120W"], ["Dimensiones (aprox.)", "123 x 71 x 4.7 cm"], ["Peso (aprox.)", "14.5 kg"]].map(([k, v]) => (
          <div key={k} className="flex justify-between py-[2px] border-b border-gray-50 last:border-0">
            <span className="text-[5px] text-gray-400">{k}</span>
            <span className="text-[5px] text-gray-600 font-medium">{v}</span>
          </div>
        ))}
      </div>

      {/* Cambios y devoluciones */}
      <div className="px-3 border-t border-gray-100 pt-2 pb-1.5">
        <p className="text-[7px] font-bold text-gray-700 mb-1">Cambios y Devoluciones</p>
        <p className="text-[6px] text-gray-500 leading-relaxed">
          Puedes asistirte a cualquier tienda Retailer a realizar el cambio o devolución del producto, de manera gratuita. Tienes desde 7 hasta 30 días hábiles dependiendo del tipo de producto. Busca mayor información y revisa nuestras políticas sobre cambios y devoluciones o comunícate a través de nuestros canales de atención.
        </p>
      </div>

      {/* Garantia */}
      <div className="px-3 border-t border-gray-100 pt-2 pb-2">
        <p className="text-[7px] font-bold text-gray-700 mb-1">Garantía y Asistencia</p>
        <p className="text-[6px] text-gray-500 leading-relaxed">
          Los productos que Retailer comercializa cuentan con garantía de funcionamiento según la garantía de ingreso al país dependiendo del tipo de producto. Entre muebles y electro, te recomendamos revisar el certificado de garantía que llega con el producto.
        </p>
      </div>

      {/* Similar products */}
      <div className="px-3 border-t border-gray-100 pt-2 pb-3">
        <p className="text-[7px] font-bold text-gray-700 mb-1">Productos similares</p>
        <div className="flex gap-1">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="w-12 rounded border border-gray-100 p-0.5">
              <div className="w-full aspect-square rounded bg-gray-50" />
              <div className="h-0.5 rounded bg-gray-100 w-10/12 mt-0.5" />
              <div className="h-0.5 rounded bg-gray-100 w-6/12 mt-0.5" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ================================================================== */
/*  CON OMNITOK                                                       */
/* ================================================================== */

function EnrichedContent() {
  const [slide, setSlide] = useState(0);
  const [hp, setHp] = useState<number | null>(null);

  return (
    <>
      {/* 2-col product area */}
      <div className="grid grid-cols-[1.2fr_0.8fr] gap-0 border-b border-gray-100">
        <div className="p-2.5 border-r border-gray-100">
          <div className="relative aspect-[4/3] rounded bg-gray-50 overflow-hidden border border-gray-100">
            <Image src={slides[slide]} alt="Smart TV OLED 55 pulgadas — ejemplo de producto con contenido enriquecido Omnitok" title="Página de producto mejorada con contenido enriquecido Omnitok Content" fill className="object-contain p-2" sizes="(max-width: 640px) 60vw, 400px" quality={95} />
            {slide === 0 && (
              <>
                <div className="absolute top-1.5 left-1.5 z-10">
                  <span className="inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[5px] font-bold text-white shadow" style={{ background: "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)" }}><Sparkles size={5} /> Hotspots</span>
                </div>
                {[{ t: "22%", l: "46%" }, { t: "50%", r: "14%" }, { t: "74%", l: "28%" }].map((pos, idx) => (
                  <button key={idx} type="button" onClick={() => setHp(hp === idx ? null : idx)}
                    className="absolute w-4 h-4 rounded-full bg-accent/90 flex items-center justify-center shadow animate-pulse hover:scale-125 transition-transform z-10"
                    style={{ top: pos.t, left: (pos as { l?: string }).l, right: (pos as { r?: string }).r }}>
                    <span className="text-[5px] text-white font-bold">+</span>
                  </button>
                ))}
                {hp !== null && techs[hp] && <HotspotPopup tech={techs[hp]} onClose={() => setHp(null)} />}
              </>
            )}
            <button type="button" onClick={() => { setSlide((s) => (s - 1 + 4) % 4); setHp(null); }} className="absolute left-0.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white/80 shadow flex items-center justify-center z-10"><ChevronLeft size={8} /></button>
            <button type="button" onClick={() => { setSlide((s) => (s + 1) % 4); setHp(null); }} className="absolute right-0.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white/80 shadow flex items-center justify-center z-10"><ChevronRight size={8} /></button>
          </div>
          <div className="flex gap-0.5 mt-1">
            {slides.map((s, i) => (
              <button key={i} type="button" onClick={() => { setSlide(i); setHp(null); }}
                className={`w-7 h-7 rounded border-2 overflow-hidden ${i === slide ? "border-accent" : "border-gray-200"}`}>
                <Image src={s} alt={`Miniatura ${i + 1} de carrusel de producto enriquecido`} width={28} height={28} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        </div>
        <div className="p-2.5">
          <ProductSidebar />
        </div>
      </div>

      {/* ═══ INPAGE ═══ */}
      <div className="border-t-[3px]" style={{ borderColor: "#FF177B" }}>
        {/* Banner */}
        <div className="relative">
          <div className="absolute top-1.5 right-1.5 z-10">
            <span className="inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[5px] font-bold text-white shadow" style={{ background: "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)" }}><Sparkles size={5} /> Contenido variable</span>
          </div>
          <Image src={`${IMG}/Banner Mundial.png`} alt="Banner promocional Mundial 2026 — ejemplo de contenido variable en PDP" title="Contenido variable por campaña con Omnitok Content" width={800} height={300} className="w-full h-auto" />
        </div>

        {/* Tech features bar */}
        <div className="grid grid-cols-4 border-b border-gray-100" style={{ background: "#fafafa" }}>
          {techFeatures.map((f, i) => (
            <div key={f.label} className={`flex flex-col items-center gap-0.5 py-2 ${i < 3 ? "border-r border-gray-100" : ""}`}>
              <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1a1838 0%, #2d2a6e 100%)" }}>
                <Image src={f.src} alt={f.label} width={14} height={14} className="w-3 h-3 object-contain" quality={100} />
              </div>
              <p className="text-[4.5px] font-bold text-gray-700 text-center leading-tight">{f.label}</p>
            </div>
          ))}
        </div>

        {/* KSP zigzag — each card demonstrates a different enriched-content format */}
        {ksps.map((ksp, i) => {
          const rev = i % 2 === 1;
          return (
            <div key={ksp.title} className={`grid grid-cols-2 ${i > 0 ? "border-t border-gray-100" : ""}`} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
              <div className={`relative flex items-stretch justify-center overflow-hidden ${rev ? "order-2" : "order-1"}`}>
                {i === 1 ? (
                  /* Card 2 — VIDEO (family watching TV) with cinematic caption */
                  <>
                    <video src={`${IMG}/VIDEO TELE.mp4`} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />
                    {/* Top row: live dot + timestamp */}
                    <div className="absolute top-1.5 left-1.5 right-1.5 flex items-center justify-between text-white">
                      <span className="inline-flex items-center gap-[3px] text-[5px] font-semibold tracking-[0.18em]" style={{ fontFamily: "ui-monospace, monospace" }}>
                        <span className="h-[5px] w-[5px] rounded-full bg-accent pdp-livedot" />
                        REPRODUCIENDO
                      </span>
                      <span className="text-[5px] font-semibold tracking-wider tabular-nums" style={{ fontFamily: "ui-monospace, monospace" }}>00:12 / 00:30</span>
                    </div>
                    {/* Cinematic caption */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[78%]">
                      <p className="text-center text-[6px] font-semibold text-white tracking-wide leading-tight" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.6)" }}>
                        Dolby Atmos · 40 W · 5.1.2
                      </p>
                    </div>
                    {/* Thin scrubbable waveform at very bottom */}
                    <div className="absolute bottom-[4px] left-2 right-2 flex items-end gap-[1px] h-[6px] opacity-90">
                      {[0.3,0.55,0.7,0.45,0.85,0.6,0.5,0.95,0.4,0.7,0.55,0.8,0.35,0.6,0.75,0.5,0.9,0.45,0.65,0.55].map((h, k) => (
                        <span key={k} className="flex-1 rounded-[0.5px] bg-white pdp-wave" style={{ height: `${h * 100}%`, animationDelay: `${k * 0.05}s` }} />
                      ))}
                    </div>
                  </>
                ) : i === 0 ? (
                  /* Card 1 — Colors (gradient sweep + spec chip) */
                  <>
                    <Image src={ksp.img} alt={ksp.title} title={ksp.title} width={1200} height={800} className="w-full h-full object-cover" sizes="(max-width: 640px) 50vw, 640px" quality={95} />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    {/* Tag chip top-left */}
                    <span className="absolute top-1.5 left-1.5 inline-flex items-center gap-[3px] text-[5px] font-semibold tracking-[0.18em] text-white" style={{ fontFamily: "ui-monospace, monospace" }}>
                      <span className="h-[5px] w-[5px] rounded-full bg-accent" />
                      RANGO DE COLOR
                    </span>
                    {/* Spec line */}
                    <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between text-white/95" style={{ fontFamily: "ui-monospace, monospace" }}>
                      <span className="text-[5px] font-semibold tracking-wider tabular-nums">1.07B</span>
                      <span className="text-[5px] font-semibold tracking-widest">DCI-P3 · 98%</span>
                    </div>
                  </>
                ) : i === 2 ? (
                  /* Card 3 — Technical schematic (measurement + crosshairs) */
                  <>
                    <Image src={ksp.img} alt={ksp.title} title={ksp.title} width={1200} height={800} className="w-full h-full object-cover" sizes="(max-width: 640px) 50vw, 640px" quality={95} />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/55" />
                    {/* Tag chip top-left */}
                    <span className="absolute top-1.5 left-1.5 inline-flex items-center gap-[3px] text-[5px] font-semibold tracking-[0.18em] text-white" style={{ fontFamily: "ui-monospace, monospace" }}>
                      <span className="h-[5px] w-[5px] rounded-full bg-accent" />
                      VISTA TÉCNICA
                    </span>
                    {/* Corner crosshairs — HUD feel */}
                    {[
                      { t: 0,    l: 0,    dTop: true,  dLeft: true  },
                      { t: 0,    r: 0,    dTop: true,  dRight: true },
                      { b: 0,    l: 0,    dBot: true,  dLeft: true  },
                      { b: 0,    r: 0,    dBot: true,  dRight: true },
                    ].map((p, k) => (
                      <span key={k} className="absolute w-2 h-2" style={{ top: p.t as number | undefined, bottom: p.b as number | undefined, left: p.l as number | undefined, right: p.r as number | undefined, margin: "4px" }}>
                        {p.dTop &&  <span className="absolute top-0 left-0 h-[1px] w-full bg-white/80" />}
                        {p.dBot &&  <span className="absolute bottom-0 left-0 h-[1px] w-full bg-white/80" />}
                        {p.dLeft && <span className="absolute top-0 left-0 w-[1px] h-full bg-white/80" />}
                        {p.dRight && <span className="absolute top-0 right-0 w-[1px] h-full bg-white/80" />}
                      </span>
                    ))}
                    {/* Technical measurement line with thin dashes */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 pdp-pulse">
                      <span className="h-[1px] w-5 bg-white/80" style={{ backgroundImage: "repeating-linear-gradient(90deg, #fff 0, #fff 2px, transparent 2px, transparent 4px)" }} />
                      <span className="inline-flex items-center rounded-[2px] border border-white/60 bg-black/70 backdrop-blur-sm px-1 py-[1px] text-[5.5px] font-bold text-white tabular-nums tracking-wider" style={{ fontFamily: "ui-monospace, monospace" }}>
                        5.0 mm
                      </span>
                      <span className="h-[1px] w-5 bg-white/80" style={{ backgroundImage: "repeating-linear-gradient(90deg, #fff 0, #fff 2px, transparent 2px, transparent 4px)" }} />
                    </div>
                    {/* Scale caption */}
                    <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between text-white/90" style={{ fontFamily: "ui-monospace, monospace" }}>
                      <span className="text-[5px] font-semibold tracking-widest">PERFIL LATERAL</span>
                      <span className="text-[5px] font-semibold tracking-widest">ESCALA 1:1</span>
                    </div>
                  </>
                ) : (
                  /* Card 4 — 360° view */
                  <>
                    <Image src={ksp.img} alt={ksp.title} title={ksp.title} width={1200} height={800} className="w-full h-full object-cover" sizes="(max-width: 640px) 50vw, 640px" quality={95} />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
                    {/* Tag chip top-left */}
                    <span className="absolute top-1.5 left-1.5 inline-flex items-center gap-[3px] text-[5px] font-semibold tracking-[0.18em] text-white" style={{ fontFamily: "ui-monospace, monospace" }}>
                      <span className="h-[5px] w-[5px] rounded-full bg-accent" />
                      VISTA 360°
                    </span>
                    {/* Azimuth readout top-right */}
                    <span className="absolute top-1.5 right-1.5 inline-flex items-center gap-[3px] text-[5px] font-semibold tracking-wider text-white tabular-nums" style={{ fontFamily: "ui-monospace, monospace" }}>
                      AZIMUTH 045°
                    </span>
                    {/* Compass ticks at bottom (0/90/180/270) */}
                    <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between text-white/80" style={{ fontFamily: "ui-monospace, monospace" }}>
                      {["0°", "90°", "180°", "270°"].map((deg, k) => (
                        <span key={deg} className="flex flex-col items-center gap-[1px]">
                          <span className="h-1 w-[1px] bg-white/70" />
                          <span className={`text-[4.5px] font-semibold tabular-nums tracking-wider ${k === 1 ? "text-accent" : ""}`}>{deg}</span>
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className={`flex flex-col justify-center px-3 py-2.5 ${rev ? "order-1" : "order-2"}`}>
                <p className="text-[5px] font-bold uppercase tracking-[0.12em] text-accent">{`0${i + 1}`}</p>
                <p className="text-[9px] font-bold text-gray-900 leading-tight mt-0.5">{ksp.title}</p>
                <p className="text-[6px] text-gray-500 leading-relaxed mt-1">{ksp.desc}</p>
              </div>
            </div>
          );
        })}

        <div className="flex items-center justify-center gap-1 py-1.5 bg-gray-50 border-t border-gray-100">
          <Sparkles size={5} className="text-accent" />
          <span className="text-[5px] text-gray-300 font-semibold tracking-wider uppercase">Contenido enriquecido por Omnitok</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes pdp-wave {
          0%, 100% { transform: scaleY(0.35); }
          50%      { transform: scaleY(1);    }
        }
        .pdp-wave {
          transform-origin: bottom;
          animation: pdp-wave 0.9s ease-in-out infinite;
        }
        @keyframes pdp-pulse {
          0%, 100% { opacity: 0.85; transform: translate(-50%, -50%) scale(1);    }
          50%      { opacity: 1;    transform: translate(-50%, -50%) scale(1.04); }
        }
        .pdp-pulse {
          animation: pdp-pulse 1.8s ease-in-out infinite;
        }
        @keyframes pdp-sweep {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(400%);  }
        }
        .pdp-sweep {
          animation: pdp-sweep 2.6s ease-in-out infinite;
        }
        @keyframes pdp-livedot {
          0%, 100% { opacity: 1;   box-shadow: 0 0 0 0 rgba(255,23,123,0.6); }
          50%      { opacity: 0.7; box-shadow: 0 0 0 3px rgba(255,23,123,0);   }
        }
        .pdp-livedot {
          animation: pdp-livedot 1.4s ease-in-out infinite;
        }
        @keyframes pdp-spin {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        .pdp-spin {
          animation: pdp-spin 4s linear infinite;
        }
      `}</style>
    </>
  );
}

/* ================================================================== */
/*  Export                                                            */
/* ================================================================== */

export default function ContentPdpMockup() {
  const [mode, setMode] = useState<"before" | "after">("after");

  return (
    <div className="w-full">
      <div className="mb-4">
        <div className="flex w-full rounded-xl border border-gray-200 bg-gray-50 p-1">
          <button type="button" onClick={() => setMode("before")}
            className={`flex-1 text-center rounded-lg px-2 py-2 text-[10px] sm:text-[11px] font-semibold transition-all ${mode === "before" ? "bg-white text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}>
            Sin contenido enriquecido
          </button>
          <button type="button" onClick={() => setMode("after")}
            className={`flex-1 text-center rounded-lg px-2 py-2 text-[10px] sm:text-[11px] font-semibold transition-all ${mode === "after" ? "bg-white text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}>
            Con Omnitok Content
          </button>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg bg-white">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 border-b border-gray-200">
          <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-amber-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" /></div>
          <div className="flex-1 mx-2 h-5 rounded-md bg-white border border-gray-200 flex items-center px-3">
            <span className="text-[8px] text-gray-400 font-mono truncate">retailer.com/tecnologia/smart-tv-oled-55-4k-uhd</span>
          </div>
        </div>
        <div className="overflow-y-auto" style={{ maxHeight: "480px" }}>
          {mode === "before" ? <BasicContent /> : <EnrichedContent />}
        </div>
      </div>

      <p className="text-center mt-3 text-[10px] text-gray-400">
        {mode === "after"
          ? "Contenido enriquecido: banner promocional, key selling points, video y hotspots interactivos."
          : "Ficha estándar sin contenido visual que destaque el producto."}
      </p>
    </div>
  );
}
