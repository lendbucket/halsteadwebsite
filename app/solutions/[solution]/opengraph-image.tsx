import { makeOgImage, OG_SIZE } from "@/lib/og";
import { SOLUTIONS, SOLUTIONS_LIST } from "@/lib/solutions";

export const runtime = "edge";
export const alt = "Halstead Security Solution";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return SOLUTIONS_LIST.map((s) => ({ solution: s.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ solution: string }>;
}) {
  const { solution } = await params;
  const data = SOLUTIONS[solution];
  if (!data) {
    return makeOgImage("Halstead Security Solution");
  }
  return makeOgImage(data.name, data.hero.subtitle.slice(0, 120));
}
