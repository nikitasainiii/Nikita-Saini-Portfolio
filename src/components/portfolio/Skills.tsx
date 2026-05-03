import { Section } from "./Section";

const groups = [
  { key: "Programming", icon: "▲", items: ["C/C++", "Python", "JavaScript"] },
  { key: "Web Development", icon: "◆", items: ["React.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS"] },
  { key: "Data & Databases", icon: "◉", items: ["SQL", "Tableau", "Power BI"] },
  { key: "Tools", icon: "✦", items: ["Git", "GitHub", "VS Code", "MS Office"] },
  { key: "CS Foundations", icon: "❖", items: ["OOP", "Operating Systems", "Networks", "DBMS"] },
];

export function Skills() {
  return (
    <Section id="skills" index="04" label="Toolkit" title="Technical Skills">
      <div className="max-w-5xl mx-auto space-y-4">
        {groups.map((g) => (
          <div key={g.key} className="card-glow p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary text-lg">{g.icon}</span>
              <h3 className="font-display font-semibold text-lg">{g.key}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="chip-solid chip">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
