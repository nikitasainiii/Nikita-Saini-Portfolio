import { Section } from "./Section";

export function Publications() {
  return (
    <Section id="publications" label="05 — Publications & Patents" title="Research & innovation.">
      <div className="grid md:grid-cols-2 gap-5">
        <article className="border border-border rounded-lg p-7 bg-foreground/[0.02]">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Patent · Filed</p>
          <h3 className="font-display text-xl mb-3 leading-snug italic">
            Rain Detector Walking Support Device
          </h3>
          <dl className="text-sm text-foreground/70 space-y-1">
            <div><span className="text-muted-foreground">Application No.</span> 202411066069</div>
            <div><span className="text-muted-foreground">Authority</span> Indian Patent Office</div>
            <div><span className="text-muted-foreground">Filed</span> 2024</div>
          </dl>
        </article>

        <article className="border border-dashed border-border rounded-lg p-7">
          <div className="flex items-center gap-2 mb-3">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Research Paper</p>
            <span className="text-[10px] uppercase tracking-widest bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              Drafting
            </span>
          </div>
          <h3 className="font-display text-xl mb-3 leading-snug italic text-foreground/60">
            [Title coming soon]
          </h3>
          <p className="text-sm text-foreground/70">
            Currently being written — expected submission 2025–2026.
          </p>
        </article>
      </div>
    </Section>
  );
}
