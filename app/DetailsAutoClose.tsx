"use client";
import { useEffect } from "react";
export default function DetailsAutoClose() {
  useEffect(() => {
    const groups = Array.from(document.querySelectorAll<HTMLDetailsElement>("details.nav-group"));
    const onToggle = (event: Event) => {
      const current = event.target as HTMLDetailsElement;
      if (!current.open || !current.classList.contains("nav-group")) return;
      document.querySelectorAll<HTMLDetailsElement>("details.nav-group[open]").forEach((item) => { if (item !== current) item.open = false; });
    };

    const useHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const openOnHover = (event: Event) => {
      const current = event.currentTarget as HTMLDetailsElement;
      groups.forEach((item) => { item.open = item === current; });
    };
    const closeOnLeave = (event: Event) => {
      (event.currentTarget as HTMLDetailsElement).open = false;
    };

    document.addEventListener("toggle", onToggle, true);
    if (useHover) groups.forEach((item) => {
      item.addEventListener("mouseenter", openOnHover);
      item.addEventListener("mouseleave", closeOnLeave);
    });

    return () => {
      document.removeEventListener("toggle", onToggle, true);
      groups.forEach((item) => {
        item.removeEventListener("mouseenter", openOnHover);
        item.removeEventListener("mouseleave", closeOnLeave);
      });
    };
  }, []);
  return null;
}
