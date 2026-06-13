import { makeOgImage, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Halstead Security Smart Features";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return makeOgImage(
    "Smart Security Features",
    "AI motion classification, two-camera verification, vacation mode, and more"
  );
}
