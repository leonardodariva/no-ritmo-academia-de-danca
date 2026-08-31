"use client";
import { useEffect } from "react";
export default function DetailsAutoClose() {
  useEffect(() => {
    const onToggle = (event: Event) => {
      const current = event.target as HTMLDetailsElement;
      if (!current.open || !current.classList.contains("nav-group")) return;
      document.querySelectorAll<HTMLDetailsElement>("details.nav-group[open]").forEach((item) => { if (item !== current) item.open = false; });
    };
    document.addEventListener("toggle", onToggle, true);
    return () => document.removeEventListener("toggle", onToggle, true);
  }, []);
  return null;
}
