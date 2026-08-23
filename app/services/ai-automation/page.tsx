import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import RelatedServices from "@/components/RelatedServices";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceSchema from "@/components/ServiceSchema";
import { AudienceList, ProcessSteps, Section } from "@/components/blocks";
import { Icon, type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "AI & Automation",
  description:
    "AI agents, conversational AI, workflow automation, and data pipelines integrated into the systems you already use. Practical AI with measurable output.",
};

const capabilities: {
  icon: IconName;
  title: string;
  items: string[];
}[] = [
  {
    icon: "chat",
    title: "Conversational AI",
    items: [
      "Chatbots for websites, SMS, and messaging channels",
      "AI voice and text assistants for lead qualification",
      "Customer support automation with human hand-off",
      "Multilingual conversational flows",
    ],
  },
  {
    icon: "ai",
    title: "AI Agents & Assistants",
    items: [
      "Agents that handle repetitive back-office tasks end to end",
      "Document reading, extraction, and summarization",
      "Internal knowledge assistants trained on your data",
      "Human-in-the-loop review where accuracy matters",
    ],
  },
  {
    icon: "workflow",
    title: "Workflow & Process Automation",
    items: [
      "Automating hand-offs between CRM, email, and telephony",
      "Trigger-based workflows across your existing tools",
      "Scheduling, follow-up, and reminder automation",
      "Reducing manual data entry to near zero",
    ],
  },
  {
    icon: "chart",
    title: "Data Pipelines & Reporting",
    items: [
      "Automated data collection from multiple sources",
      "Clean, reliable pipelines into a single reporting layer",
      "Dashboards that update themselves",
      "AI-assisted analysis and anomaly alerts",
    ],
  },
];

const steps = [
  {
    title: "Find the right process",
    body: "We look at where your team spends time on repetitive work and pick the automation with the clearest payoff.",
  },
  {
    title: "Design with guardrails",
    body: "Every AI system gets defined boundaries, review points, and a fallback to a human where it counts.",
  },
  {
    title: "Build and integrate",
    body: "Built into the tools you already use, not a new system your team has to learn.",
  },
  {
    title: "Measure and tune",
    body: "We track time saved and accuracy, then refine. If it doesn’t move a number, we change it.",
  },
];

const whyPoints: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "target",
    title: "Practical, not experimental",
    body: "We build automation with a measurable outcome in view, not proofs of concept that never ship.",
  },
  {
    icon: "shieldCheck",
    title: "Compliance-aware by design",
    body: "Consent, data handling, and audit trails are designed in so the system stays dependable.",
  },
  {
    icon: "network",
    title: "Connected to the rest of your operation",
    body: "The same partner runs your calling and back-office work, so automation lands where the work actually happens.",
  },
];

export default function AiAutomationPage() {
  return (
    <>
      <ServiceSchema
        name="AI & Automation"
        description="AI integration, conversational AI, AI agents, workflow and process automation, and data pipelines."
        slug="ai-automation"
      />

      <PageHero
        eyebrow="AI & Automation"
        title="Less manual work. More work that matters."
        lede="AI and automation built into the systems your business already runs on: conversational AI for sales and support, agents that handle repetitive tasks, and workflows that move without someone pushing them."
      />

      <Section aria-labelledby="capabilities">
        <Reveal>
          <SectionHeading
            eyebrow="What we build"
            title={<span id="capabilities">Four ways AI earns its place in your operation</span>}
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
            title={<span id="how-it-works">From a slow process to an automated one</span>}
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
            title={<span id="why-us">AI that ships and stays useful</span>}
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

      <RelatedServices current="ai-automation" tint />

      <Section aria-labelledby="who-for">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Who it’s for"
              title={<span id="who-for">For teams drowning in repeatable work</span>}
              lede={
                <>
                  Pairs naturally with our{" "}
                  <Link
                    href="/services/customer-acquisition"
                    className="font-medium text-navy-500 underline underline-offset-4 hover:text-navy"
                  >
                    Customer Acquisition
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/services/back-office-support"
                    className="font-medium text-navy-500 underline underline-offset-4 hover:text-navy"
                  >
                    Back-Office Support
                  </Link>{" "}
                  services.
                </>
              }
            />
          </Reveal>
          <Reveal delay={100}>
            <AudienceList
              items={[
                "Businesses with high volumes of inbound questions, leads, or documents",
                "Operations teams doing the same data entry and follow-up every day",
                "Companies that want AI in their business but not an AI science project",
                "Regulated-industry teams that need automation with an audit trail",
              ]}
            />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        heading="Show us the process that eats your team’s time"
        copy="Tell us where the manual work piles up, and we’ll come back with what to automate first and what it’s worth."
        ctaLabel="Talk to Us"
      />
    </>
  );
}
