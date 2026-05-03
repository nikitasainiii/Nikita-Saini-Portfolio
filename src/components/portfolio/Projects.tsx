import { Section } from "./Section";

const projects = [
  {
    id: "01",
    title: "Predictive Healthcare Resource Optimiser",
    tagline: "Healthcare · Data-Driven Platform",
    duration: "Feb 2025 – Jun 2025",
    description:
      "An intelligent upgrade to a conventional Doctor Appointment Booking System — transforming it from a standard CRUD app into a data-driven resource management platform that forecasts no-shows and dynamically recalibrates clinic schedules to maximise operational efficiency.",
    tech: ["Python", "SQL", "React.js", "Tailwind CSS"],
    github: "https://github.com/nikitasainiii",
    accent: "from-primary/30 to-accent/20",
  },
  {
    id: "02",
    title: "Disaster Response & Relief Analytics Dashboard",
    tagline: "Civic Tech · Real-time Analytics",
    duration: "Mar 2024 – Jul 2024",
    description:
      "An end-to-end web platform that aggregates live environmental data, runs real-time preprocessing pipelines, and delivers predictive visualisations to support critical decisions during natural disasters — including safe-zone identification and resource allocation.",
    tech: ["React.js", "Python", "SQL"],
    github: "https://github.com/nikitasainiii",
    accent: "from-accent/30 to-primary/20",
  },
  {
    id: "03",
    title: "AI/ML Model Vulnerability Scanner",
    tagline: "AI Safety · Web Interface",
    duration: "Sep 2023 – Dec 2023",
    description:
      "A specialised web application that lets developers and data practitioners audit machine learning models — uploading datasets and evaluating them against common bias patterns, failure modes, and security vulnerabilities inherent to ML pipelines.",
    tech: ["Python", "React.js", "Power BI", "Tableau"],
    github: "https://github.com/nikitasainiii",
    accent: "from-primary/25 to-accent/25",
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
              className={`md:col-span-2 relative min-h-[160px] md:min-h-[280px] bg-gradient-to-br ${p.accent} flex items-center justify-center`}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(oklch(0.96 0.005 270 / 0.08) 1px, transparent 1px), linear-gradient(90deg, oklch(0.96 0.005 270 / 0.08) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="relative font-display font-bold text-6xl sm:text-7xl md:text-8xl text-foreground/20">
                {p.id}
              </div>
              <div className="absolute top-4 left-4 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              </div>
            </div>

            {/* Content side */}
            <div className="md:col-span-3 p-6 sm:p-7 md:p-8 flex flex-col justify-between gap-5">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <p className="text-xs uppercase tracking-widest text-primary">{p.tagline}</p>
                  <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-mono">
                    {p.duration}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl sm:text-2xl md:text-3xl mb-3 leading-tight">
                  {p.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                  {p.description}
                </p>
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
