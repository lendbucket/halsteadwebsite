import { makeOgImage, OG_SIZE } from "@/lib/og";
import { RESOURCES, RESOURCES_LIST } from "@/lib/resources";

export const runtime = "edge";
export const alt = "Halstead Security Resource";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return RESOURCES_LIST.map((r) => ({ slug: r.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = RESOURCES[slug];
  if (!data) {
    return makeOgImage("Halstead Security Resource");
  }
  return makeOgImage(data.title, data.excerpt.slice(0, 120));
}
