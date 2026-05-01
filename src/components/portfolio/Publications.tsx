import { Section } from "./Section";

export function Publications() {
  return (
    <Section id="publications" index="05" label="research/" title="Research & innovation.">
      <div className="grid md:grid-cols-2 gap-5">
        <article className="crosshair border border-border p-7 bg-card">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">
            {"// patent · status: filed"}
          </p>
          <h3 className="font-display text-xl mb-4 leading-snug italic">
            Rain Detector Walking Support Device
          </h3>
          <dl className="font-mono text-xs text-foreground/70 space-y-1.5">
            <div className="flex gap-2"><span className="text-muted-foreground w-20">app_no:</span> 202411066069</div>
            <div className="flex gap-2"><span className="text-muted-foreground w-20">authority:</span> Indian Patent Office</div>
            <div className="flex gap-2"><span className="text-muted-foreground w-20">filed:</span> 2024</div>
          </dl>
        </article>

        <article className="border border-dashed border-border p-7">
          <div className="flex items-center gap-2 mb-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
              {"// research_paper"}
            </p>
            <span className="font-mono text-[9px] uppercase tracking-widest bg-primary/10 text-primary px-2 py-0.5 border border-primary/30">
              drafting
            </span>
          </div>
          <h3 className="font-display text-xl mb-4 leading-snug italic text-foreground/60">
            [title coming soon]
          </h3>
          <p className="font-mono text-xs text-foreground/70">
            $ status: writing — expected submission 2025–2026
          </p>
        </article>
      </div>
    </Section>
  );
}
