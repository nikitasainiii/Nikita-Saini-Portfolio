import { ReactNode } from "react";

export function Section({
  id,
  index,
  label,
  title,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 md:py-32 border-t border-border/70">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 mb-14">
          <div className="md:col-span-4 reveal">
            <p className="font-hand text-2xl text-accent mb-2 leading-none">— {label}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              chapter {index}
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] italic">
              {title}
            </h2>
          </div>
          <div className="md:col-span-8 reveal">{children}</div>
        </div>
      </div>
    </section>
  );
}
