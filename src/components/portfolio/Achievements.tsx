import { Section } from "./Section";

const items = [
  { icon: "🏆", title: "Top 20 Finalist — IEEE WIEHACK 5.0", note: "out of 100 teams" },
  { icon: "★", title: "2-Star Coder at CodeChef", note: "300+ problems solved" },
  { icon: "👑", title: "ALGO QUEEN Contest", note: "competed among 500+ participants" },
  { icon: "◉", title: "Webmaster, IEEE MRU", note: "led technical operations for the chapter" },
  { icon: "✦", title: "Execom Member, Coding Club MRU", note: "organised 10+ events · participation +30%" },
];

const certs = [
  { title: "Data Structures & Algorithms using Python", issuer: "Infosys Springboard" },
  { title: "A Quick Start Guide to Programming in Python", issuer: "LinkedIn Learning" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp" },
  { title: "Security Risks in AI and Machine Learning", issuer: "Certified" },
];

export function Achievements() {
  return (
    <Section id="achievements" index="06" label="Recognition" title="Achievements & Certifications">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div key={i} className="card-glow grain p-6">
              <div className="text-3xl mb-3">{it.icon}</div>
              <p className="font-display font-semibold text-base leading-snug mb-1">{it.title}</p>
              <p className="text-xs text-muted-foreground">{it.note}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="section-eyebrow mb-5">
            <span className="h-1 w-1 rounded-full bg-primary" />
            Certifications
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {certs.map((c) => (
              <div key={c.title} className="card-glow p-5">
                <p className="font-medium text-sm leading-snug mb-1">{c.title}</p>
                <p className="text-xs text-primary font-mono">▸ {c.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
