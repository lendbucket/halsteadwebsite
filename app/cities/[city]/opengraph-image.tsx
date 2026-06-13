import { makeOgImage, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Halstead Security Service Area";
export const size = OG_SIZE;
export const contentType = "image/png";

const CITY_NAMES: Record<string, string> = {
  "corpus-christi": "Corpus Christi, TX",
  houston: "Houston, TX",
  "san-antonio": "San Antonio, TX",
  austin: "Austin, TX",
  dallas: "Dallas, TX",
  "fort-worth": "Fort Worth, TX",
  "el-paso": "El Paso, TX",
  mcallen: "McAllen, TX",
  laredo: "Laredo, TX",
};

export function generateStaticParams() {
  return Object.keys(CITY_NAMES).map((city) => ({ city }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const name = CITY_NAMES[city] || "Your City";
  return makeOgImage(
    `Home Security in ${name}`,
    "Locally installed by state-licensed Halstead dealers. Plans from $30/mo."
  );
}
