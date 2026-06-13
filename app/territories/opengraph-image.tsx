import { makeOgImage, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Own a Halstead Security territory";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return makeOgImage(
    "Own a Security Territory",
    "License a protected Halstead Security territory with white-label cloud cameras and recurring revenue"
  );
}
