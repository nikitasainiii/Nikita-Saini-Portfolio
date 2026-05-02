import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" index="01" label="about" title="A quiet maker, a careful thinker.">
      <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
        <p>
          I'm a final-year Computer Science student at <em>Manav Rachna University</em>,
          currently interning at KPMG India. Along the way I've built responsive web
          applications at Tata Technologies and explored data analysis at Indo Research
          Services.
        </p>
        <p>
          I care about full-stack craft — interfaces that feel calm, code that ages well,
          and the small details that turn a project into something people actually enjoy
          using.
        </p>

        <div className="flex flex-wrap gap-3 pt-4">
          <span className="pill">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Now: intern at KPMG India · Gurugram
          </span>
          <span className="pill text-accent border-accent/40">
            ✦ open to relocation, anywhere
          </span>
        </div>
      </div>
    </Section>
  );
}
