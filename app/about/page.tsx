import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Section } from "@/components/blocks";
import { Icon, type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Frontis Communications is a communications and support partner with practical delivery across calling, back-office, staffing, marketing, and software.",
};

const values: { title: string; body: string }[] = [
  {
    title: "Transparency",
    body: "No hidden costs, no opaque structures. You see what you pay for and who does the work.",
  },
  {
    title: "Growth",
    body: "We build an environment where people can learn, take ownership, and move forward.",
  },
  {
    title: "Accountability",
    body: "We report measurable results, not activity metrics. If a number matters to you, it’s on our dashboard.",
  },
  {
    title: "Partnership",
    body: "Long-term relationships over transactional vendor arrangements. We win when your numbers improve.",
  },
];

const deliveryPoints: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "mapPin",
    title: "Clear communication",
    body: "Your contract, account management, and escalation path are simple, direct, and easy to reach.",
  },
  {
    icon: "globe",
    title: "Flexible delivery team",
    body: "Day-to-day execution is supported by a team that keeps work moving without unnecessary friction.",
  },
  {
    icon: "clipboardCheck",
    title: "Quality-controlled by design",
    body: "QA, monitoring, and reporting sit between you and the work, so scale never comes at the cost of standards.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="More than a vendor. A communication partner."
        lede="Frontis Communications exists for a simple reason: clear execution beats constant coordination."
      />

      {/* Leadership */}
      <Section aria-labelledby="leadership">
        <Reveal>
          <SectionHeading
            eyebrow="Leadership"
            title={<span id="leadership">Founder-led, operator-minded</span>}
          />
        </Reveal>
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                className="absolute -top-4 -left-4 hidden h-24 w-24 rounded-full border-[3px] border-orange/60 sm:block"
                aria-hidden="true"
              />
              <Image
                src="/team/aftab-hussain.jpg"
                alt="Aftab Hussain, Founder and Managing Director of Frontis Communications"
                width={800}
                height={1000}
                className="relative rounded-3xl object-cover shadow-xl shadow-navy-900/10"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-navy">
                Aftab Hussain
              </h3>
                <p className="mt-1 text-sm font-semibold tracking-[0.14em] text-orange-600 uppercase">
                Founder &amp; Managing Director
              </p>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink">
                <p>
                  Aftab leads Frontis Communications with a simple operating
                  philosophy: understand what a business needs, be straight
                  about whether we can help, and then make it happen. His
                  background spans information technology and business
                  operations, built on an engineering foundation.
                </p>
                <p>
                  As a founder-operator, he has built and run the kind of delivery
                  teams Frontis Communications now provides to its clients, which
                  means the company is run by someone who has done the work, not
                  just sold it. He is a familiar face at the industry&rsquo;s key
                  events, including Medicarians, LeadsCon, and Collision.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Our story */}
      <Section tint aria-labelledby="our-story">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Our story"
              title={<span id="our-story">Why Frontis Communications exists</span>}
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-lg leading-relaxed text-ink">
              <p>
                Growth-focused businesses rarely have one problem. The company that
                needs more qualified sales conversations usually also needs help with
                the CRM those conversations land in, the staff to follow them up, the
                marketing that feeds them, and the software that ties it all together.
              </p>
              <p>
                The traditional answer is a different vendor for each need, a
                contract for each vendor, and a different version of the truth from
                every one of them, with the client stuck in the middle doing the
                coordination. Frontis Communications was founded to replace that arrangement
                with a single operations partner that scales across calling,
                back-office, staffing, marketing, software, AI, and cloud.
              </p>
              <p>
                One partner, one point of accountability, and connections that
                convert.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* How we work */}
      <Section aria-labelledby="how-we-work">
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title={<span id="how-we-work">A delivery model built on purpose</span>}
            lede="This model isn’t a compromise; it’s the advantage. Cost-efficient, always available, and quality-controlled at every step."
          />
        </Reveal>
        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {deliveryPoints.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-line bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy">
                  <Icon name={p.icon} className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 leading-snug font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Values */}
      <Section tint aria-labelledby="values">
        <Reveal>
          <SectionHeading
            eyebrow="Our values"
            title={<span id="values">The principles we operate by</span>}
          />
        </Reveal>
        <ol className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 70}>
              <div className="border-t-2 border-navy pt-5">
                <span className="text-sm font-semibold tracking-wide text-orange-600">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <CtaBand
        heading="See how we work, or just reach out"
        copy="Browse the eight service lines, or skip straight to a conversation about what you need."
        ctaLabel="Talk to Us"
        secondaryLabel="Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
