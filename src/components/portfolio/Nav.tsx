import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#publications", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/75 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-base sm:text-lg shrink-0">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm">
            N
          </span>
          <span>Nikita S.</span>
        </Link>
        <ul className="hidden lg:flex items-center gap-7 text-sm text-foreground/70">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="/ResumeNikita.pdf" download className="btn-ghost !py-2 !px-3 sm:!px-4 text-xs sm:text-sm">
            <span aria-hidden>↓</span> <span className="hidden sm:inline">Resume</span>
          </a>
          <a href="#projects" className="btn-primary !py-2 !px-3 sm:!px-4 text-xs sm:text-sm">
            <span aria-hidden>◉</span> <span className="hidden sm:inline">View Work</span><span className="sm:hidden">Work</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
