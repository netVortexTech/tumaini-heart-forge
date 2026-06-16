import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, GraduationCap, HeartPulse, Briefcase, TreePine, ShieldCheck, Sparkles, Quote, Calendar, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";

import hero from "@/assets/hero.jpg";
import ecd from "@/assets/ecd.jpg";
import women from "@/assets/women-empowerment.jpg";
import health from "@/assets/health.jpg";
import environment from "@/assets/environment.jpg";
import agyw from "@/assets/agyw.jpg";
import story1 from "@/assets/story-1.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tumaini Letu Nshamba — Empowering Tanzania's Vulnerable Communities" },
      {
        name: "description",
        content:
          "Since 1992, Tumaini Letu has empowered orphans, vulnerable children and women in Kagera, Tanzania through education, health, livelihoods and environmental action.",
      },
      { property: "og:title", content: "Tumaini Letu Nshamba — Empowering Tanzania's Future" },
      { property: "og:description", content: "A community-driven NGO transforming lives in Kagera Region since 1992." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const PROGRAMS = [
  {
    icon: GraduationCap,
    title: "Early Childhood Development",
    desc: "20 day-care centers serving 5,105 children (75% OVC) with Montessori-based pre-school education.",
    image: ecd,
    accent: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: Briefcase,
    title: "Women Empowerment",
    desc: "HANURA savings & credit scheme empowering 300 women caregivers with entrepreneurial training.",
    image: women,
    accent: "from-amber-500/20 to-orange-500/5",
  },
  {
    icon: HeartPulse,
    title: "Health & Nutrition",
    desc: "Health insurance, vaccinations, mosquito nets, school gardens — combating malnutrition at the root.",
    image: health,
    accent: "from-rose-500/20 to-rose-600/5",
  },
  {
    icon: TreePine,
    title: "Environmental Action",
    desc: "Over 400,000 shade & fruit trees planted in schools to build climate resilience for communities.",
    image: environment,
    accent: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    icon: Sparkles,
    title: "AGYW Development",
    desc: "12,430 adolescent girls reached with behavior-change education, biomedical services and protection.",
    image: agyw,
    accent: "from-violet-500/20 to-violet-600/5",
  },
  {
    icon: ShieldCheck,
    title: "Child Protection & Advocacy",
    desc: "1,500 birth certificates issued, paralegals trained, and tireless advocacy for orphans and widows.",
    image: gallery3,
    accent: "from-sky-500/20 to-sky-600/5",
  },
] as const;

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center text-white">
        <img
          src={hero}
          alt="Joyful Tanzanian children at a Tumaini Letu education center"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.05_252)]/90 via-[oklch(0.22_0.08_252)]/70 to-[oklch(0.22_0.08_252)]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[oklch(0.16_0.04_252)]/80" />

        <div className="container-x relative z-10 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs uppercase tracking-[0.18em] font-bold text-accent backdrop-blur animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Empowering Tanzania since 1992
            </div>
            <h1 className="mt-6 font-display font-extrabold text-5xl md:text-7xl leading-[0.98] text-balance animate-fade-up">
              Hope is ours.
              <span className="block mt-2 bg-gradient-to-r from-accent via-amber-300 to-accent bg-clip-text text-transparent">
                Tumaini Letu.
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.15s" }}>
              We transform the lives of orphans, vulnerable children and women in
              Kagera Region through education, health, economic empowerment and
              environmental action — one community at a time.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/donate" className="btn-primary">
                <Heart className="h-4 w-4" strokeWidth={2.5} /> Donate Now
              </Link>
              <Link to="/contact" className="btn-on-dark">
                Become a Volunteer
              </Link>
              <Link to="/about" className="inline-flex items-center gap-1.5 text-white/90 font-semibold px-3 py-3 hover:text-accent transition-colors">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* floating stat ribbon */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="container-x">
            <div className="mb-[-3rem] grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-3xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl">
              {[
                { v: 48000, s: "+", l: "Children educated" },
                { v: 5234, s: "", l: "Reached with health care" },
                { v: 16110, s: "", l: "Women empowered" },
                { v: 400000, s: "+", l: "Trees planted" },
              ].map((stat, i) => (
                <div key={i} className="bg-[oklch(0.18_0.05_252)]/85 backdrop-blur-xl p-6 md:p-7 text-white">
                  <div className="font-display font-extrabold text-2xl md:text-4xl text-accent">
                    <CountUp end={stat.v} suffix={stat.s} />
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-white/75 font-medium">{stat.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IDENTITY / WHO WE ARE */}
      <section className="section-pad pt-32 md:pt-40">
        <div className="container-x grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <Reveal>
            <p className="eyebrow">Who We Are</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight text-balance">
              A grassroots Tanzanian NGO with a national reach.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Tumaini Letu Nshamba, founded in 1992 and registered in 1996
              (Reg. No. 0008843), is a community-driven NGO based in Muleba
              District, Kagera Region. Born in response to the HIV/AIDS crisis,
              we empower marginalized groups — particularly women and children —
              through sustainable, locally-owned initiatives.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                { t: "Vision", d: "A healthier Tanzania where all marginalized groups realize their full potential." },
                { t: "Mission", d: "Empower communities to fight the root causes of vulnerability and its effects." },
                { t: "Goal", d: "Strengthen local capacity to meet the needs of vulnerable groups, including young children." },
              ].map((it) => (
                <div key={it.t} className="rounded-2xl bg-surface p-5 border border-border">
                  <div className="text-xs uppercase tracking-widest font-bold text-primary">{it.t}</div>
                  <div className="mt-2 text-sm text-foreground/80 leading-relaxed">{it.d}</div>
                </div>
              ))}
            </div>

            <Link to="/about" className="mt-9 inline-flex items-center gap-2 font-semibold text-primary group">
              Read our full story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] gradient-warm opacity-20 blur-3xl" />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src={gallery1} alt="Children playing" width={1024} height={1280} loading="lazy" className="rounded-2xl object-cover aspect-[4/5] shadow-card-hover" />
                  <img src={gallery2} alt="Community women" width={1024} height={768} loading="lazy" className="rounded-2xl object-cover aspect-[4/3] shadow-card" />
                </div>
                <div className="pt-10 space-y-4">
                  <img src={environment} alt="Tree planting" width={1280} height={960} loading="lazy" className="rounded-2xl object-cover aspect-[4/3] shadow-card" />
                  <img src={ecd} alt="Montessori classroom" width={1280} height={960} loading="lazy" className="rounded-2xl object-cover aspect-[4/5] shadow-card-hover" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card shadow-card-hover p-5 border border-border max-w-[14rem]">
                <div className="font-display font-extrabold text-3xl text-primary">
                  <CountUp end={33} suffix="+" />
                </div>
                <div className="mt-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  years serving Kagera
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section-pad gradient-soft">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow-accent">What We Do</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight text-balance">
              Six pillars. One mission. Lasting change.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              From a child's first classroom to a mother's first business, our
              programs are designed by communities, for communities.
            </p>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <article className="group relative overflow-hidden rounded-3xl bg-card border border-border card-lift h-full">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} width={1280} height={800} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${p.accent} to-transparent`} />
                  </div>
                  <div className="p-7">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary -mt-12 mb-4 border-4 border-card shadow-sm relative">
                      <p.icon className="h-5 w-5" strokeWidth={2.2} />
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    <Link to="/programs" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group/cta">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT BAND */}
      <section className="section-pad bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_30%_20%,oklch(0.78_0.16_62),transparent_40%),radial-gradient(circle_at_70%_80%,oklch(0.55_0.13_152),transparent_45%)]" />
        <div className="container-x relative">
          <Reveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.18em] font-bold text-accent">Our Impact</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance leading-tight">
              Numbers that translate to lives changed.
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
            {[
              { v: 12500, s: "", l: "Children given early education" },
              { v: 5234, s: "", l: "Children receiving health services" },
              { v: 16110, s: "", l: "Caregivers in income projects" },
              { v: 4.3, s: "M", p: "$", l: "Invested in programs (USD)", dec: 1 },
            ].map((s, i) => (
              <div key={i} className="bg-foreground p-8 md:p-10">
                <div className="font-display font-extrabold text-4xl md:text-5xl text-accent">
                  <CountUp end={s.v} prefix={s.p ?? ""} suffix={s.s} decimals={s.dec ?? 0} />
                </div>
                <div className="mt-2 text-sm text-background/70 leading-relaxed">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link to="/impact" className="btn-primary">View Full Impact Report <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/donate" className="btn-on-dark">Fuel our next milestone</Link>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative">
              <img src={story1} alt="Tanzanian grandmother with grandchildren" width={900} height={900} loading="lazy" className="rounded-3xl shadow-card-hover w-full object-cover aspect-square" />
              <div className="absolute -bottom-6 -right-6 max-w-[18rem] rounded-2xl bg-accent p-6 shadow-card-hover">
                <Quote className="h-6 w-6 text-accent-foreground/70" />
                <p className="mt-2 text-sm font-medium text-accent-foreground leading-relaxed">
                  When my daughter passed, I had nothing. The HANURA savings group
                  gave me capital — and dignity — to raise my grandchildren.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Success Stories</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight text-balance">
              Behind every statistic is a real life rewritten.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              From the 6,216 children who transitioned to primary school since
              2010, to the 300 women now running their own businesses through our
              HANURA scheme, Tumaini Letu's work is measured in futures
              reclaimed — not just numbers reported.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { name: "Mama Anastazia", role: "HANURA Member, Nshamba", q: "I now sell vegetables and pay my grandchildren's school fees." },
                { name: "Teacher Frola", role: "ECD Coordinator", q: "Watching shy three-year-olds bloom into curious learners is why I serve." },
              ].map((s) => (
                <div key={s.name} className="rounded-2xl border border-border bg-surface p-5 flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full gradient-warm text-accent-foreground font-display font-extrabold">
                    {s.name.slice(0, 1)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-foreground">{s.name}</div>
                    <div className="text-xs text-muted-foreground">{s.role}</div>
                    <p className="mt-2 text-sm text-foreground/80 leading-relaxed">"{s.q}"</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="section-pad gradient-soft">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow-accent">Field Stories</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight text-balance">
                Moments from Kagera.
              </h2>
            </div>
            <Link to="/gallery" className="btn-ghost">
              View full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[gallery1, gallery2, gallery3, environment, agyw, women, ecd, health].map((src, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className={`overflow-hidden rounded-2xl card-lift ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <img src={src} alt="Field photo" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">News & Updates</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight text-balance">
              Latest from the field.
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { tag: "ECD", title: "Two new ECD centers open in Muleba District", excerpt: "Better Way Foundation funding brings safe, modern learning spaces to 240 additional children.", date: "March 2026" },
              { tag: "Women", title: "HANURA savings group celebrates 300th member", excerpt: "A milestone for our flagship women's economic empowerment programme.", date: "February 2026" },
              { tag: "Environment", title: "400,000 trees milestone reached", excerpt: "Communities across Kagera have planted nearly half a million shade and fruit trees.", date: "January 2026" },
            ].map((n, i) => (
              <Reveal key={n.title} delay={i * 80}>
                <article className="rounded-3xl bg-card border border-border overflow-hidden card-lift h-full flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={[ecd, women, environment][i]} alt={n.title} width={1280} height={800} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary-soft text-primary font-bold px-2.5 py-1 uppercase tracking-wider text-[10px]">{n.tag}</span>
                      <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {n.date}</span>
                    </div>
                    <h3 className="mt-3 font-display font-extrabold text-lg leading-snug">{n.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{n.excerpt}</p>
                    <Link to="/impact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Read more <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-16 border-y border-border bg-surface">
        <div className="container-x">
          <p className="text-center text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">
            In partnership with
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["Better Way Foundation", "KAPAMU", "KANGONET", "TANGONET", "Muleba District Council", "Govt. of Tanzania"].map((p) => (
              <div key={p} className="font-display font-extrabold text-lg text-muted-foreground/70 hover:text-primary transition-colors">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-pad">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[2rem] gradient-hero text-white p-10 md:p-20">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full gradient-warm opacity-30 blur-3xl animate-float" />
            <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-secondary opacity-20 blur-3xl" />
            <div className="relative max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] font-bold text-accent">Get Involved</p>
              <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.02] text-balance">
                A small gift today.
                <span className="block text-accent">A child's lifetime tomorrow.</span>
              </h2>
              <p className="mt-6 text-lg text-white/85 max-w-2xl">
                $25 sends a child to pre-school for a month. $100 funds a HANURA
                business loan. Whatever you give travels directly to Kagera.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/donate" className="btn-primary">
                  <Heart className="h-4 w-4" strokeWidth={2.5} /> Donate Now
                </Link>
                <Link to="/contact" className="btn-on-dark">
                  <MapPin className="h-4 w-4" /> Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
