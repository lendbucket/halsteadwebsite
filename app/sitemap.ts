import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

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
    {
      url: `${SITE.url}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.url}/plans`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/features`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE.url}/dealer`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/dealer/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/dealer/apply`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE.url}/white-label`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE.url}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

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

  return [...staticPages, ...cityPages, ...statePages];
}
