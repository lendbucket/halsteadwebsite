import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote",
  description:
    "Request a free home security quote from Halstead Security. Tell us about your property and a real person responds within 1 business day. No pressure, no 36-month contracts.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Halstead Security",
    description:
      "Get a free home security quote. A real person responds within 1 business day.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
