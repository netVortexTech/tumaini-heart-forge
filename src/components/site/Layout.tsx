import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden gradient-hero text-white">
      {image && (
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/0" />
      <div className="container-x relative py-24 md:py-36">
        <p className="text-xs uppercase tracking-[0.18em] font-bold text-accent mb-4">
          {eyebrow}
        </p>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl max-w-3xl text-balance leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
