import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "work" },
  { href: "#skills", label: "toolkit" },
  { href: "#publications", label: "research" },
  { href: "#contact", label: "say hello" },
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
          ? "bg-background/85 backdrop-blur-md border-b border-border/70"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-display italic text-xl tracking-tight flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          nikita saini
        </Link>
        <ul className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link text-foreground/70 hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/ResumeNikita.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 text-sm rounded-full border border-foreground/25 hover:border-accent hover:text-accent transition-colors px-4 py-2"
        >
          <span>résumé</span>
          <span aria-hidden>↓</span>
        </a>
      </nav>
    </header>
  );
}
