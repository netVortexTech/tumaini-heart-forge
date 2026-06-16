import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Compass, Award, Users, Calendar } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

import about from "@/assets/women-empowerment.jpg";
import team from "@/assets/gallery-2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Tumaini Letu Nshamba" },
      { name: "description", content: "Our story, vision, mission and the dedicated leadership behind Tumaini Letu Nshamba, a Tanzanian NGO serving Kagera Region since 1992." },
      { property: "og:title", content: "About — Tumaini Letu Nshamba" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const TEAM = [
  { name: "Kachocho R. Timanywa", role: "Executive Director" },
  { name: "Adivela Rugalabamu", role: "Programs Manager" },
  { name: "Leonard Mtapima", role: "Monitoring & Evaluation Coordinator" },
  { name: "Lisberth Kahwa", role: "Finance Manager & Administrator" },
  { name: "Frola Rwantege", role: "Education Coordinator" },
  { name: "Abimeleck Richard", role: "Senior ECD & Child Protection Specialist" },
  { name: "Johansen Rwegoshora", role: "Data Clerk / Field Officer" },
  { name: "Anna Kashabano", role: "Office Secretary" },
  { name: "Shani Katela", role: "Field Officer / Community Mobilizer" },
  { name: "Amon Ngemela", role: "Driver" },
];

const VALUES = [
  "Transparency", "Accountability", "Mutual Respect", "Fair Dealing",
  "Equity & Gender Parity", "Participation", "Respect for Human Rights", "Dedicated Support",
];

const TIMELINE = [
  { y: "1989", t: "Baseline survey identifies the urgent needs of orphans and widows in Kagera." },
  { y: "1992", t: "Tumaini Letu Nshamba is founded as a grassroots response to the HIV/AIDS crisis." },
  { y: "1996", t: "Formally registered as a Tanzanian NGO (Reg. No. 0008843)." },
  { y: "2010", t: "ECD enrollment grows from 1,500 to over 5,400. Board of directors established." },
  { y: "2016", t: "Re-registered and modernised under Tanzania's NGO Act." },
  { y: "Today", t: "20 ECD centers, $4.3M invested, hundreds of thousands of lives touched." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Tumaini Letu"
        title="A community NGO born from courage, sustained by community."
        subtitle="Founded in 1992 in response to the HIV/AIDS crisis, Tumaini Letu Nshamba has spent three decades empowering orphans, vulnerable children and women across Kagera Region, Tanzania."
        image={about}
      />

      {/* STORY */}
      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              From a 1989 baseline study to a national voice for the vulnerable.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-lg text-foreground/85 leading-relaxed">
              <p>
                Tumaini Letu Nshamba — Swahili for "Our Hope" — was
                established in 1992 and registered in 1996 (re-registered in
                2016 under Reg. No. 0008843). Based in Muleba District, Kagera
                Region, we were born in response to the HIV/AIDS crisis and the
                wave of orphans and widows it left behind.
              </p>
              <p>
                Our work began with a 1989 baseline survey highlighting the needs
                of orphans and widows in our community. Today we operate 20 ECD
                centers serving 5,105 children (75% OVC), and run programs like
                HANURA — a savings and credit scheme empowering 300 women
                caregivers.
              </p>
              <p>
                We are active members of <strong>KAPAMU</strong>, <strong>KANGONET</strong> and
                <strong> TANGONET</strong>, and since 2010, are led by a board of directors
                committed to systems strengthening and community ownership.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VMV */}
      <section className="section-pad gradient-soft">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            { Icon: Eye, t: "Vision", d: "A healthier society where women and children realize their full potential.", color: "text-primary bg-primary-soft" },
            { Icon: Target, t: "Mission", d: "Empower communities to fight vulnerability through inclusive, sustainable solutions.", color: "text-secondary bg-secondary/10" },
            { Icon: Compass, t: "Goal", d: "Strengthen community capacity to meet the needs of vulnerable groups, including young children.", color: "text-accent-foreground bg-accent-soft" },
          ].map(({ Icon, t, d, color }, i) => (
            <Reveal key={t} delay={i * 80}>
              <div className="h-full rounded-3xl bg-card border border-border p-8 card-lift">
                <div className={`grid h-14 w-14 place-items-center rounded-2xl ${color}`}>
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="mt-6 font-display font-extrabold text-2xl">{t}</h3>
                <p className="mt-3 text-foreground/75 leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow-accent">Our Approach</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight text-balance">
              Community first. Always.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We collaborate with local government, NGOs and stakeholders.
              Our model is built on three principles:
            </p>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { t: "Beneficiary Participation", d: "Communities identify problems and co-design solutions from day one." },
              { t: "Capacity Building", d: "Training, mentorship and ongoing technical support for sustained impact." },
              { t: "Local Ownership", d: "Every program is designed to be sustained by the community long-term." },
            ].map((it, i) => (
              <Reveal key={it.t} delay={i * 80}>
                <div className="rounded-3xl bg-surface border border-border p-7 h-full">
                  <div className="font-display font-extrabold text-5xl text-primary/20">0{i + 1}</div>
                  <h3 className="mt-2 font-display font-extrabold text-xl">{it.t}</h3>
                  <p className="mt-3 text-foreground/75 leading-relaxed">{it.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-pad gradient-soft">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Organizational Evolution</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight text-balance">
              Over 33 years of evolving with our community.
            </h2>
          </Reveal>
          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-10">
              {TIMELINE.map((step, i) => (
                <Reveal key={step.y} delay={i * 60}>
                  <div className={`relative grid md:grid-cols-2 gap-6 items-center ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
                    <div className={`${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12 md:[direction:ltr]"}`}>
                      <div className="font-display font-extrabold text-5xl text-accent">{step.y}</div>
                    </div>
                    <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:[direction:ltr] md:text-right"}`}>
                      <div className="rounded-2xl bg-card border border-border p-5 shadow-card">
                        <p className="text-foreground/85 leading-relaxed">{step.t}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 grid h-3 w-3 place-items-center">
                      <span className="h-3 w-3 rounded-full gradient-warm shadow-cta" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
          <Reveal>
            <img src={team} alt="Team and community members" width={1024} height={768} loading="lazy" className="rounded-3xl object-cover w-full aspect-[4/3] shadow-card-hover" />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow-accent">Core Values</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight text-balance">
              The principles that guide every decision.
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {VALUES.map((v) => (
                <div key={v} className="flex items-center gap-3 rounded-2xl bg-surface border border-border px-4 py-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full gradient-warm text-accent-foreground shrink-0">
                    <Award className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-semibold text-sm text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-pad gradient-soft">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow"><Users className="h-3 w-3" /> Leadership</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              Our supporting team.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              The dedicated professionals leading our programs and operations
              across Muleba District.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 40}>
                <div className="flex items-center gap-4 rounded-2xl bg-card border border-border p-5 card-lift">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl gradient-hero text-white font-display font-extrabold">
                    {m.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-extrabold text-base text-foreground">{m.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{m.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIPS */}
      <section className="py-16">
        <div className="container-x">
          <div className="rounded-3xl border border-border bg-surface p-8 md:p-12">
            <div className="flex items-start gap-4">
              <Calendar className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-extrabold text-2xl">Recognized & networked</h3>
                <p className="mt-3 text-foreground/80 leading-relaxed max-w-3xl">
                  Tumaini Letu is a registered Tanzanian NGO (Reg. No. 0008843)
                  and an active member of KAPAMU (Kagera Partners Against
                  Malnutrition & Underdevelopment), KANGONET (Kagera NGO
                  Network) and TANGONET (Tanzania NGO Network), collaborating
                  with local government and international partners including the
                  Better Way Foundation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
