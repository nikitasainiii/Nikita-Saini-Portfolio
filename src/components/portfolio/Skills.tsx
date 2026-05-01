import { Section } from "./Section";

const groups = [
  { key: "languages", items: ["C/C++", "Python", "JavaScript"] },
  { key: "web", items: ["React.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS"] },
  { key: "data_db", items: ["SQL", "Tableau", "PowerBI"] },
  { key: "tools", items: ["Git", "GitHub", "VS Code", "MS Office"] },
  { key: "cs_fundamentals", items: ["OOP", "OS", "CN", "DBMS"] },
];

export function Skills() {
  return (
    <Section id="skills" index="04" label="stack.json" title="Tools of the craft.">
      <div className="font-mono text-sm border border-border bg-card p-6 md:p-8">
        <p className="text-muted-foreground mb-4">{"{"}</p>
        <div className="space-y-5 pl-5">
          {groups.map((g, gi) => (
            <div key={g.key} className="flex flex-col md:flex-row md:items-start gap-3">
              <p className="text-primary md:w-44 flex-shrink-0">
                "{g.key}"<span className="text-muted-foreground">:</span>
              </p>
              <div className="flex flex-wrap gap-1.5 flex-1">
                <span className="text-muted-foreground">[</span>
                {g.items.map((s, i) => (
                  <span key={s} className="text-foreground">
                    "<span className="hover:text-primary cursor-default transition-colors">{s}</span>"
                    {i < g.items.length - 1 && <span className="text-muted-foreground">,</span>}
                  </span>
                ))}
                <span className="text-muted-foreground">]{gi < groups.length - 1 ? "," : ""}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-4">{"}"}</p>
      </div>
    </Section>
  );
}
