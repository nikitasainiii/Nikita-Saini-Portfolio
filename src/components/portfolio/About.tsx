import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" label="01 — About" title="A researcher's precision, a developer's craft.">
      <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
        <p>
          I'm a final-year Computer Science student at Manav Rachna University, currently
          interning at KPMG India. I've had hands-on experience building responsive web
          applications at Tata Technologies and conducting data analysis at Indo Research Services.
        </p>
        <p>
          I'm passionate about full-stack development and the intersection of technology with
          real-world problem-solving.
        </p>

        <div className="flex flex-wrap gap-3 pt-4">
          <span className="inline-flex items-center gap-2 text-sm bg-foreground/5 border border-border px-4 py-2 rounded-full">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Currently · Intern @ KPMG India — Gurugram
          </span>
          <span className="inline-flex items-center gap-2 text-sm bg-primary/10 text-primary border border-primary/30 px-4 py-2 rounded-full">
            ✦ Willing to relocate — open to opportunities worldwide
          </span>
        </div>
      </div>
    </Section>
  );
}
