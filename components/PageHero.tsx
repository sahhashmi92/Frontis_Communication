import type { ReactNode } from "react";

/**
 * Interior-page hero: light band with faint dot grid and a logo-derived
 * pill ornament. One h1 per page lives here.
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      <div className="bg-dots absolute inset-0" aria-hidden="true" />
      {/* Logo-derived ornament: rounded bars + orange dot */}
      <div
        className="absolute -top-10 right-[-160px] hidden rotate-[24deg] lg:block"
        aria-hidden="true"
      >
        <div className="h-16 w-[420px] rounded-full bg-navy-100/70" />
        <div className="mt-5 ml-16 flex items-center gap-5">
          <div className="h-16 w-[300px] rounded-full bg-navy-200/50" />
          <div className="h-14 w-14 rounded-full bg-orange/80" />
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:py-16">
        <p className="mb-3 flex items-center gap-2.5 text-[0.8125rem] font-semibold tracking-[0.14em] text-navy-500 uppercase">
          <span className="h-2 w-2 shrink-0 rounded-full bg-orange" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-navy sm:text-5xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
        )}
      </div>
    </section>
  );
}
