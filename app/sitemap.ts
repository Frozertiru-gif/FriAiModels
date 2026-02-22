import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/features', '/pricing', '/showcase', '/legal', '/app'];
  return routes.map((route) => ({
    url: `https://friaimodels.example${route}`,
    lastModified: new Date(),
  }));
}
