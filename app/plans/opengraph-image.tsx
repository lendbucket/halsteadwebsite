import { makeOgImage, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Halstead Security Plans & Pricing";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return makeOgImage(
    "Plans & Pricing from $30/mo",
    "Basic $30 · Premium $50 · Pro Monitoring $75 · No 36-month contracts"
  );
}
