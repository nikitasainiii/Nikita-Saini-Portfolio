import { Section } from "./Section";

const items = [
  {
    company: "KPMG India",
    role: "Analyst Intern",
    duration: "Jan 2026 — Present",
    location: "Gurugram",
    bullets: [
      "Contributing to enterprise technology consulting projects, supporting digital transformation deliverables across client-facing workstreams.",
      "Collaborating with cross-functional teams to translate business requirements into structured technical solutions.",
      "Assisting in QA processes, technical documentation, and delivery tracking to meet KPMG's standards for accuracy and compliance.",
    ],
  },
  {
    company: "Tata Technologies",
    role: "Web Developer",
    duration: "Jun 2025 — Aug 2025",
    location: "Gurugram",
    bullets: [
      "Engineered responsive, accessible UI components using HTML5, CSS3, Bootstrap, and JavaScript for an internal web product.",
      "Optimised frontend performance and eliminated cross-browser rendering inconsistencies across Chrome, Firefox, and Edge.",
      "Participated in agile sprint cycles and code reviews within a globally recognised automotive engineering organisation.",
    ],
  },
  {
    company: "Indo Research Services",
    role: "Data Analyst",
    duration: "Jun 2024 — Jul 2024",
    location: "Delhi",
    bullets: [
      "Executed end-to-end data extraction, transformation, and visualisation workflows using SQL, Python (Pandas, NumPy), and Tableau.",
      "Optimised SQL queries — reducing data retrieval time by 30% and accelerating reporting cycles.",
      "Produced structured KPI dashboards and ran exploratory data analysis to surface trends, anomalies, and data quality issues.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" index="02" label="The Journey" title="Work Experience">
      <div className="max-w-4xl mx-auto space-y-5">
        {items.map((item) => (
          <div key={item.company} className="card-glow p-6 sm:p-7 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="font-display font-semibold text-lg sm:text-xl md:text-2xl">{item.company}</h3>
              <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-mono">
                {item.duration}
              </span>
            </div>
            <p className="text-primary text-sm font-medium mb-4">
              {item.role} <span className="text-muted-foreground">· {item.location}</span>
            </p>
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
