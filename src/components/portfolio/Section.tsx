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
    <section id={id} className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16">
          <div className="md:col-span-4 reveal">
            <p className="font-mono text-xs text-primary mb-3 flex items-center gap-2">
              <span>[{index}]</span>
              <span className="h-px w-8 bg-primary/50" />
              <span className="uppercase tracking-widest">{label}</span>
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">{title}</h2>
          </div>
          <div className="md:col-span-8 reveal">{children}</div>
        </div>
      </div>
    </section>
  );
}
