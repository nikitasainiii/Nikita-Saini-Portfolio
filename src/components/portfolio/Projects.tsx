import { Section } from "./Section";

const projects = [
  {
    title: "Doctor Appointment Booking System",
    description:
      "A responsive web platform enabling patients to browse available doctor slots and submit appointment requests online, replacing manual scheduling workflows.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/nikitasainiii",
    demo: null,
  },
  {
    title: "E-Commerce Website — Elomelo",
    description:
      "A fully responsive shopping interface with product browsing, cart management, and optimised frontend performance designed for seamless user navigation.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/nikitasainiii",
    demo: null,
  },
];

export function Projects() {
  return (
    <Section id="projects" label="03 — Projects" title="Selected work.">
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative bg-foreground/[0.02] border border-border rounded-lg p-7 hover:border-primary/50 transition-all duration-500"
          >
            <h3 className="font-display text-xl mb-3 leading-snug">{p.title}</h3>
            <p className="text-sm text-foreground/70 leading-relaxed mb-5">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.map((t) => (
                <span key={t} className="text-xs text-muted-foreground border border-border px-2.5 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3 text-sm">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
              >
                GitHub <span aria-hidden>↗</span>
              </a>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">Live Demo — coming soon</span>
            </div>
          </article>
        ))}

        {/* Placeholder */}
        <article className="sm:col-span-2 border border-dashed border-border rounded-lg p-7 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Work in progress 🔧</p>
            <p className="text-foreground/70">
              New projects exploring full-stack apps and ML-assisted tools — shipping through 2026.
            </p>
          </div>
        </article>
      </div>
    </Section>
  );
}
