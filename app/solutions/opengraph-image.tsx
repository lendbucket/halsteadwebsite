import { makeOgImage, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Halstead Security Solutions by Industry";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return makeOgImage(
    "Security Solutions by Industry",
    "Homes, businesses, multifamily, rentals, construction, and more"
  );
}
