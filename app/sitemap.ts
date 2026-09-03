import type { MetadataRoute } from "next";
import { articles, knowledgePages, noRitmoAuthor } from "../content/editorial";

const siteUrl = "https://no-ritmo-academia-de-danca.sites.openai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/sobre", "/aulas", "/aulas-particulares", "/modalidades", "/coreografias", "/professores", "/autores", "/horarios", "/galeria", "/faq", "/contato", "/eventos", "/conhecimento", "/artigos"];
  const categoryRoutes = [...new Set(articles.map((item) => item.category.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(" ", "-")))].map((slug) => `/artigos/categoria/${slug}`);
  const editorialRoutes = [...knowledgePages.map((item) => `/conhecimento/${item.slug}`), ...articles.map((item) => `/artigos/${item.slug}`), ...categoryRoutes, `/autores/${noRitmoAuthor.slug}`];
  return [...routes, ...editorialRoutes].map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date(), changeFrequency: route.startsWith("/artigos") ? "weekly" : "monthly", priority: route === "/" ? 1 : route.split("/").length > 2 ? 0.6 : 0.7 }));
}
