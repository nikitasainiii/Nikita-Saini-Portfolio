import { Section } from "./Section";

export function Publications() {
  return (
    <Section id="publications" index="05" label="research & ideas" title="Curiosity, on the record.">
      <div className="grid md:grid-cols-2 gap-5">
        <article className="paper rounded-xl p-7">
          <p className="font-hand text-xl text-accent mb-2">a small invention —</p>
          <h3 className="font-display text-2xl mb-4 leading-snug italic">
            Rain Detector Walking Support Device
          </h3>
          <dl className="text-sm text-foreground/70 space-y-1.5">
            <div className="flex gap-2"><span className="text-muted-foreground w-28">Application no.</span> 202411066069</div>
            <div className="flex gap-2"><span className="text-muted-foreground w-28">Filed with</span> Indian Patent Office</div>
            <div className="flex gap-2"><span className="text-muted-foreground w-28">Year</span> 2024</div>
          </dl>
        </article>

        <article className="stitch rounded-xl p-7">
          <div className="flex items-center gap-2 mb-2">
            <p className="font-hand text-xl text-accent">in the works —</p>
            <span className="pill text-[11px] py-0.5 text-primary border-primary/40">drafting</span>
          </div>
          <h3 className="font-display text-2xl mb-4 leading-snug italic text-foreground/60">
            A research paper, taking shape.
          </h3>
          <p className="text-sm text-foreground/70 italic">
            Expected submission, 2025–2026. More soon.
          </p>
        </article>
      </div>
    </Section>
  );
}
