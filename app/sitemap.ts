import { kyivDistricts } from "@/lib/data/kyiv-districts";
import { oblastCities } from "@/lib/data/oblast-cities";
import { ukraineRegions } from "@/lib/data/ukraine-regions";
import { MetadataRoute } from "next";

const BASE_URL = "https://evakuator-avtohelp.com.ua";

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

  const ukraineRoutes = ukraineRegions
    .filter((r) => r.active)
    .map((r) => ({
      url: `${BASE_URL}/ukraine/${r.slug}`,
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
    {
      url: `${BASE_URL}/ukraine`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...districtRoutes,
    ...cityRoutes,
    ...ukraineRoutes,
  ];
}