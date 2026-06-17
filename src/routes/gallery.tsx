import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

import hero from "@/assets/hero.jpg";
import ecd from "@/assets/ecd.jpg";
import women from "@/assets/women-empowerment.jpg";
import health from "@/assets/health.jpg";
import environment from "@/assets/environment.jpg";
import agyw from "@/assets/agyw.jpg";
import story1 from "@/assets/story-1.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import upload1 from "@/assets/uploads/image.jpg.asset.json";
import upload2 from "@/assets/uploads/image-2.jpg.asset.json";
import upload3 from "@/assets/uploads/image-3.jpg.asset.json";
import upload4 from "@/assets/uploads/image-4.jpg.asset.json";
import upload5 from "@/assets/uploads/image-5.jpg.asset.json";
import upload6 from "@/assets/uploads/image-6.jpg.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Tumaini Letu Nshamba" },
      { name: "description", content: "Moments from the field: children, women, communities and landscapes of Kagera Region we serve." },
      { property: "og:title", content: "Gallery — Tumaini Letu Nshamba" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const PHOTOS = [
  { src: upload1.url, cat: "Children", caption: "One-on-one learning at a Tumaini Letu ECD center", h: "tall" },
  { src: upload4.url, cat: "Programs", caption: "Child health check at a community clinic day", h: "tall" },
  { src: upload2.url, cat: "Community", caption: "Community gathering in Muleba District", h: "med" },
  { src: upload3.url, cat: "Programs", caption: "Group session led by our community facilitator", h: "med" },
  { src: upload6.url, cat: "Women", caption: "Women smallholder farmer tending her plot", h: "tall" },
  { src: upload5.url, cat: "Community", caption: "Reforestation site and community gathering", h: "short" },
  { src: hero, cat: "Children", caption: "Joyful pre-schoolers at a Tumaini Letu ECD center", h: "tall" },
  { src: g1, cat: "Children", caption: "Children playing outside our Nshamba center", h: "tall" },
  { src: women, cat: "Women", caption: "HANURA savings group meeting", h: "med" },
  { src: ecd, cat: "Programs", caption: "Montessori practical-life session", h: "med" },
  { src: g2, cat: "Women", caption: "Community caregivers in conversation", h: "short" },
  { src: environment, cat: "Environment", caption: "School tree-planting in Muleba District", h: "med" },
  { src: agyw, cat: "Programs", caption: "AGYW programme participants", h: "tall" },
  { src: g3, cat: "Programs", caption: "Story-time with our ECD teacher", h: "med" },
  { src: g4, cat: "Environment", caption: "Volunteers planting fruit trees", h: "short" },
  { src: g5, cat: "Children", caption: "Mealtime at the ECD center", h: "tall" },
  { src: health, cat: "Programs", caption: "Clinic day with community health workers", h: "med" },
  { src: g6, cat: "Landscape", caption: "Kagera Region at golden hour", h: "short" },
  { src: story1, cat: "Community", caption: "A grandmother with her grandchildren", h: "med" },
] as const;

const CATS = ["All", "Children", "Women", "Programs", "Environment", "Community", "Landscape"] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof CATS)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = PHOTOS.filter((p) => filter === "All" || p.cat === filter);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gallery"
        title="Moments from the field."
        subtitle="Real children, real women, real communities — photographed at our ECD centers, savings groups and tree-planting events across Kagera Region."
      />

      <section className="py-10 border-b border-border bg-surface sticky top-18 z-20 backdrop-blur">
        <div className="container-x flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                filter === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border text-foreground/80 hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance]">
            {filtered.map((p, i) => (
              <Reveal key={`${p.src}-${i}`} delay={i * 30}>
                <button
                  onClick={() => setLightbox(i)}
                  className="mb-4 group block w-full overflow-hidden rounded-2xl bg-surface card-lift text-left"
                >
                  <img
                    src={p.src}
                    alt={p.caption}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      p.h === "tall" ? "aspect-[3/4]" : p.h === "med" ? "aspect-[4/3]" : "aspect-[4/3]"
                    }`}
                  />
                  <div className="p-4">
                    <div className="text-[10px] uppercase tracking-widest font-bold text-accent-foreground bg-accent-soft inline-block px-2 py-1 rounded-full">
                      {p.cat}
                    </div>
                    <p className="mt-2 text-sm text-foreground/75 leading-snug">{p.caption}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <X />
          </button>
          <div className="max-w-5xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[lightbox].src} alt={filtered[lightbox].caption} className="max-h-[85vh] w-auto rounded-2xl shadow-2xl" />
            <p className="mt-4 text-center text-white/80 text-sm">{filtered[lightbox].caption}</p>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
