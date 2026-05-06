import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";
import { SOLUTIONS_LIST } from "@/lib/solutions";
import { FEATURES_LIST } from "@/lib/features";
import { COMPARISONS_LIST } from "@/lib/comparisons";
import { RESOURCES_LIST } from "@/lib/resources";

const cities = [
  "corpus-christi",
  "houston",
  "san-antonio",
  "austin",
  "dallas",
  "fort-worth",
  "el-paso",
  "mcallen",
  "laredo",
];

const states = [
  "texas",
  "oklahoma",
  "louisiana",
  "arkansas",
  "new-mexico",
  "arizona",
  "colorado",
  "tennessee",
  "florida",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/plans`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/features`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/solutions`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/compare`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/dealer`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/dealer/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/dealer/apply`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/white-label`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const solutionPages: MetadataRoute.Sitemap = SOLUTIONS_LIST.map((s) => ({
    url: `${SITE.url}/solutions/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const featurePages: MetadataRoute.Sitemap = FEATURES_LIST.map((f) => ({
    url: `${SITE.url}/features/${f.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const comparisonPages: MetadataRoute.Sitemap = COMPARISONS_LIST.map((c) => ({
    url: `${SITE.url}/compare/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const resourcePages: MetadataRoute.Sitemap = RESOURCES_LIST.map((r) => ({
    url: `${SITE.url}/resources/${r.slug}`,
    lastModified: r.updatedDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${SITE.url}/cities/${city}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const statePages: MetadataRoute.Sitemap = states.map((state) => ({
    url: `${SITE.url}/states/${state}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...solutionPages,
    ...featurePages,
    ...comparisonPages,
    ...resourcePages,
    ...cityPages,
    ...statePages,
  ];
}
