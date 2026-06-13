import { makeOgImage, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Become a Halstead Security Dealer";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return makeOgImage(
    "Own a Halstead Security Territory",
    "Founding dealer fee: $15,000 · First 25 dealers only"
  );
}
