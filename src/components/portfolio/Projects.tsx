import { Section } from "./Section";

const projects = [
  {
    id: "01",
    title: "Doctor Appointment Booking",
    description:
      "A responsive web platform that lets patients browse doctor availability and request appointments online — replacing slow manual scheduling.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/nikitasainiii",
  },
  {
    id: "02",
    title: "Elomelo — E-commerce",
    description:
      "A fully responsive shopping experience with product browsing, cart management, and a frontend tuned for smooth, distraction-free navigation.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/nikitasainiii",
  },
];

export function Projects() {
  return (
    <Section id="projects" index="03" label="selected work" title="Things I've made with care.">
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="paper group relative rounded-xl p-7 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-hand text-xl text-accent">no. {p.id}</span>
              <span className="pill text-[11px] py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                live
              </span>
            </div>
            <h3 className="font-display text-2xl mb-3 leading-snug italic">{p.title}</h3>
            <p className="text-foreground/70 leading-relaxed mb-5">{p.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {p.tech.map((t) => (
                <span key={t} className="pill text-xs py-1 text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="nav-link inline-flex items-center gap-1.5 text-foreground hover:text-accent transition-colors"
              >
                view on github <span aria-hidden>↗</span>
              </a>
              <span className="text-muted-foreground/60">·</span>
              <span className="text-muted-foreground italic">demo soon</span>
            </div>
          </article>
        ))}

        {/* Placeholder */}
        <article className="sm:col-span-2 stitch rounded-xl p-7 flex items-center justify-between gap-4">
          <div>
            <p className="font-hand text-xl text-accent mb-1">currently brewing —</p>
            <p className="text-foreground/75">
              New projects exploring full-stack apps and ML-assisted tools, shipping through 2026.
            </p>
          </div>
          <div className="font-display text-4xl italic text-primary/40 drift">✿</div>
        </article>
      </div>
    </Section>
  );
}
