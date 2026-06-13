import { makeOgImage, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Halstead Security White-Label Platform";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return makeOgImage(
    "White-Label Security Platform",
    "Run a security business under your own brand on Halstead infrastructure"
  );
}
