import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply to Become a Dealer",
  description:
    "Apply to own a Halstead Security territory. Three-step application takes about 10 minutes. We review and schedule a phone interview within 3 to 5 business days.",
  alternates: { canonical: "/dealer/apply" },
  openGraph: {
    title: "Dealer Application | Halstead Security",
    description:
      "Apply to own a Halstead Security territory in your city. Founding dealer fee: $15,000 one-time.",
  },
};

export default function DealerApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
