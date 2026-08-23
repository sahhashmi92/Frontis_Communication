import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-start px-5 py-20 sm:px-8 sm:py-24">
      <p className="mb-3 flex items-center gap-2.5 text-[0.8125rem] font-semibold tracking-[0.14em] text-navy-500 uppercase">
        <span className="h-2 w-2 rounded-full bg-orange" aria-hidden="true" />
        404
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        This page doesn’t exist
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
        The link may be out of date. Head back home, or browse our services.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="/" withArrow>
          Back to Home
        </Button>
        <Button href="/services" variant="secondary">
          Our Services
        </Button>
      </div>
      <p className="mt-10 text-sm text-muted">
        Looking for something specific?{" "}
        <Link href="/contact" className="font-medium text-navy-500 underline underline-offset-4 hover:text-navy">
          Contact us
        </Link>
        .
      </p>
    </section>
  );
}
