"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart, Truck, ShieldCheck, Heart, ChevronLeft, ChevronRight, Sparkles, X } from "lucide-react";

const IMG = "/plataforma/content";
const slides = [
  `${IMG}/CARRUSEL 1.png`, `${IMG}/CARRUSEL 2.png`, `${IMG}/CARRUSEL 3.png`, `${IMG}/CARRUSEL 4.png`,
];
const techs = [
  { src: `${IMG}/OLED.png`, label: "Tecnologia OLED", desc: "Pretos perfeitos com pixels autoiluminados." },
  { src: `${IMG}/4k.png`, label: "Resolução 4K UHD", desc: "8,3 milhões de pixels, 4x mais que Full HD." },
  { src: `${IMG}/hdr.png`, label: "HDR Dolby Vision", desc: "Cores e brilho mais realistas." },
];
const ksps = [
  { img: `${IMG}/lifestlye 1.png`, title: "Cores que ganham vida", desc: "Pretos absolutos e mais de um bilhão de cores. Cada pixel se ilumina de forma independente.", dark: false },
  { img: `${IMG}/lifestyle 2.png`, title: "Som que envolve você", desc: "Dolby Atmos integrado com 40W. O áudio acompanha a ação na tela para uma experiência de cinema de verdade.", dark: false },
  { img: `${IMG}/lifestyle 3.png`, title: "Design ultrafino", desc: "Apenas 5mm de perfil. Bordas quase invisíveis que maximizam a área de tela.", dark: false },
  { img: `${IMG}/CARRUSEL 2.png`, title: "Explore cada ângulo", desc: "Vista 360° do produto. Gire a TV para ver o perfil, as portas e os detalhes de design antes de comprar.", dark: false },
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
        <span className="text-[12px] font-black text-gray-900">R$ 3.499,90</span>
        <span className="text-[7px] text-gray-400 line-through">R$ 4.499,90</span>
        <span className="text-[5px] font-bold text-white bg-red-500 px-1 py-0.5 rounded">-22%</span>
      </div>
      <p className="text-[5px] text-green-600 font-semibold mt-0.5">10x sem juros</p>
      <div className="flex gap-1 mt-2">
        <button className="flex-1 rounded py-1 text-[6px] font-bold text-white flex items-center justify-center gap-0.5" style={{ background: "#FF177B" }}>
          <ShoppingCart size={7} /> Adicionar ao carrinho
        </button>
        <button className="w-6 rounded border border-gray-200 flex items-center justify-center"><Heart size={7} className="text-gray-400" /></button>
      </div>
      <div className="mt-2 space-y-1 border-t border-gray-100 pt-1.5">
        <div className="flex items-center gap-1"><Truck size={7} className="text-green-500" /><span className="text-[5px] text-gray-600">Frete grátis, chega em 2-3 dias</span></div>
        <div className="flex items-center gap-1"><ShieldCheck size={7} className="text-primary" /><span className="text-[5px] text-gray-600">Garantia oficial de 3 anos</span></div>
      </div>
      <div className="mt-2 border-t border-gray-100 pt-1.5">
        <p className="text-[6px] font-bold text-gray-700 mb-0.5">Especificações</p>
        {[["Tela", "OLED 55\""], ["Resolução", "4K UHD"], ["HDR", "Dolby Vision"], ["Áudio", "Dolby Atmos 40W"], ["Smart TV", "webOS"], ["HDMI", "4 (eARC)"]].map(([k, v]) => (
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
/*  SEM CONTEÚDO                                                      */
/* ================================================================== */

function BasicContent() {
  return (
    <>
      {/* 2-col product area */}
      <div className="grid grid-cols-[1.2fr_0.8fr] gap-0 border-b border-gray-100">
        <div className="p-2.5 border-r border-gray-100">
          <div className="aspect-[4/3] rounded bg-gray-50 overflow-hidden border border-gray-100 flex items-center justify-center">
            <Image src={slides[0]} alt="Smart TV OLED 55 polegadas — exemplo de imagem de produto na PDP" title="Exemplo de página de produto sem conteúdo enriquecido" width={800} height={600} className="w-full h-full object-contain p-2" sizes="(max-width: 640px) 60vw, 400px" quality={95} />
          </div>
          <div className="flex gap-0.5 mt-1">
            {slides.map((s, i) => <div key={i} className="w-7 h-7 rounded border border-gray-200 overflow-hidden"><Image src={s} alt={`Miniatura ${i + 1} de produto de exemplo`} width={28} height={28} className="w-full h-full object-contain" /></div>)}
          </div>
        </div>
        <div className="p-2.5">
          <ProductSidebar />
        </div>
      </div>

      {/* Plain text description */}
      <div className="px-3 pt-2 pb-1.5">
        <p className="text-[7px] font-bold text-gray-700 mb-1">Descrição e Especificações Técnicas</p>
        <p className="text-[6px] text-gray-500 leading-relaxed">
          Descrição do Produto: Esta Smart TV OLED de 55 polegadas oferece resolução 4K UHD com tecnologia Dolby Vision para imagens mais realistas e Dolby Atmos integrado para um som envolvente*. Seu painel OLED conta com pixels autoiluminados que permitem pretos perfeitos e um contraste infinito. Equipada com 4 portas HDMI (1 eARC), sistema operacional webOS com inteligência artificial ThinQ AI e conectividade WiFi e Bluetooth.
        </p>
        <p className="text-[6px] text-gray-500 leading-relaxed mt-1">*Em comparação com painéis LED convencionais.</p>
        <p className="text-[6px] font-semibold text-gray-600 mt-2 mb-1">Principais Características</p>
        <p className="text-[6px] text-gray-500 leading-relaxed">
          - Tela OLED de 55 polegadas.{"\n"}
          - Resolução 4K UHD (3840 x 2160).{"\n"}
          - HDR: Dolby Vision / HDR10+.{"\n"}
          - Áudio: Dolby Atmos, 40W.{"\n"}
          - Sistema operacional: webOS com ThinQ AI.{"\n"}
          - Conectividade: WiFi, Bluetooth, 4 HDMI, 3 USB.{"\n"}
          - Processador inteligente a9 Gen6.{"\n"}
          - Modo filmmaker e modo game.
        </p>
      </div>

      {/* Specs table */}
      <div className="px-3 border-t border-gray-100 pt-2 pb-1.5">
        <p className="text-[7px] font-bold text-gray-700 mb-1">Especificações</p>
        {[["Marca", "Brand A"], ["Tipo de Produto", "Smart TV OLED"], ["Modelo", "OLED55-4K-2026"], ["Tamanho da Tela", "55 Polegadas"], ["Resolução", "4K UHD (3840x2160)"], ["Tecnologia HDR", "Dolby Vision / HDR10+"], ["Sistema de Áudio", "Dolby Atmos 40W"], ["Sistema Operacional", "webOS"], ["Portas HDMI", "4 (1 eARC)"], ["Portas USB", "3"], ["Conectividade", "WiFi / Bluetooth"], ["Potência", "120W"], ["Dimensões (aprox.)", "123 x 71 x 4.7 cm"], ["Peso (aprox.)", "14,5 kg"]].map(([k, v]) => (
          <div key={k} className="flex justify-between py-[2px] border-b border-gray-50 last:border-0">
            <span className="text-[5px] text-gray-400">{k}</span>
            <span className="text-[5px] text-gray-600 font-medium">{v}</span>
          </div>
        ))}
      </div>

      {/* Trocas e devoluções */}
      <div className="px-3 border-t border-gray-100 pt-2 pb-1.5">
        <p className="text-[7px] font-bold text-gray-700 mb-1">Trocas e Devoluções</p>
        <p className="text-[6px] text-gray-500 leading-relaxed">
          Você pode ir a qualquer loja do Varejista para realizar a troca ou devolução do produto, de forma gratuita. Você tem de 7 a 30 dias úteis dependendo do tipo de produto. Busque mais informações e confira nossas políticas de trocas e devoluções ou entre em contato pelos nossos canais de atendimento.
        </p>
      </div>

      {/* Garantia */}
      <div className="px-3 border-t border-gray-100 pt-2 pb-2">
        <p className="text-[7px] font-bold text-gray-700 mb-1">Garantia e Assistência</p>
        <p className="text-[6px] text-gray-500 leading-relaxed">
          Os produtos que o Varejista comercializa contam com garantia de funcionamento conforme a garantia de entrada no país dependendo do tipo de produto. Entre móveis e eletro, recomendamos conferir o certificado de garantia que acompanha o produto.
        </p>
      </div>

      {/* Similar products */}
      <div className="px-3 border-t border-gray-100 pt-2 pb-3">
        <p className="text-[7px] font-bold text-gray-700 mb-1">Produtos similares</p>
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
/*  COM OMNITOK                                                       */
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
            <Image src={slides[slide]} alt="Smart TV OLED 55 polegadas — exemplo de produto com conteúdo enriquecido Omnitok" title="Página de produto aprimorada com conteúdo enriquecido Omnitok Content" fill className="object-contain p-2" sizes="(max-width: 640px) 60vw, 400px" quality={95} />
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
                <Image src={s} alt={`Miniatura ${i + 1} do carrossel de produto enriquecido`} width={28} height={28} className="w-full h-full object-contain" />
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
            <span className="inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[5px] font-bold text-white shadow" style={{ background: "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)" }}><Sparkles size={5} /> Conteúdo variável</span>
          </div>
          <Image src={`${IMG}/Banner Mundial.png`} alt="Banner promocional Copa do Mundo 2026 — exemplo de conteúdo variável na PDP" title="Conteúdo variável por campanha com Omnitok Content" width={800} height={300} className="w-full h-auto" />
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
                        REPRODUZINDO
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
                      GAMA DE CORES
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
                      AZIMUTE 045°
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
          <span className="text-[5px] text-gray-300 font-semibold tracking-wider uppercase">Conteúdo enriquecido por Omnitok</span>
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
            aria-pressed={mode === "before"}
            className={`flex-1 text-center rounded-lg px-2 py-2 text-[10px] sm:text-[11px] font-semibold transition-all cursor-pointer ${mode === "before" ? "bg-[#4D4A9D] text-white shadow-md" : "text-gray-500 hover:bg-white hover:text-gray-900"}`}>
            Sem conteúdo enriquecido
          </button>
          <button type="button" onClick={() => setMode("after")}
            aria-pressed={mode === "after"}
            className={`flex-1 text-center rounded-lg px-2 py-2 text-[10px] sm:text-[11px] font-semibold transition-all cursor-pointer ${mode === "after" ? "bg-[#FF177B] text-white shadow-md" : "text-gray-500 hover:bg-white hover:text-gray-900"}`}>
            Com Omnitok Content
          </button>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg bg-white">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 border-b border-gray-200">
          <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-amber-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" /></div>
          <div className="flex-1 mx-2 h-5 rounded-md bg-white border border-gray-200 flex items-center px-3">
            <span className="text-[8px] text-gray-400 font-mono truncate">varejista.com.br/tecnologia/smart-tv-oled-55-4k-uhd</span>
          </div>
        </div>
        <div className="overflow-y-auto" style={{ maxHeight: "480px" }}>
          {mode === "before" ? <BasicContent /> : <EnrichedContent />}
        </div>
      </div>

      <p className="text-center mt-3 text-[10px] text-gray-400">
        {mode === "after"
          ? "Conteúdo enriquecido: banner promocional, key selling points, vídeo e hotspots interativos."
          : "Página padrão sem conteúdo visual que destaque o produto."}
      </p>
    </div>
  );
}
