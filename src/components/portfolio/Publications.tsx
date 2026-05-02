import { Section } from "./Section";

export function Publications() {
  return (
    <Section id="publications" index="05" label="Research" title="Publications & Patents">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
        <article className="card-glow grain p-7">
          <div className="flex items-center gap-2 mb-3">
            <span className="chip-solid chip text-xs">Patent · Filed</span>
          </div>
          <h3 className="font-display font-semibold text-xl mb-4 leading-snug">
            Rain Detector Walking Support Device
          </h3>
          <p className="text-foreground/70 mb-5 text-sm leading-relaxed">
            An assistive walking device that detects rain conditions to support visually
            impaired and elderly users.
          </p>
          <dl className="text-sm text-muted-foreground space-y-1.5 font-mono">
            <div className="flex gap-2"><span className="w-32 text-foreground/60">Application no.</span> 202411066069</div>
            <div className="flex gap-2"><span className="w-32 text-foreground/60">Authority</span> Indian Patent Office</div>
            <div className="flex gap-2"><span className="w-32 text-foreground/60">Year</span> 2024</div>
          </dl>
        </article>

        <article className="card-glow grain p-7 border-dashed">
          <div className="flex items-center gap-2 mb-3">
            <span className="chip text-xs">Research Paper · Drafting</span>
          </div>
          <h3 className="font-display font-semibold text-xl mb-4 leading-snug text-foreground/60">
            A research paper, taking shape
          </h3>
          <p className="text-foreground/70 text-sm leading-relaxed">
            Currently writing — expected submission 2025–2026. More details to follow.
          </p>
        </article>
      </div>
    </Section>
  );
}
