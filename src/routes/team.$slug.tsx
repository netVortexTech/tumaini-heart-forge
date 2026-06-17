import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Linkedin, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { TEAM, getTeamMember } from "@/lib/team";

export const Route = createFileRoute("/team/$slug")({
  loader: ({ params }) => {
    const member = getTeamMember(params.slug);
    if (!member) throw notFound();
    return { member };
  },
  head: ({ loaderData }) => {
    const m = loaderData?.member;
    const title = m ? `${m.name} — ${m.role} · Tumaini Letu` : "Team — Tumaini Letu";
    const description = m ? m.bio.slice(0, 155) : "Meet the Tumaini Letu team.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: TeamMemberPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-x py-32 text-center">
        <h1 className="font-display text-4xl">Team member not found</h1>
        <Link to="/about" className="btn-primary mt-8 inline-flex">Back to About</Link>
      </div>
    </SiteLayout>
  ),
});

function TeamMemberPage() {
  const { member } = Route.useLoaderData();
  const initials = member.name.split(" ").map((s: string) => s[0]).slice(0, 2).join("");
  const others = TEAM.filter((m) => m.slug !== member.slug).slice(0, 4);

  return (
    <SiteLayout>
      <section className="gradient-hero text-white pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="container-x">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Back to team
          </Link>
          <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
            <div className="grid h-32 w-32 md:h-40 md:w-40 place-items-center rounded-3xl bg-white/15 backdrop-blur-sm font-display font-extrabold text-4xl md:text-5xl shrink-0">
              {initials}
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.18em] font-bold text-accent mb-3">
                Our Supporting Team
              </p>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
                {member.name}
              </h1>
              <p className="mt-3 text-lg md:text-xl text-white/85">{member.role}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-[1fr_320px] gap-12">
          <Reveal>
            <p className="eyebrow">Biography</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">About {member.name.split(" ")[0]}</h2>
            <div className="mt-6 prose prose-lg max-w-none text-foreground/85 leading-relaxed">
              <p>{member.bio}</p>
            </div>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn Profile
              </a>
            )}
          </Reveal>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="eyebrow-accent"><Users className="h-3 w-3" /> Meet the team</p>
              <ul className="mt-4 space-y-3">
                {others.map((m) => (
                  <li key={m.slug}>
                    <Link
                      to="/team/$slug"
                      params={{ slug: m.slug }}
                      className="block group"
                    >
                      <div className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {m.name}
                      </div>
                      <div className="text-xs text-muted-foreground">{m.role}</div>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline">
                View entire team →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
