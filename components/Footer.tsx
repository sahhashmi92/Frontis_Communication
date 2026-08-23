import Image from "next/image";
import Link from "next/link";
import { services, site } from "@/lib/site";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/industries", label: "Industries We Serve" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 pt-14 pb-8 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Link href="/" aria-label="Frontis Communications home">
              <Image
                src="/brand/logo-horizontal.png"
                alt="Frontis Communications"
                width={1943}
                height={226}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 flex items-center gap-2 text-[0.9375rem] font-semibold text-navy">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
              {site.tagline}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Communication, support, and delivery services for growth-focused
              businesses.
            </p>
          </div>

          <nav aria-label="Services">
            <h2 className="text-sm font-semibold tracking-wide text-navy">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-muted transition-colors hover:text-navy"
                  >
                    {s.short}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm font-medium text-navy-500 transition-colors hover:text-navy"
                >
                  All services
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="text-sm font-semibold tracking-wide text-navy">Company</h2>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-navy"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold tracking-wide text-navy">Get in touch</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="font-medium text-navy-500 transition-colors hover:text-navy"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-navy-500 transition-colors hover:text-navy"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.careersEmail}`}
                  className="font-medium text-navy-500 transition-colors hover:text-navy"
                >
                  {site.careersEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-[0.8125rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.phone} · {site.email}</p>
        </div>
      </div>
    </footer>
  );
}
