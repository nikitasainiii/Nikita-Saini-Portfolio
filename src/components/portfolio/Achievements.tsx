import { Section } from "./Section";

const items = [
  { icon: "🏆", title: "Top 20 Finalist — IEEE WIEHACK 5.0", note: "out of 100 teams" },
  { icon: "⭐", title: "2-Star Coder at CodeChef", note: "300+ problems solved" },
  { icon: "👑", title: "ALGO QUEEN Contest", note: "Competed among 500+ participants" },
  { icon: "🌐", title: "Webmaster, IEEE MRU", note: "Managed technical operations for the chapter" },
  { icon: "🎓", title: "Execom Member, Coding Club MRU", note: "Organised 10+ events, boosted participation by 30%" },
];

const certs = [
  { title: "Data Structures & Algorithms using Python", issuer: "Infosys Springboard" },
  { title: "A Quick Start Guide to Programming in Python", issuer: "LinkedIn Learning" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp" },
  { title: "Security Risks in AI and Machine Learning", issuer: "Certified" },
];

export function Achievements() {
  return (
    <Section id="achievements" label="06 — Achievements" title="Highlights & recognition.">
      <ul className="space-y-px">
        {items.map((it, i) => (
          <li
            key={i}
            className="group flex items-center gap-5 py-5 border-b border-border last:border-0 hover:pl-3 transition-all duration-300"
          >
            <span className="text-2xl">{it.icon}</span>
            <div className="flex-1 flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="font-display text-lg">{it.title}</p>
              <p className="text-sm text-muted-foreground">{it.note}</p>
            </div>
            <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </li>
        ))}
      </ul>

      <div className="mt-16">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Certifications</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {certs.map((c) => (
            <div key={c.title} className="border border-border rounded-md p-4 bg-foreground/[0.02]">
              <p className="text-sm font-medium leading-snug">{c.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{c.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
