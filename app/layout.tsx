import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Halstead Security — Professional security, installed in your neighborhood",
    template: "%s | Halstead Security",
  },
  description:
    "Real cameras. Real installation. Real support. Halstead Security delivers professional home security with no 36-month contracts, installed by a local technician.",
  metadataBase: new URL("https://halsteadsecurity.com"),
  openGraph: {
    title: "Halstead Security",
    description:
      "Professional security, installed in your neighborhood. No 36-month contracts. No call centers. Real local technicians backed by smart software.",
    url: "https://halsteadsecurity.com",
    siteName: "Halstead Security",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halstead Security",
    description: "Professional security, installed in your neighborhood.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
