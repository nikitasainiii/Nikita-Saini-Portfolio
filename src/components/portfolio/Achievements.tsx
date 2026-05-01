import { Section } from "./Section";

const items = [
  { icon: "▲", title: "Top 20 Finalist — IEEE WIEHACK 5.0", note: "out of 100 teams" },
  { icon: "★", title: "2-Star Coder at CodeChef", note: "300+ problems solved" },
  { icon: "◆", title: "ALGO QUEEN Contest", note: "competed among 500+ participants" },
  { icon: "◉", title: "Webmaster, IEEE MRU", note: "managed technical operations for the chapter" },
  { icon: "▣", title: "Execom Member, Coding Club MRU", note: "organised 10+ events · participation +30%" },
];

const certs = [
  { title: "Data Structures & Algorithms using Python", issuer: "Infosys Springboard" },
  { title: "A Quick Start Guide to Programming in Python", issuer: "LinkedIn Learning" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp" },
  { title: "Security Risks in AI and Machine Learning", issuer: "Certified" },
];

export function Achievements() {
  return (
    <Section id="achievements" index="06" label="achievements" title="Highlights & recognition.">
      <ul className="space-y-px">
        {items.map((it, i) => (
          <li
            key={i}
            className="group grid grid-cols-[28px_36px_1fr_auto_20px] items-center gap-3 md:gap-5 py-5 border-b border-border last:border-0 hover:bg-foreground/[0.02] hover:pl-3 transition-all duration-300"
          >
            <span className="font-mono text-[10px] text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-primary text-lg">{it.icon}</span>
            <p className="font-display text-base md:text-lg">{it.title}</p>
            <p className="font-mono text-[11px] text-muted-foreground hidden md:block">{it.note}</p>
            <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </li>
        ))}
      </ul>

      <div className="mt-16">
        <p className="font-mono text-xs text-primary mb-6 flex items-center gap-2">
          <span>[06.1]</span>
          <span className="h-px w-8 bg-primary/50" />
          <span className="uppercase tracking-widest">certifications</span>
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {certs.map((c) => (
            <div key={c.title} className="crosshair border border-border p-4 bg-card hover:border-primary/50 transition-colors">
              <p className="text-sm font-medium leading-snug">{c.title}</p>
              <p className="font-mono text-[10px] text-muted-foreground mt-1.5 uppercase tracking-widest">
                ▸ {c.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
