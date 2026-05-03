import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" index="01" label="About Me" title="A maker, a quiet thinker">
      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-6 md:gap-8 items-start">
        <div className="md:col-span-3 space-y-4 sm:space-y-5 text-base md:text-lg text-foreground/75 leading-relaxed">
          <p>
            Final-year <span className="text-foreground font-medium">BTech CSE</span> student at
            Manav Rachna University, specialising in Full-Stack Web Development and Data Analytics.
            I've built across <span className="text-foreground font-medium">KPMG India</span>,
            <span className="text-foreground font-medium"> Tata Technologies</span>, and
            <span className="text-foreground font-medium"> Indo Research Services</span> —
            shipping responsive UIs, optimising SQL queries by 30%, and turning research data into
            usable Tableau dashboards.
          </p>
          <p>
            Beyond internships, I've built end-to-end web systems independently and authored a
            filed patent. Top 20 finalist at IEEE WIEHACK 5.0, 2-Star CodeChef coder with
            300+ problems solved, and Webmaster at IEEE MRU.
          </p>
        </div>
        <div className="md:col-span-2 space-y-3">
          <div className="card-glow p-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Now</p>
            <p className="font-medium">Analyst Intern · KPMG India</p>
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
