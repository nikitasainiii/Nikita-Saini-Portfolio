import { Section } from "./Section";

const items = [
  {
    company: "KPMG India",
    role: "Intern",
    duration: "Jan 2026 — Present",
    bullets: [
      "Working on enterprise-level projects within the technology consulting division.",
      "Applying software development and analytical skills in a professional consulting environment.",
    ],
  },
  {
    company: "Tata Technologies",
    role: "Web Developer Intern",
    duration: "Jun 2025 — Aug 2025",
    bullets: [
      "Built responsive UI components using HTML, CSS, Bootstrap, and JavaScript.",
      "Enhanced frontend performance and ensured cross-browser compatibility in collaboration with the dev team.",
    ],
  },
  {
    company: "Indo Research Services",
    role: "Data Analyst Intern",
    duration: "Jun 2024 — Jul 2024",
    bullets: [
      "Executed end-to-end data analysis using SQL, Python, and Tableau.",
      "Optimised SQL queries reducing data retrieval time by 30%; built Python scripts that cut preprocessing time by 40%.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" index="02" label="experience.log" title="Where I've been building.">
      <ol className="relative border-l border-border space-y-12 pl-8">
        {items.map((item, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[5px] top-3 h-2.5 w-2.5 bg-primary ring-4 ring-background" />
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="font-display text-xl md:text-2xl">{item.company}</h3>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {item.duration}
              </span>
            </div>
            <p className="font-mono text-xs text-primary mb-4 uppercase tracking-widest">
              ▸ {item.role}
            </p>
            <ul className="space-y-2 text-foreground/75">
              {item.bullets.map((b, j) => (
                <li key={j} className="flex gap-3">
                  <span className="text-primary font-mono text-sm mt-0.5 flex-shrink-0">{">"}</span>
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
