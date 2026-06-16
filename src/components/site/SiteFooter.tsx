import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden gradient-hero text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none [background-image:radial-gradient(circle_at_20%_20%,oklch(0.78_0.16_62)_0%,transparent_40%),radial-gradient(circle_at_80%_80%,oklch(0.55_0.13_152)_0%,transparent_45%)]" />

      <div className="container-x relative py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 backdrop-blur-sm font-display font-extrabold">
                TL
              </span>
              <div>
                <div className="font-display font-extrabold text-lg">Tumaini Letu Nshamba</div>
                <div className="text-xs uppercase tracking-widest text-white/70">Hope is Ours · Since 1992</div>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-md">
              A Tanzanian community NGO empowering orphans, vulnerable children
              and women in Kagera Region through education, health, and economic
              opportunity.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/60 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-white/85 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-accent transition-colors">Programs</Link></li>
              <li><Link to="/impact" className="hover:text-accent transition-colors">Our Impact</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/60 mb-4">
              Get Involved
            </h4>
            <ul className="space-y-2.5 text-white/85 text-sm">
              <li><Link to="/donate" className="hover:text-accent transition-colors">Donate</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Volunteer</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Partner With Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Sponsor a Child</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/60 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-white/85 text-sm">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" /> P.O. Box 278, Muleba, Kagera, Tanzania</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" /> +255 755 925 228</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" /> tumainiletuorg@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/15 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Tumaini Letu Nshamba. All rights reserved. Reg. No. 0008843</p>
          <p>Registered NGO · Muleba District · Kagera Region · Tanzania</p>
        </div>
      </div>
    </footer>
  );
}
