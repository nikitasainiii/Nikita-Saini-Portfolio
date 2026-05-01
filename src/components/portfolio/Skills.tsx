import { Section } from "./Section";

const groups = [
  { label: "Languages", items: ["C/C++", "Python", "JavaScript"] },
  { label: "Web", items: ["React.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS"] },
  { label: "Data & DB", items: ["SQL", "Tableau", "PowerBI"] },
  { label: "Tools", items: ["Git", "GitHub", "VS Code", "MS Office"] },
  { label: "CS Fundamentals", items: ["OOP", "OS", "CN", "DBMS"] },
];

export function Skills() {
  return (
    <Section id="skills" label="04 — Skills" title="Tools of the craft.">
      <div className="space-y-8">
        {groups.map((g) => (
          <div key={g.label} className="grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-4 items-start">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground pt-2">{g.label}</p>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="text-sm bg-foreground/[0.03] border border-border px-3.5 py-1.5 rounded-full hover:border-primary hover:text-primary transition-colors"
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
