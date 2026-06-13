import { makeOgImage, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Halstead Security Service Area";
export const size = OG_SIZE;
export const contentType = "image/png";

const STATE_NAMES: Record<string, string> = {
  texas: "Texas",
  oklahoma: "Oklahoma",
  louisiana: "Louisiana",
  arkansas: "Arkansas",
  "new-mexico": "New Mexico",
  arizona: "Arizona",
  colorado: "Colorado",
  tennessee: "Tennessee",
  florida: "Florida",
};

export function generateStaticParams() {
  return Object.keys(STATE_NAMES).map((state) => ({ state }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const name = STATE_NAMES[state] || "Your State";
  return makeOgImage(
    `Halstead Security in ${name}`,
    "Professional home security, locally installed. Plans from $30/mo."
  );
}
