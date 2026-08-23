"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/site";
import { Icon } from "./icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // Services rendered separately (dropdown)
  { href: "/industries", label: "Industries" },
  { href: "/careers", label: "Careers" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on navigation (state reset during render, per React docs)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  // Close the dropdown on outside click / Escape
  useEffect(() => {
    if (!servicesOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const servicesActive = pathname.startsWith("/services");

  const desktopLink = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      aria-current={isActive(href) ? "page" : undefined}
      className={`rounded-full px-3.5 py-2 text-[0.9375rem] font-medium transition-colors ${
        isActive(href)
          ? "text-navy"
          : "text-muted hover:bg-navy-50 hover:text-navy"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-[4.5rem]">
        <Link href="/" className="shrink-0" aria-label="Frontis Communications home">
          <Image
            src="/brand/logo-horizontal.png"
            alt="Frontis Communications"
            width={1943}
            height={226}
            priority
            className="h-7 w-auto sm:h-8 lg:h-9"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {desktopLink("/", "Home")}
          {desktopLink("/about", "About")}

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.9375rem] font-medium transition-colors ${
                servicesActive || servicesOpen
                  ? "text-navy"
                  : "text-muted hover:bg-navy-50 hover:text-navy"
              }`}
            >
              Services
              <svg
                viewBox="0 0 12 12"
                aria-hidden="true"
                className={`h-3 w-3 stroke-current transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m2.5 4.5 3.5 3.5 3.5-3.5" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 mt-3 w-[46rem] -translate-x-1/2 rounded-2xl border border-line bg-white p-2 shadow-xl shadow-navy-900/8">
                <ul className="grid grid-cols-2 gap-x-1">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex items-start gap-3.5 rounded-xl px-3.5 py-3 transition-colors hover:bg-navy-50"
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy transition-colors group-hover:bg-white">
                          <Icon name={s.icon} className="h-[18px] w-[18px]" />
                        </span>
                        <span>
                          <span className="block text-[0.9375rem] font-semibold text-navy">
                            {s.short}
                          </span>
                          <span className="mt-0.5 block text-[0.8125rem] leading-snug text-muted">
                            {s.blurb}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-1 border-t border-line px-3.5 py-2.5">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 hover:text-navy"
                  >
                    View all services
                    <Icon name="arrowRight" className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {desktopLink("/industries", "Industries")}
          {desktopLink("/careers", "Careers")}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full bg-orange px-5 text-[0.9375rem] font-semibold text-navy-950 shadow-sm shadow-orange-600/20 transition-all duration-200 hover:-translate-y-px hover:bg-orange-400"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-navy lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 stroke-current"
            fill="none"
            strokeWidth={1.8}
            strokeLinecap="round"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-white px-5 pt-3 pb-8 lg:hidden"
        >
          <ul className="space-y-1">
            {links.slice(0, 2).map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-base font-medium ${
                    isActive(l.href) ? "bg-navy-50 text-navy" : "text-ink hover:bg-surface"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <p className="px-4 pb-1 text-[0.75rem] font-semibold tracking-[0.14em] text-muted uppercase">
                Services
              </p>
              <ul className="space-y-0.5">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-[0.9375rem] font-medium text-ink hover:bg-surface"
                    >
                      <Icon name={s.icon} className="h-[18px] w-[18px] text-navy-400" />
                      {s.short}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-navy-500"
                  >
                    View all services
                    <Icon name="arrowRight" className="h-3.5 w-3.5" />
                  </Link>
                </li>
              </ul>
            </li>
            {links.slice(2).map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-base font-medium ${
                    isActive(l.href) ? "bg-navy-50 text-navy" : "text-ink hover:bg-surface"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-5 flex h-12 items-center justify-center rounded-full bg-orange px-6 text-base font-semibold text-navy-950"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
