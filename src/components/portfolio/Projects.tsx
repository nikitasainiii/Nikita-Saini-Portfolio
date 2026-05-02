import { Section } from "./Section";

const projects = [
  {
    id: "01",
    title: "Doctor Appointment Booking System",
    tagline: "Healthcare · Web Platform",
    description:
      "A responsive web platform that lets patients browse doctor availability and request appointments online — replacing slow manual scheduling workflows with a clean, accessible interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/nikitasainiii",
    accent: "from-primary/30 to-accent/20",
  },
  {
    id: "02",
    title: "Elomelo — E-commerce Storefront",
    tagline: "Retail · Frontend",
    description:
      "A fully responsive shopping experience with product browsing, cart management, and a frontend tuned for smooth, distraction-free navigation across devices.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/nikitasainiii",
    accent: "from-accent/30 to-primary/20",
  },
];

export function Projects() {
  return (
    <Section id="projects" index="03" label="Featured Work" title="Selected Projects">
      <div className="max-w-5xl mx-auto space-y-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="card-glow grain overflow-hidden grid md:grid-cols-5 gap-0"
          >
            {/* Visual side */}
            <div
              className={`md:col-span-2 relative min-h-[200px] md:min-h-[260px] bg-gradient-to-br ${p.accent} flex items-center justify-center`}
            >
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage:
                  "linear-gradient(oklch(0.96 0.005 270 / 0.08) 1px, transparent 1px), linear-gradient(90deg, oklch(0.96 0.005 270 / 0.08) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }} />
              <div className="relative font-display font-bold text-7xl md:text-8xl text-foreground/20">
                {p.id}
              </div>
              <div className="absolute top-4 left-4 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              </div>
            </div>

            {/* Content side */}
            <div className="md:col-span-3 p-7 md:p-8 flex flex-col justify-between gap-5">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary mb-2">{p.tagline}</p>
                <h3 className="font-display font-semibold text-2xl md:text-3xl mb-3 leading-tight">
                  {p.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{p.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost text-sm py-2 px-4"
                  >
                    <span aria-hidden>◉</span> GitHub
                  </a>
                  <span className="btn-ghost text-sm py-2 px-4 opacity-60 cursor-default">
                    <span aria-hidden>↗</span> Demo soon
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}

        <article className="card-glow grain p-8 text-center border-dashed">
          <p className="section-eyebrow mb-4">
            <span className="h-1 w-1 rounded-full bg-primary animate-pulse" />
            More brewing
          </p>
          <h3 className="font-display font-semibold text-xl mb-2">New work shipping through 2026</h3>
          <p className="text-muted-foreground text-sm">
            Exploring full-stack apps and ML-assisted tools. Stay tuned.
          </p>
        </article>
      </div>
    </Section>
  );
}
