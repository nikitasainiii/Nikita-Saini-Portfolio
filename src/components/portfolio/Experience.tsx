import { Section } from "./Section";

const items = [
  {
    company: "KPMG India",
    role: "Intern",
    duration: "Jan 2026 — Present",
    bullets: [
      "Working on enterprise-level projects within the technology consulting division.",
      "Applying software development and analytical skills in a professional consulting setting.",
    ],
  },
  {
    company: "Tata Technologies",
    role: "Web Developer Intern",
    duration: "Jun 2025 — Aug 2025",
    bullets: [
      "Built responsive UI components using HTML, CSS, Bootstrap, and JavaScript.",
      "Improved frontend performance and ensured cross-browser compatibility with the team.",
    ],
  },
  {
    company: "Indo Research Services",
    role: "Data Analyst Intern",
    duration: "Jun 2024 — Jul 2024",
    bullets: [
      "Ran end-to-end data analysis using SQL, Python, and Tableau.",
      "Optimised SQL queries (-30% retrieval time) and Python preprocessing scripts (-40%).",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" index="02" label="the road so far" title="A few good chapters.">
      <ol className="relative border-l border-border/70 space-y-12 pl-8">
        {items.map((item, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[7px] top-3 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-background" />
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="font-display text-2xl md:text-3xl italic">{item.company}</h3>
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {item.duration}
              </span>
            </div>
            <p className="text-sm text-primary mb-4 italic font-display">{item.role}</p>
            <ul className="space-y-2 text-foreground/75">
              {item.bullets.map((b, j) => (
                <li key={j} className="flex gap-3">
                  <span className="text-accent mt-2 flex-shrink-0">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
