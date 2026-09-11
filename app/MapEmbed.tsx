"use client";

import { useState } from "react";

type MapEmbedProps = {
  src: string;
  title: string;
  address: string;
  mapsHref: string;
};

export default function MapEmbed({ src, title, address, mapsHref }: MapEmbedProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <div className="map-fallback" role="status">
      <strong>Não foi possível carregar o mapa agora.</strong>
      <p>{address}</p>
      <a href={mapsHref} target="_blank" rel="noreferrer">Abrir localização no Google Maps</a>
    </div>;
  }

  return <>
    <iframe title={title} src={src} loading="eager" referrerPolicy="no-referrer-when-downgrade" onError={() => setHasError(true)} />
    <noscript><div className="map-fallback"><strong>Consulte a localização da academia:</strong><p>{address}</p><a href={mapsHref} target="_blank" rel="noreferrer">Abrir localização no Google Maps</a></div></noscript>
  </>;
}
