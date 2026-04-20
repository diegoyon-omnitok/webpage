import type { Metadata } from "next";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import { buildMetadata, canonicalRoutes } from "@/lib/markets";

const sections = [
  {
    title: "1. Acceptance of the Terms and Conditions",
    body:
      "Omnitok provides this website and related materials. By accessing or using the site, you agree to these Terms of Service. If you do not agree, you should not use the site. We may update these terms from time to time, and continued use of the site after updates constitutes acceptance of the revised terms.",
  },
  {
    title: "2. Use of the Site",
    body:
      "The content, software, text, graphics and materials on this site are owned by or licensed to Omnitok and are protected by intellectual property laws. You may not copy, modify, distribute, reverse engineer, frame or misuse the site or its contents without prior authorization. If access to products or services is provided through the site, that access remains subject to the relevant commercial agreements.",
  },
  {
    title: "3. Registration, Marks and External Links",
    body:
      "If any part of the site requires registration, you must provide accurate information and maintain the security of your account or credentials. Trademarks, logos and service marks displayed on the site belong to Omnitok or the relevant rights holders. The site may also link to external websites for convenience; those third-party properties are not controlled by us.",
  },
  {
    title: "4. Disclaimer of Warranties and Limitation of Liability",
    body:
      "The site and its content are provided as-is for informational purposes. We do not guarantee uninterrupted operation, absolute accuracy or freedom from harmful code. To the fullest extent permitted by law, Omnitok is not liable for indirect, incidental or consequential damages arising from use of the site.",
  },
  {
    title: "5. Indemnification and Termination",
    body:
      "You agree to indemnify Omnitok against claims, losses or damages arising from your misuse of the site or breach of these terms. We may suspend or terminate access to the site at any time, without notice, if we believe the site is being used improperly or contrary to these terms.",
  },
  {
    title: "6. Governing Law and Miscellaneous",
    body:
      "These terms are governed by applicable law in the jurisdiction where Omnitok operates or where the user accesses the site. If any provision is found unenforceable, the remaining provisions remain in full effect. These terms govern website use only and do not replace any separate customer or partner agreement.",
  },
  {
    title: "7. Contact",
    body:
      "For legal or operational questions related to these terms, contact Omnitok at hello@omnitok.com.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service | Omnitok US",
  description:
    "Read the terms of service and legal use guidelines that govern use of Omnitok's United States website experience.",
  path: canonicalRoutes.usa.termsOfService,
  locale: "en-US",
});

export default function UsaTermsOfServicePage() {
  return (
    <>
      <section className="pt-28 pb-16 gradient-hero relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            Terms of Service
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            These terms summarize the historical legal use guidelines previously published on the
            legacy site and now consolidated under the Omnitok US experience.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none">
            <path
              d="M0 40L1440 40L1440 10C1200 40 900 0 720 10C540 20 240 0 0 10L0 40Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <SeoBreadcrumbs
        items={[
          { label: "Home", href: canonicalRoutes.usa.home },
          { label: "Terms of Service" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-card lg:p-10">
            <div className="space-y-8">
              <p className="text-sm leading-relaxed text-gray-600">
                These terms govern access to and use of the Omnitok United States website. By
                using this site you agree to these conditions. Last updated: April 2026.
              </p>
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
