import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Youtube, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tumaini Letu Nshamba" },
      { name: "description", content: "Get in touch with Tumaini Letu Nshamba. Our offices are in Muleba District, Kagera Region, Tanzania. Email, phone and contact form available." },
      { property: "og:title", content: "Contact — Tumaini Letu Nshamba" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(2, "Subject required").max(150),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get In Touch"
        title="We'd love to hear from you."
        subtitle="Whether you'd like to partner with us, volunteer, sponsor a child or just say hello — our team in Muleba is ready to respond."
      />

      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-12">
          {/* INFO */}
          <Reveal>
            <p className="eyebrow">Contact Information</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
              Reach our team directly.
            </h2>

            <div className="mt-8 space-y-4">
              {[
                { Icon: MapPin, label: "Address", value: "P.O. Box 278, Muleba, Kagera, Tanzania" },
                { Icon: Phone, label: "Phone", value: "+255 755 925 228", href: "tel:+255755925228" },
                { Icon: Mail, label: "Email", value: "tumainiletuorg@gmail.com", href: "mailto:tumainiletuorg@gmail.com" },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 rounded-2xl bg-surface border border-border p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground">{label}</div>
                    {href ? (
                      <a href={href} className="mt-1 block font-semibold text-foreground hover:text-primary transition-colors break-words">{value}</a>
                    ) : (
                      <div className="mt-1 font-semibold text-foreground break-words">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-3">Follow Us</div>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" aria-label="social link" className="grid h-11 w-11 place-items-center rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-card">
              <iframe
                title="Tumaini Letu location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=31.65%2C-1.85%2C31.85%2C-1.65&layer=mapnik&marker=-1.75,31.75"
                className="w-full h-72 border-0"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal delay={120}>
            <div className="rounded-3xl bg-card border border-border shadow-card-hover p-7 md:p-10">
              <h2 className="font-display font-extrabold text-2xl">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">We typically respond within two business days.</p>

              <form onSubmit={onSubmit} className="mt-8 space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Your name" id="name" error={errors.name}>
                    <input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-2xl border border-border bg-surface px-4 py-3 outline-none focus:border-primary transition-colors" />
                  </Field>
                  <Field label="Email" id="email" error={errors.email}>
                    <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-2xl border border-border bg-surface px-4 py-3 outline-none focus:border-primary transition-colors" />
                  </Field>
                </div>
                <Field label="Subject" id="subject" error={errors.subject}>
                  <input id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full rounded-2xl border border-border bg-surface px-4 py-3 outline-none focus:border-primary transition-colors" />
                </Field>
                <Field label="Message" id="message" error={errors.message}>
                  <textarea id="message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-2xl border border-border bg-surface px-4 py-3 outline-none focus:border-primary transition-colors resize-none" />
                </Field>

                <button type="submit" className="btn-primary w-full !py-4">
                  <Send className="h-4 w-4" /> Send message
                </button>

                {sent && (
                  <div className="rounded-2xl bg-secondary/10 border border-secondary/30 text-secondary p-4 text-sm font-semibold flex items-center gap-2 animate-fade-in">
                    <CheckCircle2 className="h-4 w-4" />
                    Thank you! Your message has been received.
                  </div>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, id, error, children }: { label: string; id: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive font-medium">{error}</p>}
    </div>
  );
}
