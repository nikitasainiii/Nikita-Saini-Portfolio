import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "stack" },
  { href: "#publications", label: "research" },
  { href: "#contact", label: "contact" },
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
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-mono text-sm tracking-tight flex items-center gap-2">
          <span className="inline-block h-2 w-2 bg-primary" />
          <span>nikita.saini</span>
          <span className="text-primary">/</span>
          <span className="text-muted-foreground">v2026</span>
        </Link>
        <ul className="hidden md:flex items-center gap-7 font-mono text-xs">
          {links.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link text-foreground/70 hover:text-foreground transition-colors">
                <span className="text-primary mr-1">{String(i + 1).padStart(2, "0")}.</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/ResumeNikita.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 font-mono text-xs border border-foreground/30 hover:border-primary hover:text-primary transition-colors px-3 py-2"
        >
          <span>resume.pdf</span>
          <span aria-hidden>↓</span>
        </a>
      </nav>
    </header>
  );
}
