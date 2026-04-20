import type { Metadata } from "next";
import SeoBreadcrumbs from "@/components/seo/SeoBreadcrumbs";
import { buildMetadata, canonicalRoutes, marketAlternates } from "@/lib/markets";

const sections = [
  {
    title: "1. Information We Collect",
    body:
      "We may collect Personal Data that you voluntarily provide through contact requests, demo forms, product inquiries or other interactions with the site. This can include your name, email address, company information and any additional details you choose to share.",
  },
  {
    title: "2. Non-Identifiable Data and Analytics",
    body:
      "We may also collect non-identifiable usage information such as pages visited, site interactions and basic technical data. This information may be gathered through cookies, analytics tools or similar technologies to help us improve the website experience.",
  },
  {
    title: "3. How We Use Personal Data",
    body:
      "We use Personal Data to respond to inquiries, coordinate demos, improve the site, support business communications and inform visitors about relevant Omnitok offerings where appropriate. We do not sell Personal Data.",
  },
  {
    title: "4. Sharing of Personal Data",
    body:
      "We may share information with affiliates, service providers or business partners when necessary to operate the site, support communications or deliver related business functions. We may also disclose information if required by law or in connection with a merger, acquisition or similar business transfer.",
  },
  {
    title: "5. Cookies and Do Not Track",
    body:
      "We may use cookies or similar technologies to understand usage and improve site performance. Our site does not currently respond to Do Not Track signals in a standardized way.",
  },
  {
    title: "6. Security and Retention",
    body:
      "We take reasonable measures to protect information against unauthorized access, misuse, loss or disclosure. However, no online transmission or storage method is completely secure. We retain information only for as long as necessary for operational, commercial or legal purposes.",
  },
  {
    title: "7. Children and Third-Party Sites",
    body:
      "This site is not intended for children under 13, and we do not knowingly collect Personal Data from children. Our site may link to third-party services or websites, and this policy does not govern those external properties.",
  },
  {
    title: "8. California Privacy Rights (CCPA)",
    body:
      "If you are a California resident, you have the right under the California Consumer Privacy Act (CCPA) to request disclosure of the categories and specific pieces of personal information we have collected about you; request deletion of your personal information; and opt out of any sale of your personal information. Omnitok does not sell personal information. To exercise your rights, contact us at hello@omnitok.com.",
  },
  {
    title: "9. Cybersecurity",
    body:
      "We implement reasonable technical and organizational security measures to protect personal data against unauthorized access, loss, alteration or disclosure. This includes HTTPS encryption for data in transit, internal access controls and ongoing review of our security practices. In the event of a data security incident affecting personal information, we will notify affected individuals and relevant authorities as required by applicable law.",
  },
  {
    title: "10. Updates and Contact",
    body:
      "We may update this Privacy Policy from time to time. The current version will always be the one published on this page. Last updated: April 2026. For questions about this policy or requests related to your information, contact us at hello@omnitok.com.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Omnitok US",
  description:
    "Read how Omnitok handles personal information, website usage data and privacy requests for the United States market.",
  path: canonicalRoutes.usa.privacyPolicy,
  locale: "en-US",
  alternates: {
    es: marketAlternates.privacy.latam,
    "en-US": marketAlternates.privacy.usa,
  },
});

export default function UsaPrivacyPolicyPage() {
  return (
    <>
      <section className="pt-28 pb-16 gradient-hero relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-bold text-white lg:text-5xl">Privacy Policy</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            This policy explains how Omnitok collects, uses and protects information shared
            through the United States website experience.
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
          { label: "Privacy Policy" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-card lg:p-10">
            <div className="space-y-8">
              <p className="text-sm leading-relaxed text-gray-600">
                Welcome to the Omnitok website. This policy applies to visitors and users of the
                site and describes how information is collected, used and protected when you
                interact with this website, its forms and related services.
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
