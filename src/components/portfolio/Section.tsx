import { ReactNode } from "react";

export function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 md:py-32 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16">
          <div className="md:col-span-4 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{label}</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">{title}</h2>
          </div>
          <div className="md:col-span-8 reveal">{children}</div>
        </div>
      </div>
    </section>
  );
}
