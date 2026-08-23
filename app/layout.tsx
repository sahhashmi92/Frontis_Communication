import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Frontis Communications | Communications Partner",
    template: "%s | Frontis Communications",
  },
  description:
    "Frontis Communications is a full-service communications and support partner: customer acquisition, back-office support, talent solutions, performance marketing, and software development.",
  openGraph: {
    siteName: site.shortName,
    type: "website",
    url: site.url,
    images: [{ url: "/brand/og.png", width: 1200, height: 630, alt: "Frontis Communications" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2660",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col bg-white font-sans text-ink antialiased">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
