import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceSchema from "@/components/ServiceSchema";
import { CheckList, ProcessSteps, Section } from "@/components/blocks";
import { Icon, type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "Talent Solutions",
  description:
    "Vetted, dedicated remote talent for technical and non-technical roles. Hourly or monthly, managed and accountable, without the overhead of direct hiring.",
};

const technicalRoles = [
  { title: "Software developers", note: "Full-stack, front-end, and back-end" },
  { title: "QA engineers" },
  { title: "Data analysts" },
  { title: "IT support & helpdesk" },
  { title: "DevOps engineers" },
  { title: "AI & automation specialists" },
  { title: "Project managers" },
];

const nonTechnicalRoles = [
  { title: "Customer support representatives" },
  { title: "Virtual assistants" },
  { title: "Administrative staff" },
  { title: "Data entry professionals" },
  { title: "CRM specialists" },
  { title: "Scheduling coordinators" },
  { title: "Project coordinators" },
];

const steps = [
  {
    title: "Share your requirements",
    body: "Describe the role, the skills that matter, and how the person will fit into your team.",
  },
  {
    title: "We shortlist vetted candidates",
    body: "You receive a short list of professionals who have already passed our vetting process.",
  },
  {
    title: "You interview & select",
    body: "Meet the candidates, run your own assessment, and choose who joins your team.",
  },
  {
    title: "We onboard, support & manage",
    body: "Your talent is onboarded and supported, with a single point of contact on our side.",
  },
];

const whyPoints: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "userCheck",
    title: "Rigorous vetting",
    body: "Every candidate is screened for skills, communication, and reliability before you ever see a profile.",
  },
  {
    icon: "refresh",
    title: "Backup coverage",
    body: "If your resource is unavailable, we provide cover, so the work doesn’t stop.",
  },
  {
    icon: "headset",
    title: "Dedicated account management",
    body: "One point of contact handles performance, escalation, and planning.",
  },
  {
    icon: "dollar",
    title: "Transparent pricing",
    body: "Predictable hourly or monthly rates with no hidden fees or surprise markups.",
  },
];

export default function TalentSolutionsPage() {
  return (
    <>
      <ServiceSchema
        name="Talent Solutions"
        description="Dedicated remote staffing for technical and non-technical roles, available hourly or monthly."
        slug="talent-solutions"
      />

      <PageHero
        eyebrow="Talent Solutions"
        title="Your next hire, already vetted"
        lede="Dedicated remote professionals who work as an extension of your team, managed, supported, and accountable. No freelancer roulette, and no agency bench."
      />

      <Section aria-labelledby="roles">
        <Reveal>
          <SectionHeading
            eyebrow="Roles we staff"
            title={<span id="roles">Technical and non-technical, equally vetted</span>}
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-white p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy">
                  <Icon name="software" className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-navy">Technical roles</h3>
              </div>
              <div className="mt-6">
                <CheckList items={technicalRoles} className="!grid-cols-1" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="h-full rounded-2xl border border-line bg-white p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy">
                  <Icon name="talent" className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-navy">Non-technical roles</h3>
              </div>
              <div className="mt-6">
                <CheckList items={nonTechnicalRoles} className="!grid-cols-1" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tint aria-labelledby="engagement">
        <Reveal>
          <SectionHeading
            eyebrow="Engagement models"
            title={<span id="engagement">Two ways to work with us</span>}
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-white p-7 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy">
                <Icon name="clock" className="h-5.5 w-5.5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-navy">Hourly</h3>
              <p className="mt-2 leading-relaxed text-muted">
                Flexible support billed by the hour, ideal for project-based work,
                overflow during busy periods, or roles you’re not ready to fill
                full-time. Scale hours up or down as your workload changes.
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="h-full rounded-2xl border border-line bg-white p-7 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy">
                <Icon name="userCheck" className="h-5.5 w-5.5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-navy">Monthly / Dedicated</h3>
              <p className="mt-2 leading-relaxed text-muted">
                A full-time professional committed exclusively to your team, managed
                and accountable through a single point of contact on our side. The
                consistency of an employee without the hiring overhead.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section aria-labelledby="how-it-works">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title={<span id="how-it-works">From role description to onboarded team member</span>}
          />
        </Reveal>
        <div className="mt-10">
          <ProcessSteps steps={steps} />
        </div>
      </Section>

      <Section tint aria-labelledby="why-us">
        <Reveal>
          <SectionHeading
            eyebrow="Why Frontis Communications"
            title={<span id="why-us">Staffing you don’t have to babysit</span>}
          />
        </Reveal>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      <CtaBand
        heading="Build your remote team, starting with one role"
        copy="Tell us the first role you need filled. We’ll come back with vetted candidates and clear pricing."
        ctaLabel="Talk to Us"
      />
    </>
  );
}
