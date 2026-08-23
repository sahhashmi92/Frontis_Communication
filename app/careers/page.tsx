import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { CheckList, ProcessSteps, Section } from "@/components/blocks";
import { Icon, type IconName } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Frontis Communications. We hire people who communicate clearly, work reliably, and want to grow. See what we look for, how hiring works, and how to apply.",
};

/** Reasons to join: rendered on the navy band, numbered rather than iconified. */
const reasons: { title: string; body: string }[] = [
  {
    title: "You will be trained, not thrown in",
    body: "New team members get structured onboarding on the campaign, the tools, and the standards before they take live work. Nobody learns by being left to sink.",
  },
  {
    title: "Clear expectations, measured fairly",
    body: "You will know what good looks like in your role, and you will be measured on that. No moving targets, no politics deciding who gets ahead.",
  },
  {
    title: "Room to move between functions",
    body: "We run eight service lines. People who do well on one team have a real path into operations, quality, account management, or the technology side.",
  },
  {
    title: "Work that reaches real clients",
    body: "You will be working with US businesses on live campaigns and systems, not practice accounts. The standard is high because the work actually matters.",
  },
];

const lookFor = [
  {
    title: "Clear communication",
    note: "Comfortable and confident in spoken and written English.",
  },
  {
    title: "Reliability",
    note: "You show up, you follow through, and you flag problems early.",
  },
  { title: "Attention to detail", note: "Accuracy matters more here than speed alone." },
  { title: "Willingness to learn", note: "Coachable, and open to feedback on how you work." },
  { title: "Ownership", note: "You care how the task turns out, not just that it is done." },
  { title: "Team-first attitude", note: "You make the people around you better at their jobs." },
];

const areas: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "acquisition",
    title: "Sales & Lead Generation",
    body: "Outbound and inbound calling, lead qualification, appointment setting, and live transfers for US campaigns.",
  },
  {
    icon: "headset",
    title: "Customer Support & Operations",
    body: "Inbound support, retention, and the day-to-day work that keeps campaigns running.",
  },
  {
    icon: "userCheck",
    title: "Account Management",
    body: "Owning client relationships, reporting on performance, and keeping delivery on track.",
  },
  {
    icon: "backoffice",
    title: "Back-Office & Administration",
    body: "Data processing, CRM management, scheduling, and document work behind the operation.",
  },
  {
    icon: "clipboardCheck",
    title: "Quality Assurance",
    body: "Call monitoring, scoring, and coaching that keeps standards consistent across teams.",
  },
  {
    icon: "software",
    title: "Technology & Development",
    body: "Software, application, AI and automation, and cloud work across our technology service lines.",
  },
];

const hiringSteps = [
  {
    title: "Send your CV",
    body: "Email your CV with a short note on the kind of work you are looking for.",
  },
  {
    title: "Intro conversation",
    body: "A short call to understand your background, your English, and what you want next.",
  },
  {
    title: "Role assessment",
    body: "A practical assessment or interview with the team lead for the function you are applying to.",
  },
  {
    title: "Offer and onboarding",
    body: "If it is a fit, we make an offer and set your start date, training, and first-month plan.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build a career, not just hold a job"
        lede="We hire people who communicate clearly, work reliably, and want to get better at what they do. If that sounds like you, we would like to hear from you."
      />

      {/* ---------- Why join us: navy band, numbered ---------- */}
      <Section aria-labelledby="why-join">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-navy px-6 py-12 sm:px-12 sm:py-14">
            <SectionHeading
              dark
              eyebrow="Why join us"
              title={<span id="why-join">Four things you can expect here</span>}
              lede="We would rather tell you what the job is actually like than list benefits everyone claims."
            />
            <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {reasons.map((reason, i) => (
                <li key={reason.title} className="border-t border-white/15 pt-5">
                  <span className="text-sm font-semibold tracking-wide text-orange-400">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 text-lg leading-snug font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-navy-100">{reason.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Section>

      {/* ---------- What we look for ---------- */}
      <Section tint aria-labelledby="what-we-look-for">
        <Reveal>
          <SectionHeading
            eyebrow="What we look for"
            title={<span id="what-we-look-for">The qualities that matter more than a job title</span>}
            lede="Experience helps, but these are the things that decide whether someone does well here."
          />
        </Reveal>
        <Reveal delay={100}>
          <CheckList items={lookFor} className="mt-10 max-w-4xl" />
        </Reveal>
      </Section>

      {/* ---------- Where we hire ---------- */}
      <Section aria-labelledby="areas">
        <Reveal>
          <SectionHeading
            eyebrow="Where we hire"
            title={<span id="areas">Teams you could join</span>}
            lede="We keep CVs on file for every one of these functions, even when a role is not posted."
          />
        </Reveal>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => (
            <Reveal as="li" key={area.title} delay={(i % 3) * 70}>
              <div className="h-full rounded-2xl border border-line bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy">
                  <Icon name={area.icon} className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 leading-snug font-semibold text-navy">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{area.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ---------- Hiring process ---------- */}
      <Section tint aria-labelledby="hiring">
        <Reveal>
          <SectionHeading
            eyebrow="How hiring works"
            title={<span id="hiring">Four steps, and you will hear back either way</span>}
          />
        </Reveal>
        <div className="mt-10">
          <ProcessSteps steps={hiringSteps} />
        </div>
      </Section>

      {/* ---------- Apply ---------- */}
      <Section aria-labelledby="apply">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="How to apply"
              title={<span id="apply">Send us your CV</span>}
              lede="Include a short note about the kind of work you want to do and when you can start."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-line bg-surface p-7 sm:p-8">
              <dl className="space-y-7">
                <div>
                  <dt className="text-[0.8125rem] font-semibold tracking-[0.14em] text-navy-500 uppercase">
                    Careers inbox
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${site.careersEmail}`}
                      className="text-lg font-semibold break-all text-navy underline-offset-4 hover:underline"
                    >
                      {site.careersEmail}
                    </a>
                  </dd>
                </div>
                <div className="border-t border-line pt-7">
                  <dt className="text-[0.8125rem] font-semibold tracking-[0.14em] text-navy-500 uppercase">
                    Or call us
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                      className="text-lg font-semibold text-navy underline-offset-4 hover:underline"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div className="border-t border-line pt-7">
                  <dt className="text-[0.8125rem] font-semibold tracking-[0.14em] text-navy-500 uppercase">
                    What happens next
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted">
                    Every application gets a reply. If your background fits an open
                    or upcoming role, we will follow up with next steps.
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        heading="Think you would be a good fit?"
        copy="Send your CV to the careers inbox. Tell us what you are good at and what you want to learn next."
        ctaLabel="Email Your CV"
        href={`mailto:${site.careersEmail}`}
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
