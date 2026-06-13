import { makeOgImage, OG_SIZE } from "@/lib/og";
import { COMPARISONS, COMPARISONS_LIST } from "@/lib/comparisons";

export const runtime = "edge";
export const alt = "Halstead Security Comparison";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return COMPARISONS_LIST.map((c) => ({ competitor: c.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ competitor: string }>;
}) {
  const { competitor } = await params;
  const data = COMPARISONS[competitor];
  if (!data) {
    return makeOgImage("Halstead Security Comparison");
  }
  return makeOgImage(
    `Halstead vs ${data.competitor}`,
    data.hero.subtitle.slice(0, 120)
  );
}
