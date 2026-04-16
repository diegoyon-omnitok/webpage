import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail } from "lucide-react";
import HubSpotFormEmbed from "@/components/ui/HubSpotFormEmbed";
import { hubspotForms } from "@/lib/hubspot-forms";
import { buildMetadata, canonicalRoutes } from "@/lib/markets";

export const metadata: Metadata = buildMetadata({
  title: "Contact Omnitok US | Talk to Sales",
  description: "Talk to the Omnitok team about MAP monitoring, digital shelf analytics and brand protection for ecommerce channels.",
  path: canonicalRoutes.usa.contact,
  locale: "en-US",
  alternates: {
    es: canonicalRoutes.latam.contacto,
    "en-US": canonicalRoutes.usa.contact,
  },
  keywords: ["contact Omnitok", "MAP monitoring demo", "digital shelf analytics demo", "talk to sales Omnitok"],
});

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-20 gradient-hero relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Talk to our team
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Request a demo of Omnitok and let&apos;s talk about MAP monitoring, digital shelf analytics and brand protection for ecommerce channels.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z" fill="white" /></svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <HubSpotFormEmbed config={hubspotForms.usaContact} />
            </div>

            {/* Contact info */}
            <div className="space-y-5">
              <h2 className="text-xl font-bold text-gray-900">Contact channels</h2>
              {[
                { icon: Mail, label: "Email", value: "hello@omnitok.com", href: "mailto:hello@omnitok.com" },
                { icon: Clock, label: "Response time", value: "Less than 24 business hours", href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-primary hover:underline">{item.value}</a>
                    ) : (
                      <p className="text-sm font-medium text-gray-700">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 shadow-card">
                <p className="text-sm font-bold text-gray-900">Explore the right solution before you book a call</p>
                <div className="mt-4 space-y-3">
                  <Link href={canonicalRoutes.usa.map} className="block text-sm font-semibold text-primary hover:underline">
                    MAP monitoring software
                  </Link>
                  <Link href={canonicalRoutes.usa.dsa} className="block text-sm font-semibold text-primary hover:underline">
                    Digital shelf analytics software
                  </Link>
                  <Link href={canonicalRoutes.usa.blog} className="block text-sm font-semibold text-primary hover:underline">
                    MAP and digital shelf insights
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
