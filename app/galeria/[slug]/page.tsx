import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { galleryAlbums } from "../../../content/gallery";
import SubpageShell from "../../SubpageShell";
import AlbumPhotos from "../AlbumPhotos";

export function generateStaticParams() { return galleryAlbums.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const album = galleryAlbums.find((item) => item.slug === slug);
  return album ? { title: album.title + " | Galeria No Ritmo", description: album.description, alternates: { canonical: "/galeria/" + slug } } : {};
}
export default async function AlbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const album = galleryAlbums.find((item) => item.slug === slug);
  if (!album) notFound();
  return <SubpageShell compactHero wideCopy kicker="Galeria" title={album.title} intro={album.description} sections={[{ number: "01", title: "Cada foto, um novo olhar", fullWidth: true, content: <>
    <div className="album-toolbar"><Link className="button gallery-all-button" href="/galeria">Ver todos os álbuns</Link><span>{album.category} · <strong>{album.photos.length} fotos</strong></span></div>
    <p className="gallery-demo-note">Clique em uma foto para ampliar.</p>
    <AlbumPhotos album={album} />
  </> }]} />;
}
