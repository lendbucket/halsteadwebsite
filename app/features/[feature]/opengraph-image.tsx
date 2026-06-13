import { makeOgImage, OG_SIZE } from "@/lib/og";
import { FEATURES, FEATURES_LIST } from "@/lib/features";

export const runtime = "edge";
export const alt = "Halstead Security Feature";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return FEATURES_LIST.map((f) => ({ feature: f.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ feature: string }>;
}) {
  const { feature } = await params;
  const data = FEATURES[feature];
  if (!data) {
    return makeOgImage("Halstead Security Feature");
  }
  return makeOgImage(data.name, data.hero.subtitle.slice(0, 120));
}
