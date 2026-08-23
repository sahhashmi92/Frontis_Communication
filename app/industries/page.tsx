import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Icon, type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Vertical expertise across health insurance (ACA & Medicare), solar, home services, auto insurance, and growth-stage SMBs, with delivery models adapted to each sector.",
};

type IndustryBlock = {
  id: string;
  icon: IconName;
  name: string;
  qualifier?: string;
  pain: string;
  services: { label: string; href: string }[];
};

const blocks: IndustryBlock[] = [
  {
    id: "health-insurance",
    icon: "health",
    name: "Health Insurance",
    qualifier: "ACA & Medicare",
    pain: "Acquiring qualified prospects during enrollment periods while managing high-volume transfer operations.",
    services: [
      {
        label: "Customer Acquisition & Contact Center Operations",
        href: "/services/customer-acquisition",
      },
      { label: "Back-Office Support", href: "/services/back-office-support" },
    ],
  },
  {
    id: "solar",
    icon: "solar",
    name: "Solar Energy",
    pain: "High lead volumes, long sales cycles, appointment-setting challenges, and uneven agent performance.",
    services: [
      {
        label: "Customer Acquisition: appointment setting & lead qualification",
        href: "/services/customer-acquisition",
      },
      { label: "Performance Marketing", href: "/services/performance-marketing" },
      { label: "Talent Solutions", href: "/services/talent-solutions" },
    ],
  },
  {
    id: "home-services",
    icon: "home",
    name: "Home Services",
    pain: "Seasonal demand spikes, inbound volume management, and local-market lead generation.",
    services: [
      {
        label: "Customer Acquisition: inbound & outbound campaigns",
        href: "/services/customer-acquisition",
      },
      { label: "Performance Marketing", href: "/services/performance-marketing" },
      { label: "Back-Office Support", href: "/services/back-office-support" },
    ],
  },
  {
    id: "auto-insurance",
    icon: "auto",
    name: "Auto Insurance",
    pain: "Qualifying high volumes of shoppers and routing them to licensed agents while intent is still high.",
    services: [
      {
        label: "Customer Acquisition: lead qualification & live transfer",
        href: "/services/customer-acquisition",
      },
      { label: "Back-Office Support", href: "/services/back-office-support" },
    ],
  },
  {
    id: "smb",
    icon: "smb",
    name: "General SMB & Mid-Market",
    pain: "Growing businesses that need operational support and technology capability without building large in-house teams.",
    services: [
      { label: "All eight service lines, as a full-service partnership", href: "/services" },
      { label: "AI & Automation for repetitive operational work", href: "/services/ai-automation" },
      { label: "Cloud & Infrastructure for teams without in-house engineers", href: "/services/cloud-infrastructure" },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries we serve"
        title="Vertical expertise, adapted to your rules"
        lede="Frontis Communications partners with businesses across sectors, adapting delivery models to the specific requirements of each team."
      />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16" aria-label="Industries">
        <ul className="space-y-6">
          {blocks.map((b, i) => (
            <Reveal as="li" key={b.id} delay={Math.min(i, 2) * 60}>
              <article
                id={b.id}
                className="scroll-mt-28 rounded-2xl border border-line bg-white p-7 sm:p-9"
              >
                <div className="grid gap-7 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy-50 text-navy">
                        <Icon name={b.icon} className="h-6 w-6" />
                      </span>
                      <h2 className="text-2xl font-semibold tracking-tight text-navy">
                        {b.name}
                        {b.qualifier && (
                          <span className="mt-0.5 block text-sm font-semibold tracking-wide text-orange-600 uppercase">
                            {b.qualifier}
                          </span>
                        )}
                      </h2>
                    </div>
                    <p className="mt-5 leading-relaxed text-muted">
                      <span className="font-semibold text-ink">The challenge: </span>
                      {b.pain}
                    </p>
                  </div>
                  <div className="lg:border-l lg:border-line lg:pl-14">
                    <h3 className="text-[0.8125rem] font-semibold tracking-[0.14em] text-navy-500 uppercase">
                      How we help
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {b.services.map((s) => (
                        <li key={s.label}>
                          <Link
                            href={s.href}
                            className="group flex items-start gap-3 leading-relaxed text-ink transition-colors hover:text-navy"
                          >
                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                              <Icon name="arrowRight" className="h-3 w-3" strokeWidth={2.2} />
                            </span>
                            <span className="underline-offset-4 group-hover:underline">
                              {s.label}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaBand
        heading="Don’t see your industry?"
        copy="Most of what we do translates. Tell us what you’re working with, and we’ll tell you honestly whether we’re the right fit."
        ctaLabel="Let’s Talk"
      />
    </>
  );
}
