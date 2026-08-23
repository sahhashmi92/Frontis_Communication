import type { ReactNode } from "react";
import { Icon } from "./icons";
import Reveal from "./Reveal";

/** Two-column checklist with orange check marks. */
export function CheckList({
  items,
  className = "",
}: {
  items: { title: string; note?: string }[];
  className?: string;
}) {
  return (
    <ul className={`grid gap-x-8 gap-y-4 sm:grid-cols-2 ${className}`}>
      {items.map((item) => (
        <li key={item.title} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
            <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.4} />
          </span>
          <span>
            <span className="font-medium text-ink">{item.title}</span>
            {item.note && (
              <span className="mt-0.5 block text-sm leading-relaxed text-muted">
                {item.note}
              </span>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Numbered horizontal process, used for every "How it works" section. */
export function ProcessSteps({
  steps,
}: {
  steps: { title: string; body: string }[];
}) {
  const cols = steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";
  return (
    <ol className={`grid gap-5 sm:grid-cols-2 ${cols}`}>
      {steps.map((step, i) => (
        <Reveal as="li" key={step.title} delay={i * 80} className="relative">
          <div className="h-full rounded-2xl border border-line bg-white p-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
              {i + 1}
            </span>
            <h3 className="mt-4 leading-snug font-semibold text-navy">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

/** Simple bulleted audience list used in "Who it’s for" sections. */
export function AudienceList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="mt-[0.5em] h-2 w-2 shrink-0 rounded-full bg-orange"
            aria-hidden="true"
          />
          <span className="leading-relaxed text-ink">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Standard section wrapper with consistent vertical rhythm. */
export function Section({
  children,
  tint = false,
  className = "",
  ...rest
}: {
  children: ReactNode;
  tint?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={tint ? `border-y border-line bg-surface ${className}` : className}
      {...rest}
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">{children}</div>
    </section>
  );
}
