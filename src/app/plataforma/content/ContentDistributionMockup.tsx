"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Check,
  Sparkles,
  ArrowDown,
  ShoppingCart,
  Search,
  Menu,
  User,
  Star,
  Heart,
  Truck,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const TV_HERO = "/plataforma/content/CARRUSEL 1.png";
const TV_THUMB_2 = "/plataforma/content/CARRUSEL 2.png";
const TV_THUMB_3 = "/plataforma/content/CARRUSEL 3.png";
const TV_THUMB_4 = "/plataforma/content/CARRUSEL 4.png";
const LIFESTYLE = "/plataforma/content/lifestyle 2.png";
const LIFESTYLE_TECH = "/plataforma/content/lifestyle 3.png";

const thumbs = [TV_HERO, TV_THUMB_2, TV_THUMB_3, TV_THUMB_4];
const specs: [string, string][] = [
  ["Pantalla", "OLED 55\""],
  ["Resolución", "4K UHD"],
  ["HDR", "Dolby Vision"],
  ["Audio", "Atmos 40W"],
];

// Each tile below simulates a distinct retailer. Colors are brand-neutral
// so the visual language reads as "six different retailers" without
// implying any real partnership.
const retailers = [
  { name: "Retail 1", color: "#F59E0B", initial: "A" },
  { name: "Retail 2", color: "#2563EB", initial: "B" },
  { name: "Retail 3", color: "#059669", initial: "C" },
  { name: "Retail 4", color: "#7C3AED", initial: "D" },
];

type RetailBrand = { color: string; initial: string } | null;

function RetailPdpCard({
  retailer,
  compact,
  pending = false,
}: {
  retailer: RetailBrand;
  compact: boolean;
  pending?: boolean;
}) {
  // Size tokens — one set for full (top card), one for compact (6 tiles).
  const t = compact
    ? {
        header: "h-2.5 px-1",
        headerIcon: 6,
        breadcrumb: "text-[3px] px-1 py-px",
        pdp: "p-1 gap-1",
        gallery: "w-9",
        galleryImg: "h-7",
        hotspot: "w-1 h-1",
        navBtn: "w-2 h-2",
        navIcon: 5,
        thumb: "w-2 h-1.5 rounded-[1px]",
        brand: "text-[3px] tracking-wider",
        title: "text-[4px] leading-tight",
        star: 3,
        review: "text-[3px]",
        oldPrice: "text-[3px]",
        discount: "text-[3px] px-0.5",
        price: "text-[6px]",
        installments: "text-[3px]",
        cta: "text-[3px] px-1 py-px gap-0.5",
        ctaIcon: 4,
        heartBtn: "w-2.5 h-2.5",
        heartIcon: 5,
        trust: "text-[3px] gap-0.5",
        trustIcon: 4,
        specsWrap: "px-1 py-px",
        specsTitle: "text-[3px] mb-px",
        specsRow: "text-[3px]",
        fichaWrap: "p-1 gap-1",
        fichaImg: "w-6 h-5",
        fichaBadge: "text-[3px] px-1 py-px top-0.5 right-0.5",
        fichaBadgeIcon: 4,
        fichaNumber: "text-[3px]",
        fichaTitle: "text-[4px]",
        fichaDesc: "text-[3px] leading-tight mt-px",
        chipsWrap: "gap-0.5 p-0.5",
        chipImg: "h-2.5",
        chipLabel: "text-[3px]",
        pillsWrap: "px-1 py-0.5 gap-0.5",
        pill: "text-[3px] px-1 py-px",
        statusWrap: "px-1 py-0.5",
        statusIcon: 5,
        statusText: "text-[3px]",
      }
    : {
        header: "h-4 px-2",
        headerIcon: 7,
        breadcrumb: "text-[5px] px-2 py-px",
        pdp: "p-1.5 gap-1.5",
        gallery: "w-20",
        galleryImg: "h-16",
        hotspot: "w-1.5 h-1.5",
        navBtn: "w-3 h-3",
        navIcon: 6,
        thumb: "w-4 h-3.5 rounded",
        brand: "text-[5px] tracking-widest",
        title: "text-[7px] leading-tight",
        star: 6,
        review: "text-[4px]",
        oldPrice: "text-[5px]",
        discount: "text-[4px] px-1 py-0.5",
        price: "text-[10px]",
        installments: "text-[4px]",
        cta: "text-[6px] px-1.5 py-0.5 gap-1",
        ctaIcon: 7,
        heartBtn: "w-4 h-4",
        heartIcon: 8,
        trust: "text-[4px] gap-0.5",
        trustIcon: 6,
        specsWrap: "px-2 py-0.5",
        specsTitle: "text-[5px] mb-px",
        specsRow: "text-[4px]",
        fichaWrap: "p-2 gap-2",
        fichaImg: "w-24 h-20",
        fichaBadge: "text-[6px] px-1.5 py-0.5 top-1 right-1.5",
        fichaBadgeIcon: 6,
        fichaNumber: "text-[6px]",
        fichaTitle: "text-[9px]",
        fichaDesc: "text-[6px] leading-snug mt-0.5",
        chipsWrap: "gap-1 p-2",
        chipImg: "h-7",
        chipLabel: "text-[5px]",
        pillsWrap: "px-2.5 py-1 gap-1",
        pill: "text-[5px] px-1.5 py-0.5",
        statusWrap: "px-2 py-1",
        statusIcon: 8,
        statusText: "text-[6px]",
      };

  const headerBg = retailer?.color || "#111827";
  const dim = pending ? "opacity-40" : "opacity-100";

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-lg border bg-white transition-all duration-500 ${dim}`}
      style={{ borderColor: retailer && !pending ? retailer.color : "#E5E7EB" }}
    >
      {/* Retailer header */}
      <div className={`${t.header} flex items-center justify-between`} style={{ background: headerBg }}>
        {retailer ? (
          <>
            <div className="flex items-center gap-0.5">
              <div className={`${compact ? "w-2 h-2" : "w-3 h-3"} rounded-[1px] bg-white flex items-center justify-center`}>
                <span className={`${compact ? "text-[4px]" : "text-[7px]"} font-black leading-none`} style={{ color: headerBg }}>{retailer.initial}</span>
              </div>
              <div className={`${compact ? "w-4 h-0.5" : "w-10 h-1"} rounded-full bg-white/70`} />
            </div>
            <div className="flex items-center gap-0.5">
              <Search size={t.headerIcon} className="text-white/70" />
              {!compact && <User size={t.headerIcon} className="text-white/70" />}
              {!compact && <ShoppingCart size={t.headerIcon} className="text-white/70" />}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-1">
              <Menu size={t.headerIcon} className="text-white/70" />
              <div className="w-3 h-3 rounded-sm bg-white/90" />
              <div className="w-10 h-1 rounded-full bg-white/70" />
            </div>
            <div className="flex items-center gap-1.5">
              <Search size={t.headerIcon} className="text-white/70" />
              <User size={t.headerIcon} className="text-white/70" />
              <ShoppingCart size={t.headerIcon} className="text-white/70" />
            </div>
          </>
        )}
      </div>

      {/* Breadcrumb */}
      <div className={`${t.breadcrumb} bg-gray-50 border-b border-gray-100`}>
        <p className="text-gray-400 leading-none truncate">Home › TV › Smart TV › 55&quot;</p>
      </div>

      {/* PDP main */}
      <div className={`flex ${t.pdp}`}>
        <div className={`${t.gallery} flex-shrink-0 flex flex-col gap-1`}>
          <div className={`relative ${t.galleryImg} rounded bg-gray-50 overflow-hidden border border-gray-100`}>
            <Image src={TV_HERO} alt="Smart TV OLED 55 pulgadas" fill className="object-contain" />
            <div className={`absolute top-[30%] right-[25%] ${t.hotspot} rounded-full shadow-md ring-1 ring-white`} style={{ background: "#FF177B" }} />
            <div className={`absolute bottom-[30%] left-[35%] ${t.hotspot} rounded-full shadow-md ring-1 ring-white`} style={{ background: "#4D4A9D" }} />
            <div className={`absolute left-0.5 top-1/2 -translate-y-1/2 ${t.navBtn} rounded-full bg-white/80 flex items-center justify-center`}>
              <ChevronLeft size={t.navIcon} className="text-gray-500" />
            </div>
            <div className={`absolute right-0.5 top-1/2 -translate-y-1/2 ${t.navBtn} rounded-full bg-white/80 flex items-center justify-center`}>
              <ChevronRight size={t.navIcon} className="text-gray-500" />
            </div>
          </div>
          {!compact && (
            <div className="flex gap-0.5">
              {thumbs.map((thumb, i) => (
                <div key={i} className={`${t.thumb} border overflow-hidden bg-gray-50 ${i === 0 ? "ring-1 ring-pink-500 border-pink-500" : "border-gray-200"}`}>
                  <Image src={thumb} alt="" width={24} height={20} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0 flex flex-col gap-0.5">
          <span className={`${t.brand} font-bold text-gray-400 leading-none`}>BRAND A</span>
          <h3 className={`${t.title} font-bold text-gray-900`}>
            Smart TV OLED 55&quot; 4K UHD Dolby Vision + Atmos
          </h3>
          <div className="flex items-center gap-px">
            {[0, 1, 2, 3].map((i) => (
              <Star key={i} size={t.star} className="fill-yellow-400 text-yellow-400" />
            ))}
            <Star size={t.star} className="text-gray-300" />
            <span className={`${t.review} text-gray-400 ml-0.5`}>(312)</span>
          </div>
          <div className="flex items-baseline gap-1 mt-0.5 leading-none">
            <span className={`${t.oldPrice} text-gray-400 line-through`}>$899.990</span>
            <span className={`${t.discount} font-black rounded text-white`} style={{ background: "#DC2626" }}>-22%</span>
          </div>
          <span className={`${t.price} font-black text-gray-900 leading-none`}>$699.990</span>
          <span className={`${t.installments} text-emerald-600 font-semibold leading-none`}>6 cuotas sin interés</span>
          <div className="flex items-center gap-1 mt-0.5">
            <button className={`flex-1 inline-flex items-center justify-center ${t.cta} font-bold rounded text-white shadow-sm`} style={{ background: "#FF177B" }}>
              <ShoppingCart size={t.ctaIcon} /> {compact ? "Agregar" : "Agregar al carro"}
            </button>
            <button className={`${t.heartBtn} rounded border border-gray-200 flex items-center justify-center bg-white flex-shrink-0`} aria-label="Wishlist">
              <Heart size={t.heartIcon} className="text-gray-400" />
            </button>
          </div>
          {!compact && (
            <div className="mt-1 space-y-0.5">
              <div className={`flex items-center ${t.trust}`}>
                <Truck size={t.trustIcon} className="text-emerald-600" />
                <span className="text-gray-600">Despacho gratis 2-3 días</span>
              </div>
              <div className={`flex items-center ${t.trust}`}>
                <Shield size={t.trustIcon} className="text-emerald-600" />
                <span className="text-gray-600">Garantía oficial 1 año</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Specifications */}
      <div className={`${t.specsWrap} border-t border-gray-100 bg-gray-50`}>
        <p className={`${t.specsTitle} font-bold text-gray-700 uppercase tracking-wider`}>Especificaciones</p>
        <div className="grid grid-cols-2 gap-x-2 gap-y-px">
          {specs.map(([k, v]) => (
            <div key={k} className={`${t.specsRow} flex justify-between leading-tight`}>
              <span className="text-gray-400 truncate">{k}</span>
              <span className="font-semibold text-gray-700 truncate">{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Ficha de contenido — rich multi-block module, emphasizing enriched content */}
      <div className="relative border-t border-gray-100">
        <div className={`absolute ${t.fichaBadge.split(" ").slice(2).join(" ")} z-20`}>
          <span className={`inline-flex items-center gap-0.5 rounded-full ${t.fichaBadge.split(" ").slice(0, 2).join(" ")} font-bold text-white shadow-md`} style={{ background: "linear-gradient(90deg, #FF177B 0%, #4D4A9D 100%)" }}>
            <Sparkles size={t.fichaBadgeIcon} /> {compact ? "Enriquecido" : "Contenido enriquecido"}
          </span>
        </div>

        {/* 2x2 alternating grid (image | text | text | image) + full-width tech block on master only */}
        <div className={`grid grid-cols-2 ${compact ? "p-0.5 pt-1 gap-0.5" : "p-1.5 pt-2 gap-1.5"}`}>
          {/* Cell 1: image + badge (Rango de color) */}
          <div className={`relative rounded overflow-hidden bg-black ${compact ? "h-6" : "h-16"}`}>
            <Image src={LIFESTYLE} alt="Lifestyle con el televisor" fill className="object-cover" />
            <div className={`absolute inline-flex items-center rounded-full bg-black/60 backdrop-blur ${compact ? "top-px left-px px-0.5 py-px gap-px" : "top-1 left-1 px-1.5 py-0.5 gap-0.5"}`}>
              <span className={`rounded-full ${compact ? "w-px h-px" : "w-1 h-1"}`} style={{ background: "#FF177B" }} />
              <span className={`font-bold text-white tracking-wider ${compact ? "text-[2.5px]" : "text-[5px]"}`}>RANGO DE COLOR</span>
            </div>
            <div className={`absolute font-black text-white ${compact ? "bottom-px left-px text-[2.5px]" : "bottom-1 left-1 text-[6px]"}`}>1.07B</div>
            <div className={`absolute font-semibold text-white/80 ${compact ? "bottom-px right-px text-[2.5px]" : "bottom-1 right-1 text-[5px]"}`}>DCI-P3 · 98%</div>
          </div>

          {/* Cell 2: text — Colores que cobran vida */}
          <div className={`bg-white rounded flex flex-col justify-center ${compact ? "h-6 px-0.5 py-0.5" : "h-16 px-1 py-1"}`}>
            <span className={`font-black tracking-widest leading-none ${compact ? "text-[2.5px]" : "text-[6px]"}`} style={{ color: "#FF177B" }}>01</span>
            <h4 className={`font-black text-gray-900 leading-tight ${compact ? "text-[3.5px]" : "text-[8px]"}`}>Colores que cobran vida</h4>
            {!compact && (
              <p className="text-gray-500 text-[5px] leading-snug mt-0.5">
                Negros absolutos y más de mil millones de colores. Cada pixel se ilumina de forma independiente.
              </p>
            )}
          </div>

          {/* Cell 3: text — Sonido que te envuelve */}
          <div className={`bg-white rounded flex flex-col justify-center ${compact ? "h-6 px-0.5 py-0.5" : "h-16 px-1 py-1"}`}>
            <span className={`font-black tracking-widest leading-none ${compact ? "text-[2.5px]" : "text-[6px]"}`} style={{ color: "#FF177B" }}>02</span>
            <h4 className={`font-black text-gray-900 leading-tight ${compact ? "text-[3.5px]" : "text-[8px]"}`}>Sonido que te envuelve</h4>
            {!compact && (
              <p className="text-gray-500 text-[5px] leading-snug mt-0.5">
                Dolby Atmos integrado con 40W. El audio sigue la acción en pantalla.
              </p>
            )}
          </div>

          {/* Cell 4: image — Dolby Atmos demo */}
          <div className={`relative rounded overflow-hidden bg-gray-900 ${compact ? "h-6" : "h-16"}`}>
            <Image src={TV_THUMB_4} alt="Televisor con Dolby Atmos" fill className="object-cover" />
            <div className={`absolute inline-flex items-center rounded-full bg-black/60 backdrop-blur ${compact ? "top-px left-px px-0.5 py-px gap-px" : "top-1 left-1 px-1.5 py-0.5 gap-0.5"}`}>
              <span className={`rounded-full ${compact ? "w-px h-px" : "w-1 h-1"}`} style={{ background: "#FF177B" }} />
              <span className={`font-bold text-white tracking-wider ${compact ? "text-[2.5px]" : "text-[5px]"}`}>REPRODUCIENDO</span>
            </div>
            <div className={`absolute flex items-center justify-between ${compact ? "bottom-px left-px right-px" : "bottom-1 left-1 right-1"}`}>
              <span className={`font-semibold text-white ${compact ? "text-[2.5px]" : "text-[5px]"}`}>{compact ? "Atmos · 40W" : "Dolby Atmos · 40W"}</span>
              <span className={`font-black text-white ${compact ? "text-[2.5px]" : "text-[5px]"}`}>5.1.2</span>
            </div>
          </div>

          {/* Full-width: Vista técnica / Diseño ultra delgado — master only */}
          {!compact && (
            <div className="col-span-2 relative h-20 rounded overflow-hidden">
              <Image src={LIFESTYLE_TECH} alt="Vista técnica del televisor ultra delgado" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
              <div className="absolute top-1 left-1 inline-flex items-center gap-0.5 rounded-full bg-black/60 backdrop-blur px-1.5 py-0.5">
                <span className="w-1 h-1 rounded-full" style={{ background: "#FF177B" }} />
                <span className="text-[5px] font-bold text-white tracking-wider">VISTA TÉCNICA</span>
              </div>
              <div className="absolute bottom-1 left-1.5 right-1.5 flex items-end justify-between gap-2">
                <div className="min-w-0">
                  <span className="text-[6px] font-black tracking-widest text-pink-300">03</span>
                  <h4 className="text-[8px] font-black text-white leading-tight">Diseño ultra delgado</h4>
                  <p className="text-[5px] text-white/80 leading-snug">Solo 5mm de perfil. Bordes casi invisibles.</p>
                </div>
                <span className="text-[5px] font-semibold text-white/70 flex-shrink-0">PERFIL 5.0 MM</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {retailer && !pending && (
        <div className={`bg-white ${t.statusWrap} flex items-center justify-end border-t border-gray-100`}>
          <span className={`inline-flex items-center gap-0.5 ${t.statusText} font-bold`} style={{ color: retailer.color }}>
            <Check size={t.statusIcon} /> Live
          </span>
        </div>
      )}
    </div>
  );
}

export default function ContentDistributionMockup() {
  const [published, setPublished] = useState<number[]>([]);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setPublished([]);
    const timers: ReturnType<typeof setTimeout>[] = [];
    retailers.forEach((_, i) => {
      timers.push(setTimeout(() => setPublished((prev) => [...prev, i]), i * 350 + 500));
    });
    const restart = setTimeout(() => setCycle((c) => c + 1), 5500);
    return () => { timers.forEach(clearTimeout); clearTimeout(restart); };
  }, [cycle]);

  return (
    <div className="w-full flex flex-col items-center gap-4">

      {/* Master source — the enriched content on a generic retailer PDP */}
      <div className="w-80">
        <RetailPdpCard retailer={null} compact={false} />
      </div>

      {/* Arrow */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-px h-4" style={{ background: "linear-gradient(180deg, #FF177B 0%, #4D4A9D 100%)" }} />
        <div className="w-7 h-7 rounded-full flex items-center justify-center shadow-md" style={{ background: "linear-gradient(135deg, #FF177B 0%, #4D4A9D 100%)" }}>
          <ArrowDown size={12} className="text-white" />
        </div>
        <p className="text-[7px] font-bold text-gray-400 uppercase tracking-wider">Distribución automática</p>
      </div>

      {/* Retailer grid — 6 mini PDPs, each a replica on a different retailer */}
      <div className="w-full grid grid-cols-2 gap-2">
        {retailers.map((r, i) => (
          <RetailPdpCard
            key={r.name}
            retailer={r}
            compact
            pending={!published.includes(i)}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center">
        <p className="text-[11px] font-black tabular-nums" style={{ color: "#FF177B" }}>
          {published.length}/{retailers.length} retailers actualizados
        </p>
        <p className="text-[8px] text-gray-400">
          Más de 150 retailers conectados en la red de Omnitok
        </p>
      </div>
    </div>
  );
}
