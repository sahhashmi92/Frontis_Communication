import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Icon, type IconName } from "@/components/icons";
import { industries, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Frontis Communications | Communications Partner | Communication That Connects",
  },
  description:
    "Customer acquisition, back-office support, talent, marketing, software, AI, apps, and cloud: eight service lines, one accountable partner.",
};

const whyItems: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "network",
    title: "Clear growth paths",
    body: "You get room to learn, take on more responsibility, and grow with the business instead of staying in one lane.",
  },
  {
    icon: "globe",
    title: "Work that matters",
    body: "The team focuses on outcomes, not busywork, so your contribution has a visible impact.",
  },
  {
    icon: "shieldCheck",
    title: "Supportive standards",
    body: "Expect clear expectations, fair feedback, and a team that values doing the job properly.",
  },
  {
    icon: "scale",
    title: "Growth with structure",
    body: "There’s process where it helps, flexibility where it matters, and space to contribute ideas.",
  },
];

/* Hero graphic: chip positions inside a 560x520 canvas */
const heroChips: {
  icon: IconName;
  label: string;
  x: number;
  y: number;
  delay: string;
}[] = [
  { icon: "acquisition", label: "Customer Acquisition", x: 30, y: 30, delay: "0s" },
  { icon: "backoffice", label: "Back-Office Support", x: 340, y: 40, delay: "1.1s" },
  { icon: "talent", label: "Talent Solutions", x: 0, y: 160, delay: "2.2s" },
  { icon: "marketing", label: "Performance Marketing", x: 372, y: 170, delay: "0.6s" },
  { icon: "software", label: "Software Development", x: 6, y: 300, delay: "1.7s" },
  { icon: "ai", label: "AI & Automation", x: 396, y: 306, delay: "2.6s" },
  { icon: "apps", label: "Application Development", x: 44, y: 442, delay: "0.9s" },
  { icon: "cloud", label: "Cloud & Infrastructure", x: 330, y: 452, delay: "1.9s" },
];

function HeroGraphic() {
  return (
    <div
      className="relative hidden h-[437px] w-[470px] shrink-0 lg:block"
      aria-hidden="true"
    >
      {/* Drawn on a 560x520 canvas, then scaled down so the hero stays compact. */}
      <div className="absolute top-0 left-0 h-[520px] w-[560px] origin-top-left scale-[0.84]">
      <svg
        viewBox="0 0 560 520"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <path
          d="M130 72 C 190 110, 230 160, 262 214 M430 84 C 380 120, 340 160, 302 216 M110 184 C 160 200, 200 220, 232 240 M456 194 C 410 210, 370 228, 330 244 M116 322 C 160 300, 200 280, 236 268 M470 328 C 420 306, 380 288, 330 272 M160 456 C 200 400, 240 350, 268 300 M420 470 C 380 410, 340 350, 300 302"
          stroke="var(--color-navy-200)"
          strokeWidth="1.6"
          strokeDasharray="1 7"
          strokeLinecap="round"
        />
        <circle cx="262" cy="214" r="3.5" fill="var(--color-orange)" />
        <circle cx="302" cy="216" r="3.5" fill="var(--color-orange)" />
        <circle cx="232" cy="240" r="3.5" fill="var(--color-orange)" />
        <circle cx="330" cy="244" r="3.5" fill="var(--color-orange)" />
        <circle cx="236" cy="268" r="3.5" fill="var(--color-orange)" />
        <circle cx="330" cy="272" r="3.5" fill="var(--color-orange)" />
        <circle cx="268" cy="300" r="3.5" fill="var(--color-orange)" />
        <circle cx="300" cy="302" r="3.5" fill="var(--color-orange)" />
      </svg>

      {/* Center brand tile */}
      <div className="absolute top-[194px] left-[224px] flex h-28 w-28 items-center justify-center rounded-[1.75rem] border border-line bg-white shadow-xl shadow-navy-900/10">
        <Image
          src="/brand/mark.png"
          alt=""
          width={274}
          height={226}
          className="h-12 w-auto"
        />
      </div>

      {heroChips.map((c) => (
        <div
          key={c.label}
          className="animate-float absolute flex items-center gap-2.5 rounded-full border border-line bg-white py-2.5 pr-5 pl-3 shadow-md shadow-navy-900/6"
          style={{ left: c.x, top: c.y, animationDelay: c.delay }}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-50 text-navy">
            <Icon name={c.icon} className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold whitespace-nowrap text-navy">
            {c.label}
          </span>
        </div>
      ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.shortName,
            legalName: site.name,
            url: site.url,
            logo: `${site.url}/brand/logo-horizontal.png`,
            email: site.email,
            telephone: site.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address.line1,
              addressLocality: site.address.locality,
              addressCountry: site.address.country,
            },
            slogan: site.tagline,
            areaServed: "US",
          }),
        }}
      />

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="bg-dots absolute inset-0" aria-hidden="true" />
        <div
          className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-surface/80 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center justify-between gap-12 px-5 py-12 sm:px-8 lg:min-h-[calc(100svh-4.5rem)]">
          <div className="max-w-xl">
            <p className="mb-4 flex items-center gap-2.5 text-[0.8125rem] font-semibold tracking-[0.16em] text-navy-500 uppercase">
              <span className="h-2 w-2 shrink-0 rounded-full bg-orange" aria-hidden="true" />
              {site.tagline}
            </p>
            <h1 className="text-[2.6rem] leading-[1.08] font-semibold tracking-tight text-balance text-navy sm:text-5xl lg:text-[3.4rem]">
              The communications partner behind growing businesses
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Customer acquisition, back-office support, talent, marketing,
              software, AI, and cloud. Eight service lines, one accountable team.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg" withArrow>
                Talk to Us
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Our Services
              </Button>
            </div>
          </div>
          <HeroGraphic />
        </div>
      </section>

      {/* ---------- Services overview strip ---------- */}
      <section
        className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16"
        aria-labelledby="services-heading"
      >
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={<span id="services-heading">Eight service lines. One partner.</span>}
            lede="Start with the service you need today and add the rest as you grow."
          />
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 70}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-lg hover:shadow-navy-900/6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                  <Icon name={s.icon} className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-5 text-[1.0625rem] leading-snug font-semibold text-navy">
                  {s.short}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 transition-colors group-hover:text-orange-600">
                  Learn more
                  <Icon
                    name="arrowRight"
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ---------- Why Frontis Communications ---------- */}
      <section className="border-y border-line bg-surface" aria-labelledby="why-heading">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Why Frontis Communications"
                title={
                  <span id="why-heading">
                    Built for people who want to do good work
                  </span>
                }
                lede="The team is built around clear expectations, steady support, and room to grow."
              />
              <div className="mt-8">
                <Button href="/careers" variant="secondary" withArrow>
                  View Careers
                </Button>
              </div>
            </div>
          </Reveal>
          <ul className="grid gap-5 sm:grid-cols-2">
            {whyItems.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy">
                    <Icon name={item.icon} className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-5 leading-snug font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Industries strip ---------- */}
      <section
        className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16"
        aria-labelledby="industries-heading"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Industries we serve"
            title={<span id="industries-heading">Deep experience where it matters most</span>}
            align="center"
          />
        </Reveal>
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <Reveal as="li" key={ind.id} delay={i * 60}>
              <Link
                href={`/industries#${ind.id}`}
                className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-line bg-white px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-lg hover:shadow-navy-900/6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-50 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                  <Icon name={ind.icon} className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-semibold text-navy">{ind.name}</span>
                  <span className="mt-0.5 block text-[0.8125rem] text-muted">
                    {ind.subtitle}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <CtaBand
        heading="Want to join the team?"
        copy="See open opportunities and learn how Frontis Communications works."
        ctaLabel="Talk to Us"
        secondaryLabel="Careers"
        secondaryHref="/careers"
      />
    </>
  );
}
