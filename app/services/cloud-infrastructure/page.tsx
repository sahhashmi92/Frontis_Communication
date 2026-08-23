import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import RelatedServices from "@/components/RelatedServices";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceSchema from "@/components/ServiceSchema";
import { AudienceList, ProcessSteps, Section } from "@/components/blocks";
import { Icon, type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "Cloud Management & Migration",
  description:
    "Cloud migration, architecture, managed operations, cost optimization, backups, and DevOps on AWS, Azure, or Google Cloud. Move to the cloud, or get more from it.",
};

const capabilities: {
  icon: IconName;
  title: string;
  items: string[];
}[] = [
  {
    icon: "cloud",
    title: "Cloud Migration",
    items: [
      "Migration from on-premise servers or hosting to the cloud",
      "Moving between providers, or from one account setup to a cleaner one",
      "Assessment, planning, and phased cut-over with minimal downtime",
      "Data migration with validation at every step",
    ],
  },
  {
    icon: "server",
    title: "Architecture & Setup",
    items: [
      "Environment design on AWS, Azure, or Google Cloud",
      "Networking, identity, and access set up properly from day one",
      "Environments for development, staging, and production",
      "Infrastructure defined as code, so it’s repeatable and documented",
    ],
  },
  {
    icon: "activity",
    title: "Managed Cloud Operations",
    items: [
      "Monitoring, alerting, and incident response",
      "Patching, updates, and routine maintenance",
      "Backups and disaster recovery, tested rather than assumed",
      "Security hardening and access reviews",
    ],
  },
  {
    icon: "gauge",
    title: "Cost Optimization & DevOps",
    items: [
      "Right-sizing resources and eliminating waste in your cloud bill",
      "Reserved capacity and usage planning",
      "CI/CD pipelines so releases are routine, not risky",
      "Containers and orchestration where they earn their keep",
    ],
  },
];

const steps = [
  {
    title: "Assess",
    body: "We review what you run today, what it costs, and what needs to change. You get a clear picture before any commitment.",
  },
  {
    title: "Plan",
    body: "A migration or improvement plan with phases, risks, and a rollback path for each step.",
  },
  {
    title: "Execute",
    body: "Phased migration or build-out with testing at every stage, scheduled around your business hours.",
  },
  {
    title: "Operate & optimize",
    body: "Ongoing monitoring, maintenance, and cost reviews, so the environment stays healthy after the project ends.",
  },
];

const whyPoints: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shieldCheck",
    title: "Security and access done properly",
    body: "Least-privilege access, encryption, and audit logging as the default.",
  },
  {
    icon: "dollar",
    title: "Your cloud bill, under control",
    body: "We treat cost as an engineering problem. Most environments we review are paying for capacity they don’t use.",
  },
  {
    icon: "clock",
    title: "Coverage, not a ticket queue",
    body: "A managed environment with monitoring and response, so issues are caught before your customers notice.",
  },
];

export default function CloudInfrastructurePage() {
  return (
    <>
      <ServiceSchema
        name="Cloud Management & Migration"
        description="Cloud migration, cloud architecture and setup, managed cloud operations, cost optimization, backups and disaster recovery, and DevOps on AWS, Azure, and Google Cloud."
        slug="cloud-infrastructure"
      />

      <PageHero
        eyebrow="Cloud Management & Migration"
        title="Move to the cloud. Or get more from it."
        lede="Migration, architecture, managed operations, and cost control on AWS, Azure, or Google Cloud, for businesses that want infrastructure to be reliable, secure, and somebody else’s job."
      />

      <Section aria-labelledby="capabilities">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={<span id="capabilities">From first migration to day-to-day operations</span>}
          />
        </Reveal>
        <ul className="mt-10 grid gap-5 lg:grid-cols-2">
          {capabilities.map((cap, i) => (
            <Reveal as="li" key={cap.title} delay={(i % 2) * 80}>
              <div className="h-full rounded-2xl border border-line bg-white p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy">
                    <Icon name={cap.icon} className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="text-lg leading-snug font-semibold text-navy">{cap.title}</h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.9375rem] text-ink">
                      <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                        <Icon name="check" className="h-3 w-3" strokeWidth={2.6} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tint aria-labelledby="how-it-works">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title={<span id="how-it-works">Planned, phased, and reversible at every step</span>}
          />
        </Reveal>
        <div className="mt-10">
          <ProcessSteps steps={steps} />
        </div>
      </Section>

      <Section aria-labelledby="why-us">
        <Reveal>
          <SectionHeading
            eyebrow="Why Frontis Communications"
            title={<span id="why-us">Infrastructure you stop thinking about</span>}
          />
        </Reveal>
        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {whyPoints.map((w, i) => (
            <Reveal as="li" key={w.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-line bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy">
                  <Icon name={w.icon} className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 leading-snug font-semibold text-navy">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <RelatedServices current="cloud-infrastructure" tint />

      <Section aria-labelledby="who-for">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Who it’s for"
              title={<span id="who-for">For businesses that have outgrown their setup, or their patience with it</span>}
              lede="See how we handle data, access, and operational support through a structured delivery model."
            />
          </Reveal>
          <Reveal delay={100}>
            <AudienceList
              items={[
                "Businesses still running on aging on-premise servers or basic hosting",
                "Companies whose cloud bill has grown faster than their business",
                "Teams without an in-house engineer to own infrastructure",
                "Growing businesses that need reliability, backups, and security handled properly",
              ]}
            />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        heading="Tell us what you’re running today"
        copy="Describe your current setup, and we’ll come back with an honest assessment of what to move, what to fix, and what it should cost."
        ctaLabel="Talk to Us"
      />
    </>
  );
}
