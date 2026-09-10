import type { MetadataRoute } from "next";
import { galleryAlbums } from "../content/gallery";

const siteUrl = "https://no-ritmo-academia-de-danca.sites.openai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/sobre", "/missao-visao-valores", "/aulas", "/aulas-particulares", "/modalidades", "/servicos", "/formacao", "/coreografias/casamentos", "/coreografias/debutantes", "/coreografias/eventos", "/coreografias/gincanas", "/professores", "/horarios", "/galeria", "/faq", "/contato", "/eventos", "/projetos", "/projetos/danca-de-salao-gratuita-apucarana", "/area-do-aluno"];
  return [...routes, ...galleryAlbums.map((album) => "/galeria/" + album.slug)].map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date(), changeFrequency: "monthly", priority: route === "/" ? 1 : route.split("/").length > 2 ? 0.6 : 0.7 }));
}
