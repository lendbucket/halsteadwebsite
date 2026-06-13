import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { ORGANIZATION_SCHEMA, LOCAL_BUSINESS_SCHEMA, SITE } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Professional Home Security, Locally Installed",
    template: "%s · Halstead Security",
  },
  description: SITE.description,
  keywords: [
    "home security",
    "security system",
    "home alarm",
    "security cameras",
    "professional installation",
    "home monitoring",
    "Texas home security",
    "Corpus Christi security",
    "security dealer",
    "alarm company",
    "smart home security",
    "wireless security camera",
    "doorbell camera",
    "professional monitoring",
    "no contract security",
  ],
  authors: [{ name: SITE.founder }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Professional Home Security, Locally Installed",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Halstead Security",
    description: SITE.description,
    creator: SITE.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console + Bing verification codes here when set up
  },
  category: "Home Security",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#0F1B2D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <JsonLd data={[ORGANIZATION_SCHEMA, LOCAL_BUSINESS_SCHEMA]} />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <meta name="apple-mobile-web-app-title" content="Halstead" />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
