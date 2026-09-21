export const site = {
  name: "Frontis Communications",
  shortName: "Frontis Communications",
  tagline: "Communication That Connects",
  url: "https://frontiscommunications.com",
  phone: "0313-9331429",
  email: "grow@frontiscommunications.com",
  careersEmail: "grow@frontiscommunications.com",
  address: {
    line1: "Ground Floor, Sarfaraz Business and Technology Park",
    line2: "Shamsabad, Rawalpindi",
    full: "Ground Floor, Sarfaraz Business and Technology Park, Shamsabad, Rawalpindi",
    locality: "Rawalpindi",
    country: "PK",
  },
  /**
   * Contact form backend: Google Apps Script web app bound to the
   * "Frontis Communications Website Leads" sheet. Each submission appends a row and
   * emails an alert (see scripts/google-apps-script-form.gs). Override with
   * NEXT_PUBLIC_FORM_ENDPOINT to point at a different backend.
   */
  formEndpoint:
    process.env.NEXT_PUBLIC_FORM_ENDPOINT ??
    "https://script.google.com/macros/s/AKfycbyIZAQbo6IpMTxvfL_V_Xwc1JkTE-gCmV2mfOFvHDO7PSLKSk40hzar5QCZbhb-wVDZ/exec",
};

export type ServiceInfo = {
  slug: string;
  /** Full formal name, used on the service page and schema markup */
  name: string;
  /** Short 2–3 word label for cards, nav, and footers */
  short: string;
  /** One sentence, max ~15 words, for the homepage strip */
  blurb: string;
  /** Two or three sentences for the services hub */
  summary: string;
  icon: "acquisition" | "backoffice" | "talent" | "marketing" | "software" | "ai" | "apps" | "cloud";
};

export const services: ServiceInfo[] = [
  {
    slug: "customer-acquisition",
    name: "Customer Acquisition & Contact Center Operations",
    short: "Customer Acquisition",
    blurb: "Outbound, inbound, and live transfers that turn prospects into customers.",
    summary:
      "Outbound and inbound calling, live transfers, lead qualification, appointment setting, and retention, managed as structured, high-quality campaigns.",
    icon: "acquisition",
  },
  {
    slug: "back-office-support",
    name: "Back-Office Support",
    short: "Back-Office Support",
    blurb: "Data, CRM, scheduling, and admin work, handled reliably behind the scenes.",
    summary:
      "Data processing, CRM management, virtual assistance, scheduling, and document management. The administrative backbone that keeps your business running while your in-house team focuses on higher-value work.",
    icon: "backoffice",
  },
  {
    slug: "talent-solutions",
    name: "Talent Solutions",
    short: "Talent Solutions",
    blurb: "Vetted remote professionals for technical and non-technical roles.",
    summary:
      "Dedicated remote staffing for technical and non-technical roles, available hourly or monthly. Vetted professionals who work as an extension of your team, without the overhead of direct hiring.",
    icon: "talent",
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    short: "Performance Marketing",
    blurb: "Paid media, lead generation, and conversion optimization that fill your pipeline.",
    summary:
      "Paid media, lead generation, landing pages, conversion optimization, analytics, and SEO. Demand generation measured by qualified leads and closed business, not clicks.",
    icon: "marketing",
  },
  {
    slug: "digital-innovation",
    name: "Digital Innovation & Software Development",
    short: "Software Development",
    blurb: "Custom internal tools, integrations, and business systems, built to spec.",
    summary:
      "Custom software for the way your business actually runs: internal tools, workflow systems, CRM integrations, and API development. A structured build partner rather than a freelance gamble.",
    icon: "software",
  },
  {
    slug: "ai-automation",
    name: "AI & Automation",
    short: "AI & Automation",
    blurb: "AI agents, chatbots, and workflow automation that remove manual work.",
    summary:
      "AI integrated into the systems you already use: conversational AI for sales and support, AI agents that handle repetitive work, process automation, and data pipelines. Practical AI with measurable output, not experiments.",
    icon: "ai",
  },
  {
    slug: "application-development",
    name: "Application Development",
    short: "Application Development",
    blurb: "Web, mobile, and e-commerce applications from MVP to full product.",
    summary:
      "Web applications, iOS and Android apps, cross-platform builds, and e-commerce platforms. From a first MVP to a mature product, delivered through a structured process with ongoing support after launch.",
    icon: "apps",
  },
  {
    slug: "cloud-infrastructure",
    name: "Cloud Management & Migration",
    short: "Cloud & Infrastructure",
    blurb: "Cloud migration, managed operations, and cost control on AWS, Azure, or Google Cloud.",
    summary:
      "Move to the cloud, or get more from the cloud you already have. Migration planning and execution, architecture, managed operations and monitoring, cost optimization, backups, and DevOps, on AWS, Azure, or Google Cloud.",
    icon: "cloud",
  },
];

export const industries = [
  {
    id: "health-insurance",
    name: "Health Insurance",
    subtitle: "ACA & Medicare",
    icon: "health" as const,
  },
  { id: "solar", name: "Solar Energy", subtitle: "Residential & commercial", icon: "solar" as const },
  { id: "home-services", name: "Home Services", subtitle: "Local & multi-market", icon: "home" as const },
  { id: "auto-insurance", name: "Auto Insurance", subtitle: "Agencies & carriers", icon: "auto" as const },
  { id: "smb", name: "General SMB", subtitle: "Growth-stage & mid-market", icon: "smb" as const },
];
