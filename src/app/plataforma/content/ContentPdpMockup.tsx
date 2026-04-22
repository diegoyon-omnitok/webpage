"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart, Truck, ShieldCheck, Heart, ChevronLeft, ChevronRight, Sparkles, X } from "lucide-react";

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
  { img: `${IMG}/lifestlye 1.png`, title: "Colores que cobran vida", desc: "Más de mil millones de colores con negros absolutos y brillo que resalta cada detalle." },
  { img: `${IMG}/lifestyle 2.png`, title: "Sonido que te envuelve", desc: "Sistema Dolby Atmos integrado con 40W de potencia que proyecta el audio en todas las direcciones. Escucha cada detalle sin necesidad de barra de sonido. El sonido sigue la accion en pantalla para una experiencia de cine real en tu sala." },
  { img: `${IMG}/lifestyle 3.png`, title: "Diseño ultra delgado", desc: "Un perfil de menos de 5mm que se integra en cualquier espacio. Bordes practicamente invisibles que maximizan el area de pantalla. Pensado para montaje en muro o sobre cualquier mueble, transformando tu living en una experiencia visual completa." },
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
            <Image src={slides[0]} alt="Smart TV OLED 55 pulgadas — ejemplo de imagen de producto en PDP" title="Ejemplo de página de producto sin contenido enriquecido" width={300} height={225} className="w-full h-full object-contain p-2" />
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
            <Image src={slides[slide]} alt="Smart TV OLED 55 pulgadas — ejemplo de producto con contenido enriquecido Omnitok" title="Página de producto mejorada con contenido enriquecido Omnitok Content" fill className="object-contain p-2" sizes="300px" />
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
      <div style={{ borderTop: "3px solid #FF177B" }}>

        {/* ── Banner campaña ── */}
        <div className="relative overflow-hidden" style={{ height: "120px" }}>
          <Image
            src={`${IMG}/Banner Mundial.png`}
            alt="Banner campaña Mundial 2026"
            fill className="object-cover object-top"
            quality={100} sizes="100vw" priority
          />
          <div className="absolute top-2 right-2 z-10">
            <span className="inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[5px] font-bold text-white"
              style={{ background: "linear-gradient(90deg,#FF177B,#4D4A9D)" }}>
              <Sparkles size={4} /> Contenido variable
            </span>
          </div>
        </div>

        {/* ── Separador ficha ── */}
        <div className="flex items-center gap-2 px-3 py-1.5" style={{ background: "#0a0a14" }}>
          <div style={{ width: 3, height: 14, borderRadius: 2, background: "linear-gradient(180deg,#FF177B,#4D4A9D)" }} />
          <span className="text-[6px] font-bold text-white uppercase tracking-[0.2em]">Ficha de producto</span>
          <span className="ml-auto inline-flex items-center gap-0.5">
            <Sparkles size={4} style={{ color: "#FF6AAA" }} />
            <span className="text-[5px] font-bold" style={{ color: "#FF6AAA" }}>Omnitok Content</span>
          </span>
        </div>

        {/* ── KSP 01: hero full-width ── */}
        <div className="relative overflow-hidden" style={{ height: "180px" }}>
          <Image
            src={`${IMG}/omnitok-content-hero.png`}
            alt="Colores que cobran vida — Smart TV OLED"
            fill className="object-cover object-center"
            quality={100} sizes="100vw"
          />
          {/* overlay izquierda */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,rgba(8,6,20,0.88) 0%,rgba(8,6,20,0.4) 48%,transparent 75%)" }} />
          <div className="absolute inset-0 flex flex-col justify-center px-4 gap-1">
            <span className="text-[5px] font-black uppercase tracking-[0.22em]" style={{ color: "#FF6AAA" }}>01 · Pantalla</span>
            <p className="text-[11px] font-black text-white leading-tight max-w-[160px]">Colores que<br/>cobran vida</p>
            <p className="text-[6px] font-medium leading-relaxed max-w-[180px]" style={{ color: "rgba(255,255,255,0.65)" }}>
              Más de mil millones de colores.<br/>Negros absolutos. Brillo hasta 2 000 nits.
            </p>
          </div>
        </div>

        {/* ── KSP 02: imagen izq · texto der ── */}
        <div className="grid border-t border-gray-100" style={{ gridTemplateColumns: "1.1fr 1fr" }}>
          <div className="relative overflow-hidden" style={{ height: "155px" }}>
            <Image
              src={`${IMG}/page-img-content-1-3.png`}
              alt="Sonido que te envuelve — Dolby Atmos"
              fill className="object-cover"
              quality={100} sizes="260px"
            />
          </div>
          <div className="flex flex-col justify-center gap-1.5 px-3 py-3" style={{ background: "#fff" }}>
            <span className="text-[5px] font-black uppercase tracking-[0.2em]" style={{ color: "#FF177B" }}>02 · Audio</span>
            <p className="text-[10px] font-black text-gray-900 leading-tight">Sonido que<br/>te envuelve</p>
            <p className="text-[6.5px] leading-relaxed font-medium text-gray-500">Dolby Atmos 60 W con Object Tracking Sound. Cine en tu sala.</p>
            <div className="flex flex-col gap-0.5 mt-0.5">
              {["Dolby Atmos integrado", "60 W · 4 altavoces", "OTS+ dirección de audio"].map(b => (
                <div key={b} className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#FF177B" }} />
                  <span className="text-[5.5px] font-semibold text-gray-600">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── KSP 03: texto izq · imagen der (dark) ── */}
        <div className="grid border-t border-gray-100" style={{ gridTemplateColumns: "1fr 1.1fr" }}>
          <div className="flex flex-col justify-center gap-1.5 px-3 py-3" style={{ background: "#0a0a14" }}>
            <span className="text-[5px] font-black uppercase tracking-[0.2em]" style={{ color: "#FF6AAA" }}>03 · Gaming</span>
            <p className="text-[10px] font-black text-white leading-tight">120 Hz.<br/>Sin lag.</p>
            <p className="text-[6px] leading-relaxed font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
              VRR · AMD FreeSync Premium · 4× HDMI 2.1
            </p>
            <div className="flex gap-2 mt-1">
              {[["120", "Hz"], ["1", "ms"], ["4K", "VRR"]].map(([v, l]) => (
                <div key={l} className="flex flex-col items-center">
                  <span className="text-[10px] font-black" style={{ color: "#FF6AAA" }}>{v}</span>
                  <span className="text-[4.5px] text-white/40 font-bold uppercase tracking-wide">{l}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden" style={{ height: "155px" }}>
            <Image
              src={`${IMG}/page-4ta-rev-img-content-1-4.png`}
              alt="Gaming 120Hz sin lag"
              fill className="object-cover"
              quality={100} sizes="260px"
            />
          </div>
        </div>

        {/* ── KSP 04: hotspots full-width ── */}
        <div className="relative overflow-hidden border-t border-gray-100" style={{ height: "160px" }}>
          <Image
            src={`${IMG}/hotspots-interactivos.png`}
            alt="Puntos interactivos sobre el producto"
            fill className="object-cover object-center"
            quality={100} sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(8,6,20,0.75) 0%,transparent 55%)" }} />
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
            <span className="text-[5px] font-black uppercase tracking-[0.2em]" style={{ color: "#FF6AAA" }}>04 · Hotspots interactivos</span>
            <p className="text-[8px] font-black text-white leading-tight mt-0.5">Explora cada tecnología<br/>directamente en la imagen</p>
          </div>
          <div className="absolute top-1.5 right-2 z-10">
            <span className="inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[5px] font-bold text-white"
              style={{ background: "linear-gradient(90deg,#FF177B,#4D4A9D)" }}>
              <Sparkles size={4} /> Interactivo
            </span>
          </div>
        </div>

        {/* ── Video ── */}
        <div className="border-t border-gray-800 overflow-hidden" style={{ background: "#000" }}>
          <video src={`${IMG}/VIDEO TELE.mp4`} autoPlay loop muted playsInline className="w-full h-auto" />
        </div>

        {/* ── Footer badge ── */}
        <div className="flex items-center justify-center gap-1.5 py-2 border-t" style={{ background: "#0a0a14", borderColor: "#1a1a2e" }}>
          <Sparkles size={5} style={{ color: "#FF6AAA" }} />
          <span className="text-[5.5px] font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>Contenido enriquecido por Omnitok</span>
        </div>
      </div>
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
      <div className="flex justify-center mb-4">
        <div className="inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1">
          <button type="button" onClick={() => setMode("before")}
            className={`rounded-lg px-5 py-2 text-[11px] font-semibold transition-all ${mode === "before" ? "bg-white text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}>
            Sin contenido enriquecido
          </button>
          <button type="button" onClick={() => setMode("after")}
            className={`rounded-lg px-5 py-2 text-[11px] font-semibold transition-all ${mode === "after" ? "bg-white text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}>
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
        <div className="overflow-y-auto" style={{ maxHeight: "600px" }}>
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
