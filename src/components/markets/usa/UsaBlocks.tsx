import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export function UsaHero({
  eyebrow,
  title,
  highlight,
  description,
  primaryCta = "Talk to sales",
  primaryHref = "/en-us/contact",
  secondaryCta,
  secondaryHref,
  aside,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  aside?: ReactNode;
}) {
  const parts = highlight ? title.split(highlight) : null;

  return (
    <section className="relative overflow-hidden gradient-hero pt-28 pb-20 text-white">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/30 blur-3xl pointer-events-none" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-0 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:items-stretch">
        <div className="animate-slide-up self-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
            <ShieldCheck size={14} className="text-accent" />
            <span className="text-xs font-medium text-white/80">{eyebrow}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.15] tracking-tight">
            {parts ? (
              <>
                {parts[0]}
                <span className="text-gradient-brand">{highlight}</span>
                {parts[1]}
              </>
            ) : (
              title
            )}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/70 leading-relaxed">{description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-opacity gradient-brand hover:opacity-90"
            >
              {primaryCta}
              <ArrowRight size={18} />
            </Link>
            {secondaryCta && secondaryHref ? (
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/15"
              >
                {secondaryCta}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="animate-fade-in relative flex items-end justify-center lg:justify-end self-end w-full min-w-0">
          {aside}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10 max-w-3xl"}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-gray-500 lg:text-lg">{description}</p>
    </div>
  );
}

export function InsightGrid({
  items,
  columns = "three",
}: {
  items: Array<{ title: string; description: string; icon?: ReactNode }>;
  columns?: "two" | "three" | "four";
}) {
  const gridClass =
    columns === "four"
      ? "lg:grid-cols-4"
      : columns === "two"
        ? "lg:grid-cols-2"
        : "lg:grid-cols-3";

  return (
    <div className={`grid gap-5 md:grid-cols-2 ${gridClass}`}>
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
        >
          {item.icon ? (
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              {item.icon}
            </div>
          ) : null}
          <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export function TimelineSteps({
  items,
}: {
  items: Array<{ title: string; description: string }>;
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={item.title}
          className="relative rounded-3xl border border-gray-100 bg-white p-6 shadow-card"
        >
          <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl gradient-brand text-sm font-bold text-white">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export function OutcomeBand({ items }: { items: string[] }) {
  return (
    <div className="rounded-[28px] bg-sidebar p-8 text-white">
      <div className="grid gap-4 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
              <CheckCircle2 size={18} className="text-accent" />
            </div>
            <p className="text-sm font-semibold leading-relaxed text-white/85">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FaqSection({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.question} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-card">
          <h3 className="text-lg font-bold text-gray-900">{item.question}</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}

export function UsaFinalCta({
  title,
  description,
  cta = "Talk to sales",
}: {
  title: string;
  description: string;
  cta?: string;
}) {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 text-white">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
          <Sparkles size={14} className="text-accent" />
          <span className="text-xs font-medium text-white/80">Built for multi-retailer growth</span>
        </div>
        <h2 className="text-3xl font-bold leading-tight text-white lg:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{description}</p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/en-us/contact"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-opacity gradient-brand hover:opacity-90"
          >
            {cta}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CardLinkGrid({
  items,
}: {
  items: Array<{ title: string; description: string; href: string; label: string }>;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
        >
          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.description}</p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            {item.label}
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      ))}
    </div>
  );
}
