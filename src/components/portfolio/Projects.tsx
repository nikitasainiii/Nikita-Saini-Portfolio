import { Section } from "./Section";

const projects = [
  {
    id: "001",
    title: "Doctor Appointment Booking System",
    description:
      "A responsive web platform enabling patients to browse available doctor slots and submit appointment requests online, replacing manual scheduling workflows.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/nikitasainiii",
  },
  {
    id: "002",
    title: "E-Commerce Website — Elomelo",
    description:
      "A fully responsive shopping interface with product browsing, cart management, and optimised frontend performance designed for seamless user navigation.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/nikitasainiii",
  },
];

export function Projects() {
  return (
    <Section id="projects" index="03" label="projects/" title="Selected work.">
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="crosshair group relative bg-card border border-border p-7 hover:border-primary/60 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
                {`// ${p.id}`}
              </span>
              <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                ● live
              </span>
            </div>
            <h3 className="font-display text-xl mb-3 leading-snug">{p.title}</h3>
            <p className="text-sm text-foreground/70 leading-relaxed mb-5">{p.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {p.tech.map((t) => (
                <span key={t} className="tag-mono text-muted-foreground border border-border px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 font-mono text-xs">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="nav-link inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
              >
                $ github <span aria-hidden>↗</span>
              </a>
              <span className="text-muted-foreground/60">|</span>
              <span className="text-muted-foreground">demo: pending</span>
            </div>
          </article>
        ))}

        {/* Placeholder */}
        <article className="sm:col-span-2 border border-dashed border-border p-7 flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">
              {"// status: WIP — building in progress"}
            </p>
            <p className="text-foreground/70">
              New projects exploring full-stack apps and ML-assisted tools — shipping through 2026.
            </p>
          </div>
          <div className="font-mono text-3xl text-primary/40">{"</>"}</div>
        </article>
      </div>
    </Section>
  );
}
