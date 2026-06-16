import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, ShieldCheck, Receipt, GraduationCap, HeartPulse, TreePine, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

import ecd from "@/assets/ecd.jpg";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Tumaini Letu Nshamba" },
      { name: "description", content: "Your gift sends a child to pre-school, funds a woman's first business, plants trees and brings health care to rural Tanzania. Donate to Tumaini Letu today." },
      { property: "og:title", content: "Donate — Tumaini Letu Nshamba" },
      { property: "og:url", content: "/donate" },
    ],
    links: [{ rel: "canonical", href: "/donate" }],
  }),
  component: DonatePage,
});

const AMOUNTS = [25, 50, 100, 250, 500, 1000];

const IMPACT_TIERS = [
  { Icon: GraduationCap, a: "$25", t: "Funds a child's pre-school for one month", c: "bg-primary-soft text-primary" },
  { Icon: HeartPulse, a: "$50", t: "Provides health insurance for an OVC for a year", c: "bg-rose-50 text-rose-700" },
  { Icon: Sparkles, a: "$100", t: "Seeds a HANURA business loan for a caregiver", c: "bg-accent-soft text-accent-foreground" },
  { Icon: TreePine, a: "$250", t: "Plants 500 shade & fruit trees in a school", c: "bg-secondary/10 text-secondary" },
];

function DonatePage() {
  const [amount, setAmount] = useState(100);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Donate"
        title="A small gift today. A child's lifetime tomorrow."
        subtitle="100% of your donation travels to Kagera Region. Choose what you want to fund — we'll show you exactly the lives it changes."
        image={ecd}
      />

      {/* DONATE CARD + IMPACT */}
      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
          <Reveal>
            <div className="rounded-3xl bg-card border border-border shadow-card-hover p-7 md:p-10">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl gradient-warm text-accent-foreground">
                  <Heart className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <div>
                  <div className="font-display font-extrabold text-xl">Make your gift</div>
                  <div className="text-xs text-muted-foreground">Secure · 100% to programs</div>
                </div>
              </div>

              <div className="mt-7 inline-flex rounded-full bg-surface border border-border p-1">
                {(["once", "monthly"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFrequency(f)}
                    className={`px-5 py-2 rounded-full text-sm font-bold capitalize transition-colors ${
                      frequency === f ? "bg-primary text-primary-foreground" : "text-foreground/70"
                    }`}
                  >
                    {f === "once" ? "One-time" : "Monthly"}
                  </button>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {AMOUNTS.map((a) => (
                  <button
                    key={a}
                    onClick={() => { setAmount(a); setCustom(""); }}
                    className={`rounded-2xl border-2 py-4 font-display font-extrabold text-lg transition-all ${
                      amount === a && !custom
                        ? "border-primary bg-primary-soft text-primary"
                        : "border-border bg-surface text-foreground/70 hover:border-primary/40"
                    }`}
                  >
                    ${a}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Custom amount (USD)</label>
                <div className="mt-2 flex items-center rounded-2xl border border-border bg-surface focus-within:border-primary">
                  <span className="pl-4 text-foreground/60 font-bold">$</span>
                  <input
                    type="number"
                    value={custom}
                    onChange={(e) => { setCustom(e.target.value); setAmount(Number(e.target.value) || 0); }}
                    placeholder="Other"
                    className="flex-1 bg-transparent px-3 py-4 outline-none text-lg font-display font-bold"
                  />
                </div>
              </div>

              <button className="mt-6 w-full btn-primary text-base !py-4">
                <Heart className="h-4 w-4" strokeWidth={2.5} />
                Donate ${amount || 0} {frequency === "monthly" ? "monthly" : "now"}
              </button>

              <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-secondary" /> Encrypted</div>
                <div className="flex items-center gap-1.5"><Receipt className="h-3.5 w-3.5 text-secondary" /> Tax receipt</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-secondary" /> Cancel anytime</div>
              </div>

              <p className="mt-6 text-xs text-muted-foreground leading-relaxed border-t border-border pt-5">
                Tumaini Letu Nshamba is a registered Tanzanian NGO (Reg. No. 0008843).
                Bank transfers also accepted — <Link to="/contact" className="text-primary font-semibold">contact us</Link> for wire instructions.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow-accent">Where Your Gift Goes</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight text-balance">
              Transparent. Direct. Measurable.
            </h2>
            <p className="mt-5 text-foreground/80 leading-relaxed">
              Every shilling and every dollar is tracked. Here's exactly what
              different gift sizes accomplish in the field:
            </p>

            <div className="mt-8 space-y-3">
              {IMPACT_TIERS.map((t, i) => (
                <Reveal key={t.a} delay={i * 50}>
                  <div className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5 card-lift">
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${t.c}`}>
                      <t.Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="font-display font-extrabold text-xl text-foreground">{t.a}</div>
                      <div className="text-sm text-foreground/75">{t.t}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 rounded-3xl gradient-hero text-white p-7">
              <div className="text-xs uppercase tracking-widest font-bold text-accent">Allocation of funds</div>
              <div className="mt-4 space-y-3">
                {[
                  { l: "Direct program delivery", v: 82 },
                  { l: "Field operations & M&E", v: 12 },
                  { l: "Administration", v: 6 },
                ].map((row) => (
                  <div key={row.l}>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/85">{row.l}</span>
                      <span className="font-bold">{row.v}%</span>
                    </div>
                    <div className="mt-1.5 h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full gradient-warm rounded-full" style={{ width: `${row.v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-16 border-y border-border bg-surface">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "Registered NGO", d: "Reg. No. 0008843, Tanzania" },
            { t: "Since 1992", d: "Three decades in Kagera" },
            { t: "$4.3M invested", d: "Transparently reported" },
            { t: "Network member", d: "KAPAMU · KANGONET · TANGONET" },
          ].map((b) => (
            <div key={b.t} className="text-center">
              <div className="font-display font-extrabold text-2xl text-primary">{b.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{b.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-balance">Prefer another way?</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Become a corporate partner, sponsor a child, organise a fundraiser
            or volunteer in person. We'd love to talk.
          </p>
          <Link to="/contact" className="mt-8 inline-flex btn-ghost">
            Talk to our team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
