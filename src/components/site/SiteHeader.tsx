import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="grid h-11 w-11 place-items-center rounded-2xl gradient-hero text-primary-foreground font-display font-extrabold text-lg shadow-card">
            TL
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display font-extrabold text-base text-foreground">
              Tumaini Letu
            </span>
            <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground font-semibold">
              Nshamba · Tanzania
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm font-semibold text-foreground/75 hover:text-primary transition-colors rounded-full"
              activeProps={{ className: "!text-primary bg-primary-soft" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/donate" className="btn-primary text-sm">
            <Heart className="h-4 w-4" strokeWidth={2.5} />
            Donate
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden grid h-11 w-11 place-items-center rounded-full bg-surface border border-border"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-x py-6 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-base font-semibold text-foreground rounded-xl hover:bg-surface"
                activeProps={{ className: "!text-primary bg-primary-soft" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3"
            >
              <Heart className="h-4 w-4" strokeWidth={2.5} /> Donate Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
