import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

import ecd from "@/assets/ecd.jpg";
import women from "@/assets/women-empowerment.jpg";
import health from "@/assets/health.jpg";
import environment from "@/assets/environment.jpg";
import agyw from "@/assets/agyw.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Our Programs — Tumaini Letu Nshamba" },
      { name: "description", content: "Six community-led programs: Early Childhood Development, Women Empowerment, Health & Nutrition, Child Protection, AGYW Development and Environmental Sustainability." },
      { property: "og:title", content: "Programs — Tumaini Letu Nshamba" },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

const PROGRAMS = [
  {
    id: "ecd",
    title: "Early Childhood Development (ECD)",
    image: ecd,
    desc: "Operating 20 day-care centers, we serve 5,105 children aged 3–6 (75% OVC) with pre-school education, nutrition and health services using the Montessori model. Since 2010 we've transitioned 6,216 children to primary education.",
    objectives: [
      "Increase access to quality early learning for children aged 0–8 by 2025",
      "Train ECD teachers in Montessori methodologies and MVC care",
      "Construct, renovate and equip day-care centers including playgrounds",
      "Support vulnerable children with uniforms for primary school transition",
    ],
    impact: ["48,000 children educated", "5,105 in active centers", "6,216 transitioned to primary"],
  },
  {
    id: "women",
    title: "Women Empowerment (HANURA)",
    image: women,
    desc: "Through the HANURA savings and credit scheme, we empower 300 women caregivers with entrepreneurial training and revolving funds — enhancing household income and the wellbeing of orphans and vulnerable children.",
    objectives: [
      "Provide micro-loans through revolving community funds",
      "Train women in business management and financial literacy",
      "Create village savings and credit cooperatives",
      "Link women entrepreneurs to local markets",
    ],
    impact: ["16,110 caregivers empowered", "300 active HANURA members", "Hundreds of small businesses launched"],
  },
  {
    id: "health",
    title: "Health & Nutrition",
    image: health,
    desc: "We provide health insurance, mosquito nets and vaccinations, alongside food rations and school gardens to combat malnutrition. We train caregivers on food preparation and crop diversification.",
    objectives: [
      "Enroll OVCs in community health insurance",
      "Distribute treated mosquito nets and immunization support",
      "Establish nutrition gardens at every ECD center",
      "Train caregivers on balanced diets and food preservation",
    ],
    impact: ["5,234 children reached", "20 nutrition gardens", "Insurance for the most vulnerable"],
  },
  {
    id: "protection",
    title: "Child Protection & Advocacy",
    image: gallery3,
    desc: "We advocate for children's and widows' rights, have facilitated 1,500 birth certificates, and train paralegals to address legal issues — reducing stigma, discrimination and rights violations.",
    objectives: [
      "Issue birth certificates to undocumented OVCs",
      "Train community paralegals on child protection law",
      "Run anti-stigma awareness campaigns",
      "Advocate for widows' inheritance and land rights",
    ],
    impact: ["1,500 birth certificates", "Community paralegals trained", "Awareness reaching whole districts"],
  },
  {
    id: "agyw",
    title: "AGYW Development",
    image: agyw,
    desc: "Reaching adolescent girls and young women with social behavior change education, biomedical services and structural interventions — addressing HIV vulnerability, education access and economic readiness.",
    objectives: [
      "Deliver life-skills and SRH education",
      "Connect AGYW to biomedical health services",
      "Provide structural support: school fees, mentorship, safe spaces",
      "Reduce gender-based violence through community engagement",
    ],
    impact: ["12,430 AGYW reached", "Safe spaces in every ward", "Reduced school dropout"],
  },
  {
    id: "environment",
    title: "Environmental Sustainability",
    image: environment,
    desc: "We promote resilience by planting over 400,000 trees and advocating for sustainable agricultural practices to address climate change challenges affecting our communities.",
    objectives: [
      "Plant shade and fruit trees at every school",
      "Train farmers in climate-smart agriculture",
      "Establish school environmental clubs",
      "Promote crop diversification for food security",
    ],
    impact: ["400,000+ trees planted", "20+ schools greened", "Climate-smart farming taught"],
  },
];

function ProgramsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Programs"
        title="Six interconnected programs creating lasting community change."
        subtitle="Education, economic empowerment, health, protection, gender equality and environment — designed by and with the communities we serve."
        image={ecd}
      />

      <section className="py-12 border-b border-border bg-surface">
        <div className="container-x flex flex-wrap gap-2">
          {PROGRAMS.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="rounded-full bg-card border border-border px-4 py-2 text-sm font-semibold text-foreground/80 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
              {p.title.split("(")[0].trim()}
            </a>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x space-y-24">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.id}>
              <article id={p.id} className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-24 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                <div className="lg:[direction:ltr]">
                  <div className="relative">
                    <div className="absolute -inset-4 -z-10 rounded-[2rem] gradient-warm opacity-15 blur-2xl" />
                    <img src={p.image} alt={p.title} width={1280} height={960} loading="lazy" className="rounded-3xl shadow-card-hover w-full aspect-[4/3] object-cover" />
                  </div>
                </div>
                <div className="lg:[direction:ltr]">
                  <p className="eyebrow-accent">Programme</p>
                  <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl leading-tight">{p.title}</h2>
                  <p className="mt-5 text-lg text-foreground/80 leading-relaxed">{p.desc}</p>

                  <div className="mt-8">
                    <div className="text-xs uppercase tracking-widest font-bold text-primary mb-3">Objectives</div>
                    <ul className="space-y-2.5">
                      {p.objectives.map((o) => (
                        <li key={o} className="flex gap-3 text-foreground/85">
                          <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {p.impact.map((m) => (
                      <span key={m} className="rounded-full bg-primary-soft text-primary text-xs font-bold px-3 py-1.5">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad gradient-soft">
        <div className="container-x">
          <div className="rounded-[2rem] gradient-hero text-white p-10 md:p-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl">Support a program today</h2>
            <p className="mt-4 max-w-xl mx-auto text-white/85">
              Every program is fully community-led and funded by people like you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/donate" className="btn-primary">Donate Now <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/contact" className="btn-on-dark">Partner With Us</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
