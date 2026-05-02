import { Section } from "./Section";

const items = [
  { icon: "✦", title: "Top 20 Finalist — IEEE WIEHACK 5.0", note: "out of 100 teams" },
  { icon: "★", title: "2-Star Coder at CodeChef", note: "300+ problems solved" },
  { icon: "❀", title: "ALGO QUEEN Contest", note: "competed among 500+ participants" },
  { icon: "◐", title: "Webmaster, IEEE MRU", note: "managed technical operations for the chapter" },
  { icon: "✿", title: "Execom Member, Coding Club MRU", note: "organised 10+ events · participation +30%" },
];

const certs = [
  { title: "Data Structures & Algorithms using Python", issuer: "Infosys Springboard" },
  { title: "A Quick Start Guide to Programming in Python", issuer: "LinkedIn Learning" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp" },
  { title: "Security Risks in AI and Machine Learning", issuer: "Certified" },
];

export function Achievements() {
  return (
    <Section id="achievements" index="06" label="little wins" title="Moments worth keeping.">
      <ul className="space-y-px">
        {items.map((it, i) => (
          <li
            key={i}
            className="group grid grid-cols-[28px_28px_1fr_auto] items-center gap-3 md:gap-5 py-5 border-b border-border/60 last:border-0 hover:pl-3 transition-all duration-300"
          >
            <span className="font-mono text-[11px] text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-accent text-xl">{it.icon}</span>
            <p className="font-display italic text-lg md:text-xl">{it.title}</p>
            <p className="text-xs text-muted-foreground hidden md:block italic">{it.note}</p>
          </li>
        ))}
      </ul>

      <div className="mt-14">
        <p className="font-hand text-2xl text-accent mb-5">a few certifications —</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {certs.map((c) => (
            <div key={c.title} className="paper rounded-lg p-4 hover:border-accent/50 transition-colors">
              <p className="text-sm font-medium leading-snug">{c.title}</p>
              <p className="text-xs text-muted-foreground mt-1.5 italic">— {c.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
