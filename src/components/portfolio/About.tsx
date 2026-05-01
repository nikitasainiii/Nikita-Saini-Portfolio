import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" index="01" label="about" title="A researcher's precision, a developer's craft.">
      <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
        <p>
          I'm a final-year Computer Science student at Manav Rachna University, currently
          interning at KPMG India. I've had hands-on experience building responsive web
          applications at Tata Technologies and conducting data analysis at Indo Research Services.
        </p>
        <p>
          I'm passionate about full-stack development and the intersection of technology with
          real-world problem-solving.
        </p>

        <div className="flex flex-wrap gap-3 pt-6">
          <span className="inline-flex items-center gap-2 font-mono text-xs bg-foreground/[0.03] border border-border px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">CURRENT:</span>
            <span>intern@kpmg.india · gurugram</span>
          </span>
          <span className="inline-flex items-center gap-2 font-mono text-xs text-primary border border-primary/40 px-3 py-2">
            <span>{"// open to relocation — worldwide"}</span>
          </span>
        </div>
      </div>
    </Section>
  );
}
