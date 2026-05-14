import type { MetadataRoute } from "next";

const siteUrl = "https://sovereignbharat.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/blog", "/sign-in", "/sign-up"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/blog" ? 0.9 : 0.6,
  }));
}
