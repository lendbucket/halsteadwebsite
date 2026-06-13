import { makeOgImage, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Halstead Security Home Security Guides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return makeOgImage(
    "Home Security Buying Guides",
    "Honest pricing guides, comparison data, and industry statistics"
  );
}
