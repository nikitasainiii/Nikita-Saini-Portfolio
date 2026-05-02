import { Section } from "./Section";

const groups = [
  { key: "Languages", items: ["C/C++", "Python", "JavaScript"] },
  { key: "Web", items: ["React.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS"] },
  { key: "Data & DB", items: ["SQL", "Tableau", "Power BI"] },
  { key: "Tools", items: ["Git", "GitHub", "VS Code", "MS Office"] },
  { key: "CS Foundations", items: ["OOP", "Operating Systems", "Networks", "DBMS"] },
];

export function Skills() {
  return (
    <Section id="skills" index="04" label="the toolkit" title="What I reach for.">
      <div className="space-y-7">
        {groups.map((g) => (
          <div key={g.key} className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-6 items-start pb-6 border-b border-border/60 last:border-0">
            <p className="font-display italic text-lg text-primary">{g.key}</p>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="pill hover:border-accent hover:text-accent transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
