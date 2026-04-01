import { kyivDistricts } from "@/lib/data/kyiv-districts";
import { oblastCities } from "@/lib/data/oblast-cities";
import { MetadataRoute } from "next";

const BASE_URL = "https://avtohelp.ua";

export default function sitemap(): MetadataRoute.Sitemap {
  const districtRoutes = kyivDistricts.map((d) => ({
    url: `${BASE_URL}/kyiv/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const cityRoutes = oblastCities.map((c) => ({
    url: `${BASE_URL}/oblast/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/kyiv`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/oblast`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...districtRoutes,
    ...cityRoutes,
  ];
}