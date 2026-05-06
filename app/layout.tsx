import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { ORGANIZATION_SCHEMA, LOCAL_BUSINESS_SCHEMA, SITE } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Halstead Security — Professional Home Security, Locally Installed",
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
    title: "Halstead Security — Professional Home Security, Locally Installed",
    description: SITE.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Halstead Security — Professional home security, installed in your neighborhood",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halstead Security",
    description: SITE.description,
    images: ["/og.png"],
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
  themeColor: "#0F1B2D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={[ORGANIZATION_SCHEMA, LOCAL_BUSINESS_SCHEMA]} />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <meta name="apple-mobile-web-app-title" content="Halstead" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
