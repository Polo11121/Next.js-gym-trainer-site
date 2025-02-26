import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://monikahabant.pl";

  return [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/o-mnie`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/oferta`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/cennik`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/kontakt`, lastModified: new Date().toISOString() },
  ];
}
