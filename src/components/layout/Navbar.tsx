"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, BarChart3, Package, Bot, Layers } from "lucide-react";
import { canonicalRoutes } from "@/lib/markets";

const plataformaItems = [
  { label: "Omnitok Content", href: canonicalRoutes.latam.content, icon: Layers, desc: "Crea y distribuye contenido enriquecido" },
  { label: "Digital Shelf Analytics", href: canonicalRoutes.latam.dsa, icon: BarChart3, desc: "Monitorea tu ejecución en retailers" },
  { label: "Omnitok Connect", href: canonicalRoutes.latam.connect, icon: Package, desc: "Centraliza y distribuye tu catálogo" },
  { label: "Omnitok Assistant", href: canonicalRoutes.latam.assistant, icon: Bot, desc: "IA que responde al consumidor en el PDP" },
];

const recursosNavItems: { label: string; href: string; external?: boolean }[] = [
  { label: "Recursos", href: canonicalRoutes.latam.recursos },
  { label: "Blog", href: canonicalRoutes.latam.blog },
  { label: "Omnitok LABS", href: "https://lab.omnitok.com/", external: true },
];


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [pinnedDropdown, setPinnedDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close pinned dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setPinnedDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const activeDropdown = pinnedDropdown ?? openDropdown;

  const closeDropdowns = () => {
    setPinnedDropdown(null);
    setOpenDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-nav"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[4.5rem] py-2 sm:min-h-20 sm:py-0">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/omnitok-logo.svg"
              alt="Omnitok"
              width={200}
              height={52}
              className={`h-10 w-auto sm:h-11 lg:h-12 object-contain transition-all ${isScrolled ? "[filter:brightness(0)_saturate(100%)_invert(28%)_sepia(60%)_saturate(600%)_hue-rotate(220deg)_brightness(85%)]" : ""}`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-1">
            {/* Plataforma dropdown */}
            <div
              className="relative"
              onMouseEnter={() => !pinnedDropdown && setOpenDropdown("plataforma")}
              onMouseLeave={() => !pinnedDropdown && setOpenDropdown(null)}
            >
              <button
                onClick={() => setPinnedDropdown(pinnedDropdown === "plataforma" ? null : "plataforma")}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                Productos
                <ChevronDown
                  size={14}
                  className={`transition-transform ${activeDropdown === "plataforma" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "plataforma" && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-modal border border-gray-100 p-2 animate-fade-in">
                  {plataformaItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeDropdowns}
                      className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors mt-0.5">
                        <item.icon size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                  <div className="mt-1 pt-2 border-t border-gray-100">
                    <Link
                      href="/es/plataforma"
                      onClick={closeDropdowns}
                      className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-sm font-medium text-primary">Ver plataforma completa</span>
                      <span className="text-primary text-xs">→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>


            {/* Recursos dropdown */}
            <div
              className="relative"
              onMouseEnter={() => !pinnedDropdown && setOpenDropdown("recursos")}
              onMouseLeave={() => !pinnedDropdown && setOpenDropdown(null)}
            >
              <button
                onClick={() => setPinnedDropdown(pinnedDropdown === "recursos" ? null : "recursos")}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                Recursos
                <ChevronDown
                  size={14}
                  className={`transition-transform ${activeDropdown === "recursos" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "recursos" && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-modal border border-gray-100 p-2 animate-fade-in">
                  {recursosNavItems.map((item) =>
                    item.external ? (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeDropdowns}
                        className="block px-3 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeDropdowns}
                        className="block px-3 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium"
                      >
                        {item.label}
                      </Link>
                    ),
                  )}
                </div>
              )}
            </div>
            {/* Sobre nosotros dropdown */}
            <div
              className="relative"
              onMouseEnter={() => !pinnedDropdown && setOpenDropdown("nosotros")}
              onMouseLeave={() => !pinnedDropdown && setOpenDropdown(null)}
            >
              <button
                onClick={() => setPinnedDropdown(pinnedDropdown === "nosotros" ? null : "nosotros")}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                Nosotros
                <ChevronDown
                  size={14}
                  className={`transition-transform ${activeDropdown === "nosotros" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "nosotros" && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-modal border border-gray-100 p-2 animate-fade-in">
                  {[
                    { label: "Quiénes somos", href: canonicalRoutes.latam.nosotros },
                    { label: "Contacto", href: canonicalRoutes.latam.contacto },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeDropdowns}
                      className="block px-3 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={canonicalRoutes.latam.contacto}
              className={`text-sm font-medium transition-colors px-4 py-2 rounded-lg ${
                isScrolled
                  ? "text-gray-700 hover:text-gray-900"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Iniciar sesión
            </Link>
            <Link
              href={canonicalRoutes.latam.contacto}
              className="px-5 py-2 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity shadow-sm"
            >
              Conversemos
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 space-y-1">
            <div className="pb-3 border-b border-gray-100 mb-3">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">Plataforma</p>
              {plataformaItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  <item.icon size={16} className="text-primary" />
                  {item.label}
                </Link>
              ))}
            </div>
            {[
              ...recursosNavItems,
              { label: "Quiénes somos", href: canonicalRoutes.latam.nosotros },
              { label: "Contacto", href: canonicalRoutes.latam.contacto },
            ].map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="pt-3 border-t border-gray-100 mt-3 space-y-2">
              <Link
                href={canonicalRoutes.latam.contacto}
                className="block w-full text-center px-5 py-3 rounded-xl text-sm font-semibold text-white gradient-brand"
                onClick={() => setMobileOpen(false)}
              >
                Conversemos
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
