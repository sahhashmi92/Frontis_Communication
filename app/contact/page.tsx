import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach Frontis Communications by phone or email for general inquiries and careers.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Tell us what you need"
        lede="Call, email, or send a message and we’ll route it to the right team."
      />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16" aria-label="Contact">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={100}>
            <aside className="rounded-2xl border border-line bg-surface p-7 sm:p-8">
              <dl className="space-y-7">
                <div>
                  <dt className="text-[0.8125rem] font-semibold tracking-[0.14em] text-navy-500 uppercase">
                    Office
                  </dt>
                  <dd className="mt-2">
                    <address className="leading-relaxed text-ink not-italic">
                      {site.address.line1}
                      <br />
                      {site.address.line2}
                    </address>
                  </dd>
                </div>
                <div className="border-t border-line pt-7">
                  <dt className="text-[0.8125rem] font-semibold tracking-[0.14em] text-navy-500 uppercase">
                    Phone
                  </dt>
                  <dd className="mt-2">
                    <a href={`tel:${site.phone}`} className="text-lg font-semibold text-navy underline-offset-4 hover:underline">
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div className="border-t border-line pt-7">
                  <dt className="text-[0.8125rem] font-semibold tracking-[0.14em] text-navy-500 uppercase">
                    Email
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted">
                    <a
                      href={`mailto:${site.email}`}
                      className="font-medium text-navy underline-offset-4 hover:underline"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
