import { makeOgImage, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Compare Halstead Security vs Other Brands";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return makeOgImage(
    "Compare Home Security Companies",
    "Halstead vs ADT, Ring, SimpliSafe, and Vivint compared side by side"
  );
}
