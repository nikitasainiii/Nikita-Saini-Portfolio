import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" index="01" label="About Me" title="A maker, a quiet thinker">
      <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-3 space-y-5 text-base md:text-lg text-foreground/75 leading-relaxed">
          <p>
            I'm a final-year Computer Science student at <span className="text-foreground font-medium">Manav Rachna University</span>,
            currently interning at <span className="text-foreground font-medium">KPMG India</span>. Along
            the way I've built responsive web apps at Tata Technologies and explored data
            analysis at Indo Research Services.
          </p>
          <p>
            I care about full-stack craft — interfaces that feel calm, code that ages well,
            and the small details that turn a project into something people enjoy using.
          </p>
        </div>
        <div className="md:col-span-2 space-y-3">
          <div className="card-glow p-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Now</p>
            <p className="font-medium">Intern · KPMG India</p>
            <p className="text-sm text-muted-foreground">Gurugram, IN</p>
          </div>
          <div className="card-glow p-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Education</p>
            <p className="font-medium">B.Tech CSE, Class of 2026</p>
            <p className="text-sm text-muted-foreground">Manav Rachna University</p>
          </div>
          <div className="card-glow p-5 chip-solid !block !rounded-2xl">
            <p className="text-sm">✦ Open to relocation, worldwide</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
