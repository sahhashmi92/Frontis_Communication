import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/icons";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Eight service lines, one partner: customer acquisition, back-office support, talent, marketing, software development, AI and automation, application development, and cloud for US businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="One partner for your operational and technology needs"
        lede="Fewer vendors, cleaner accountability, better outcomes. Every service line below is delivered by dedicated teams under one roof. Start with one, or combine them as you grow."
      />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16" aria-label="All services">
        <ul className="space-y-5">
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={Math.min(i, 2) * 60}>
              <Link
                href={`/services/${s.slug}`}
                className="group grid gap-5 rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-200 hover:shadow-lg hover:shadow-navy-900/6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8 sm:p-8"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <span>
                  <h2 className="text-xl font-semibold tracking-tight text-navy">
                    {s.name}
                  </h2>
                  <p className="mt-2 max-w-3xl leading-relaxed text-muted">{s.summary}</p>
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold whitespace-nowrap text-navy-500 transition-colors group-hover:text-orange-600">
                  Learn more
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaBand
        heading="Not sure where to start?"
        copy="Tell us what’s slowing your business down, and we’ll map it to the right service line and give you a straight answer on how we’d help."
        ctaLabel="Talk to Us"
      />
    </>
  );
}
