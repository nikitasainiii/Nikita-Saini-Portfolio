import { ReactNode } from "react";

export function Section({
  id,
  index: _index,
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
  // Split title to highlight last word in gradient (reference style)
  const words = title.split(" ");
  const lead = words.slice(0, -1).join(" ");
  const last = words[words.length - 1];

  return (
    <section id={id} className="py-16 sm:py-20 md:py-28 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
        <div className="text-center mb-12 sm:mb-14 md:mb-16 reveal">
          <span className="section-eyebrow">
            <span className="h-1 w-1 rounded-full bg-primary" />
            {label}
          </span>
          <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
            {lead} <span className="text-gradient">{last}</span>
          </h2>
        </div>
        <div className="reveal">{children}</div>
      </div>
    </section>
  );
}
