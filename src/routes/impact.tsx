import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, TrendingUp, Building2, Users, Leaf, Heart } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";

import hero from "@/assets/agyw.jpg";
import environment from "@/assets/environment.jpg";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Tumaini Letu Nshamba" },
      { name: "description", content: "33 years of measurable impact: 48,000+ children educated, $4.3M invested, 400,000+ trees planted, and lives transformed across Kagera Region." },
      { property: "og:title", content: "Impact & Achievements — Tumaini Letu Nshamba" },
      { property: "og:url", content: "/impact" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Impact"
        title="33 years. Six programs. Hundreds of thousands of lives changed."
        subtitle="Tumaini Letu has evolved from a small women's group into a robust Tanzanian NGO recognised regionally and nationally."
        image={hero}
      />

      {/* Headline stats */}
      <section className="section-pad">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Users, v: 48000, s: "+", l: "Children educated (ages 3–8)", color: "text-primary bg-primary-soft" },
              { Icon: Heart, v: 5234, s: "", l: "Children given health services", color: "text-rose-600 bg-rose-50" },
              { Icon: TrendingUp, v: 16110, s: "", l: "Caregivers in income projects", color: "text-accent-foreground bg-accent-soft" },
              { Icon: Leaf, v: 400000, s: "+", l: "Trees planted in schools", color: "text-secondary bg-secondary/10" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="rounded-3xl bg-card border border-border p-7 card-lift h-full">
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl ${s.color}`}>
                    <s.Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 font-display font-extrabold text-4xl md:text-5xl text-foreground">
                    <CountUp end={s.v} suffix={s.s} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { l: "AGYW reached with SBC, biomedical and structural services", v: 12430 },
              { l: "Birth certificates facilitated for vulnerable children", v: 1500 },
              { l: "USD invested in community programs", v: 4.3, p: "$", s: "M", dec: 1 },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="rounded-3xl bg-surface border border-border p-7">
                  <div className="font-display font-extrabold text-4xl text-primary">
                    <CountUp end={s.v} prefix={s.p ?? ""} suffix={s.s ?? ""} decimals={s.dec ?? 0} />
                  </div>
                  <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENT AREAS */}
      <section className="section-pad gradient-soft">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow-accent">Our Achievements</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight text-balance">
              Four pillars of measurable progress.
            </h2>
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            {[
              {
                Icon: Building2,
                t: "Organizational Evolution",
                d: "Over 33 years, Tumaini Letu has transformed from a women's group into a robust NGO, adopting systems strengthening and community empowerment approaches. We are active members of KAPAMU, KANGONET and TANGONET, and since 2010, we've been led by a board of directors.",
              },
              {
                Icon: Award,
                t: "Programmatic Success",
                d: "With Better Way Foundation funding, we've constructed two new ECD centers, improved learning environments with teaching materials and playgrounds, and enhanced child nutrition. Enrollment increased from 1,500 in 2010 to 5,423 in 2020, with 6,216 children transitioning to primary education.",
              },
              {
                Icon: Users,
                t: "Community Engagement",
                d: "Communities actively contribute crops and materials to support our ECD programs. Awareness campaigns have boosted understanding of pre-school education, driving higher enrollment and community ownership across Muleba District.",
              },
              {
                Icon: Heart,
                t: "Reaching Marginalized Groups",
                d: "We target high-risk populations — fishing communities, miners, and those affected by poverty, illiteracy and climate change. Our interventions address food insecurity, health challenges and human rights violations in Kagera Region.",
              },
            ].map((a, i) => (
              <Reveal key={a.t} delay={i * 60}>
                <article className="rounded-3xl bg-card border border-border p-8 h-full card-lift">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-warm text-accent-foreground">
                    <a.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display font-extrabold text-2xl">{a.t}</h3>
                  <p className="mt-3 text-foreground/75 leading-relaxed">{a.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <Reveal>
            <p className="eyebrow">Field Activities</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              What we actually do, every day.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Our Early Childhood Development and Community Ownership strategies
              translate into concrete activities across Muleba District.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { t: "Baseline surveys on pre-primary education needs", c: "ECD" },
                { t: "Procure and distribute educational & play materials", c: "ECD" },
                { t: "Construct and renovate day-care centers, including toilets and playgrounds", c: "ECD" },
                { t: "Train 37 ECD teachers on Montessori methodologies and MVC care", c: "ECD" },
                { t: "Support 600 needy children with school uniforms", c: "ECD" },
                { t: "Mobilize communities to establish day-care centers", c: "Community" },
                { t: "Conduct awareness campaigns using multimedia", c: "Community" },
                { t: "Support disabled children with special materials", c: "Community" },
                { t: "Train para-professionals on kids' club management", c: "Community" },
                { t: "Organize fundraising and resource-mobilization events", c: "Community" },
              ].map((a, i) => (
                <Reveal key={i} delay={i * 30}>
                  <div className="flex items-start gap-4 rounded-2xl bg-surface border border-border p-4">
                    <span className="rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 shrink-0">{a.c}</span>
                    <span className="text-foreground/85 text-sm leading-relaxed">{a.t}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <img src={environment} alt="School tree planting" width={1280} height={960} loading="lazy" className="rounded-3xl object-cover w-full aspect-[4/5] shadow-card-hover" />
          </Reveal>
        </div>
      </section>

      <section className="section-pad gradient-soft">
        <div className="container-x text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl">Help us go further.</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Our next chapter — more centers, more women in business, more trees,
            more dignity — only happens with your support.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/donate" className="btn-primary">Donate Now</Link>
            <Link to="/contact" className="btn-ghost">Partner With Us</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
