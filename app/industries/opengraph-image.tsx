import { makeOgImage, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Industries Halstead Security Serves";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return makeOgImage(
    "Industries We Serve",
    "Security designed for homes, businesses, multifamily, and more"
  );
}
