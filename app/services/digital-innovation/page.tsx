import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceSchema from "@/components/ServiceSchema";
import RelatedServices from "@/components/RelatedServices";
import { AudienceList, ProcessSteps, Section } from "@/components/blocks";
import { Icon, type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "Digital Innovation & Software Development",
  description:
    "Custom software built for the way your business runs: internal tools, workflow systems, CRM integrations, and API development from a structured build partner.",
};

const capabilities: {
  icon: IconName;
  title: string;
  items: string[];
}[] = [
  {
    icon: "settings",
    title: "Internal Business Tools",
    items: [
      "Operations dashboards and admin panels",
      "Custom portals for staff, partners, or customers",
      "Reporting and analytics tools built on your data",
      "Replacements for spreadsheets that have outgrown their job",
    ],
  },
  {
    icon: "workflow",
    title: "Workflow & Process Systems",
    items: [
      "Systems that model your actual business process",
      "Approval flows, task routing, and status tracking",
      "Document generation and management",
      "Notifications and hand-offs between teams",
    ],
  },
  {
    icon: "database",
    title: "CRM & Systems Integration",
    items: [
      "Custom CRM integrations and extensions",
      "Syncing data between the tools you already use",
      "Migration off legacy systems",
      "Single source of truth for customer and campaign data",
    ],
  },
  {
    icon: "layers",
    title: "API Development",
    items: [
      "APIs that expose your data to partners and apps",
      "Third-party API integrations",
      "Payment, messaging, and telephony integrations",
      "Documentation and versioning built in",
    ],
  },
];

const approach = [
  { title: "Discovery", body: "We map your requirements, constraints, and success criteria before anything is built." },
  { title: "Design", body: "Architecture and interface design you sign off on, with no surprises mid-build." },
  { title: "Build", body: "Structured development with regular check-ins and working software you can see." },
  { title: "Launch", body: "Tested, documented delivery into your environment with a clean handover." },
  { title: "Ongoing support", body: "Maintenance, iteration, and enhancement after launch. We don’t disappear." },
];

export default function DigitalInnovationPage() {
  return (
    <>
      <ServiceSchema
        name="Digital Innovation & Software Development"
        description="Custom software development: internal business tools, workflow systems, CRM integrations, and API development."
        slug="digital-innovation"
      />

      <PageHero
        eyebrow="Digital Innovation & Software Development"
        title="Ideas become working software"
        lede="The technology build arm of Frontis Communications: custom systems built around the way your business actually operates, delivered through a structured process rather than freelance guesswork."
      />

      <Section aria-labelledby="capabilities">
        <Reveal>
          <SectionHeading
            eyebrow="What we build"
            title={<span id="capabilities">Software shaped to your operation, not the other way round</span>}
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

      <Section tint aria-labelledby="approach">
        <Reveal>
          <SectionHeading
            eyebrow="Our approach"
            title={<span id="approach">A structured path from idea to production</span>}
            lede="Professional delivery, not freelance-style improvisation. Every engagement follows the same five stages."
          />
        </Reveal>
        <div className="mt-10">
          <ProcessSteps steps={approach} />
        </div>
      </Section>

      <RelatedServices current="digital-innovation" />

      <Section tint aria-labelledby="who-for">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Who it’s for"
              title={<span id="who-for">For businesses that need a build partner, not a marketplace gig</span>}
              lede={
                <>
                  Looking for marketing services instead?{" "}
                  <Link
                    href="/services/performance-marketing"
                    className="font-medium text-navy-500 underline underline-offset-4 hover:text-navy"
                  >
                    See Performance Marketing
                  </Link>
                  .
                </>
              }
            />
          </Reveal>
          <Reveal delay={100}>
            <AudienceList
              items={[
                "Businesses that need a technology build partner rather than a single freelancer",
                "Companies whose operations have outgrown spreadsheets and off-the-shelf tools",
                "Teams that need their CRM, telephony, and back-office systems to talk to each other",
                "Established businesses adding digital capability to how they operate",
              ]}
            />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        heading="Tell us what you’re building"
        copy="Describe the tool or the process you want systemized, and we’ll come back with an honest scope and a clear plan."
        ctaLabel="Talk to Us"
      />
    </>
  );
}
