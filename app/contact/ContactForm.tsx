"use client";

import { useState, type FormEvent } from "react";
import { services, site } from "@/lib/site";
import { Icon } from "@/components/icons";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-muted/60 transition-colors focus:border-navy-400 focus:outline-none focus:ring-2 focus:ring-navy-100";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill every field; humans never see this one.
    if (data.get("website")) return;

    if (!site.formEndpoint) {
      setStatus("error");
      setErrorMsg(
        `The contact form isn’t connected yet. Please email us directly at ${site.email}.`,
      );
      return;
    }

    setStatus("submitting");
    try {
      // URL-encoded keeps this a CORS "simple request", which the Google
      // Apps Script endpoint requires (it cannot answer preflights).
      const body = new URLSearchParams();
      data.forEach((value, key) => body.append(key, String(value)));
      const res = await fetch(site.formEndpoint, { method: "POST", body });
      if (!res.ok) throw new Error(`Form endpoint returned ${res.status}`);
      const payload = await res.json().catch(() => null);
      if (payload && payload.ok === false) {
        throw new Error(payload.error || "Form endpoint reported a failure");
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg(
        `Something went wrong sending your message. Please try again, or email us at ${site.email}.`,
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-white p-8"
        role="status"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-600">
          <Icon name="checkCircle" className="h-6 w-6" />
        </span>
        <div>
          <h2 className="text-xl font-semibold text-navy">Message received.</h2>
          <p className="mt-2 leading-relaxed text-muted">
            Thanks for reaching out. We’ll get back to you as soon as possible.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">
            Full name <span className="text-orange-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-navy">
            Company name <span className="text-orange-600">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={inputClasses}
            placeholder="Acme Insurance Group"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">
            Email address <span className="text-orange-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClasses}
            placeholder="jane@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy">
            Phone number{" "}
            <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClasses}
            placeholder="(555) 000-0000"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-navy">
            Service of interest <span className="text-orange-600">*</span>
          </label>
          <select id="service" name="service" required className={inputClasses} defaultValue="">
            <option value="" disabled>
              Select a service…
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Not sure / General inquiry">Not sure / General inquiry</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">
            What can we help you with? <span className="text-orange-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`${inputClasses} resize-y`}
            placeholder="Tell us about your goals, volumes, or the problem you’re trying to solve."
          />
        </div>
        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {status === "error" && (
        <p
          className="mt-5 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm leading-relaxed text-navy"
          role="alert"
        >
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange px-8 text-base font-semibold text-navy-950 shadow-sm shadow-orange-600/20 transition-all duration-200 hover:-translate-y-px hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        {status !== "submitting" && <Icon name="arrowRight" className="h-4 w-4" />}
      </button>
      <p className="mt-4 text-sm text-muted">
        For careers, email {site.careersEmail} directly.
      </p>
    </form>
  );
}
