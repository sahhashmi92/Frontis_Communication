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
  title: "Application Development",
  description:
    "Web applications, iOS and Android apps, cross-platform builds, and e-commerce platforms. From MVP to mature product, with support after launch.",
};

const capabilities: {
  icon: IconName;
  title: string;
  items: string[];
}[] = [
  {
    icon: "monitor",
    title: "Web Applications",
    items: [
      "Customer portals and self-service platforms",
      "SaaS products and multi-tenant applications",
      "Business websites with real functionality behind them",
      "Performance, accessibility, and SEO built in",
    ],
  },
  {
    icon: "smartphone",
    title: "Mobile Applications",
    items: [
      "Native iOS and Android development",
      "Cross-platform apps from a single codebase",
      "App Store and Google Play submission handled",
      "Push notifications, offline modes, and device integrations",
    ],
  },
  {
    icon: "rocket",
    title: "MVP & Product Builds",
    items: [
      "A focused first version built to validate the idea",
      "Scoped to launch in weeks, not quarters",
      "Architecture that can grow when the product does",
      "Analytics from day one so you learn from real users",
    ],
  },
  {
    icon: "cart",
    title: "E-commerce",
    items: [
      "Online stores on proven platforms or custom builds",
      "Payment, shipping, and inventory integrations",
      "Checkout optimization and speed",
      "CMS implementation for content-heavy sites",
    ],
  },
];

const approach = [
  { title: "Discovery", body: "We define who the app is for, what it must do on day one, and what can wait." },
  { title: "Design", body: "Wireframes and interface design you approve before a line of code is written." },
  { title: "Build", body: "Iterative development with working builds you can test at each stage." },
  { title: "Launch", body: "QA, store submission or deployment, and a clean handover with documentation." },
  { title: "Ongoing support", body: "Updates, monitoring, and new features after launch. Apps aren’t finished at release." },
];

const whyPoints: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "clipboardCheck",
    title: "Structured, not improvised",
    body: "A defined process with sign-off points, so scope and budget stay where you agreed.",
  },
  {
    icon: "eye",
    title: "You see progress, not promises",
    body: "Working builds at every stage. No disappearing for three months and returning with a surprise.",
  },
  {
    icon: "refresh",
    title: "Built to be maintained",
    body: "Clean code, documentation, and handover, so you’re never locked to us or stuck with a black box.",
  },
];

export default function ApplicationDevelopmentPage() {
  return (
    <>
      <ServiceSchema
        name="Application Development"
        description="Web application development, iOS and Android mobile apps, cross-platform apps, MVP builds, and e-commerce."
        slug="application-development"
      />

      <PageHero
        eyebrow="Application Development"
        title="Apps your customers actually use"
        lede="Web, mobile, and e-commerce applications from a first MVP to a mature product, delivered through a structured process and supported long after launch."
      />

      <Section aria-labelledby="capabilities">
        <Reveal>
          <SectionHeading
            eyebrow="What we build"
            title={<span id="capabilities">From a single screen to a full product</span>}
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
            title={<span id="approach">Five stages, no surprises</span>}
          />
        </Reveal>
        <div className="mt-10">
          <ProcessSteps steps={approach} />
        </div>
      </Section>

      <Section aria-labelledby="why-us">
        <Reveal>
          <SectionHeading
            eyebrow="Why Frontis Communications"
            title={<span id="why-us">A build partner, not a bet</span>}
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

      <RelatedServices current="application-development" tint />

      <Section aria-labelledby="who-for">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Who it’s for"
              title={<span id="who-for">For businesses with a product in mind and no team to build it</span>}
            />
          </Reveal>
          <Reveal delay={100}>
            <AudienceList
              items={[
                "Startups that need an MVP built properly the first time",
                "Established businesses launching a customer-facing app or portal",
                "Companies replacing an aging application that no longer keeps up",
                "Retailers and service businesses moving sales online",
              ]}
            />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        heading="Tell us what you want to launch"
        copy="Describe the app and who it’s for. We’ll come back with an honest scope, a realistic timeline, and a clear plan."
        ctaLabel="Talk to Us"
      />
    </>
  );
}
