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
    <Section id="experience" index="02" label="The Journey" title="Work Experience">
      <div className="max-w-4xl mx-auto space-y-5">
        {items.map((item) => (
          <div key={item.company} className="card-glow p-7 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="font-display font-semibold text-xl md:text-2xl">{item.company}</h3>
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">
                {item.duration}
              </span>
            </div>
            <p className="text-primary text-sm font-medium mb-4">{item.role}</p>
            <ul className="space-y-2 text-foreground/75">
              {item.bullets.map((b, j) => (
                <li key={j} className="flex gap-3">
                  <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
