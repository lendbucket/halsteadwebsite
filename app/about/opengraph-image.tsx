import { makeOgImage, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "About Halstead Security";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return makeOgImage(
    "About Halstead Security",
    "A national brand operated by independent local dealers"
  );
}
