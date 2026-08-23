import type { ReactNode } from "react";
import Button from "./Button";
import Reveal from "./Reveal";

/**
 * The consistent closing CTA block: Deep Blue background, white headline,
 * Salmon CTA. Identical pattern across every service page; only the
 * headline and CTA label change (per the brief).
 */
export default function CtaBand({
  heading,
  copy,
  ctaLabel = "Talk to Us",
  href = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  heading: ReactNode;
  copy?: ReactNode;
  ctaLabel?: string;
  href?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 sm:pb-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
          {/* Logo-derived ornament */}
          <div
            className="absolute top-[-72px] right-[-120px] rotate-[24deg] opacity-90"
            aria-hidden="true"
          >
            <div className="h-14 w-[340px] rounded-full bg-navy-700/60" />
            <div className="mt-4 ml-14 flex items-center gap-4">
              <div className="h-14 w-[240px] rounded-full bg-navy-600/40" />
              <div className="h-12 w-12 rounded-full bg-orange" />
            </div>
          </div>
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              {heading}
            </h2>
            {copy && (
              <p className="mt-4 text-lg leading-relaxed text-navy-100">{copy}</p>
            )}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={href} size="lg" withArrow>
                {ctaLabel}
              </Button>
              {secondaryLabel && secondaryHref && (
                <Button href={secondaryHref} variant="inverse" size="lg">
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
