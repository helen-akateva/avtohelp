import { kyivDistricts } from '@/lib/data/kyiv-districts';
import { oblastCities } from '@/lib/data/oblast-cities';

export default function sitemap() {
  const base = 'https://avtohelp.ua';
  const districtRoutes = kyivDistricts.map(d => ({
    url: `${base}/kyiv/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  const cityRoutes = oblastCities.map(c => ({
    url: `${base}/oblast/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  return [
    { url: base, priority: 1.0 },
    { url: `${base}/tsiny`, priority: 0.9 },
    { url: `${base}/kyiv`, priority: 0.9 },
    { url: `${base}/oblast`, priority: 0.8 },
    ...districtRoutes,
    ...cityRoutes,
  ];
}