export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-20 overflow-hidden hero-aura">
      {/* Floating ambient orbs */}
      <div className="pointer-events-none absolute top-1/4 -left-10 sm:left-10 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-primary/15 blur-3xl float" />
      <div
        className="pointer-events-none absolute bottom-10 -right-10 sm:right-10 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-accent/15 blur-3xl float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 md:px-10 w-full text-center">
        <span
          className="section-eyebrow word-in"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Available for full-time roles · 2026
        </span>

        <h1 className="mt-6 sm:mt-8 font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight">
          <span className="word-in inline-block" style={{ animationDelay: "0.15s" }}>
            CS Engineer
          </span>{" "}
          <span className="word-in inline-block text-foreground/85" style={{ animationDelay: "0.3s" }}>
            crafting
          </span>
          <br />
          <span className="word-in inline-block text-gradient" style={{ animationDelay: "0.45s" }}>
            thoughtful software
          </span>
        </h1>

        <p
          className="mt-6 sm:mt-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed word-in"
          style={{ animationDelay: "0.65s" }}
        >
          Hi, I'm <span className="text-foreground font-medium">Nikita Saini</span> —
          a final-year Computer Science student at Manav Rachna University, currently
          interning at <span className="text-foreground font-medium">KPMG India</span>.
          I build responsive web apps and explore data with care.
        </p>

        <div
          className="mt-8 sm:mt-10 flex flex-row flex-wrap items-center justify-center gap-3 reveal in"
        >
          <a href="#projects" className="btn-primary">
            <span aria-hidden>◉</span> View Projects
          </a>
          <a href="#contact" className="btn-ghost">
            <span aria-hidden>✉</span> Get in Touch
          </a>
        </div>

        {/* Stat cards */}
        <div
          className="mt-12 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto reveal in"
        >
          {[
            { icon: "★", value: "300+", label: "Problems Solved" },
            { icon: "◆", value: "3", label: "Internships" },
            { icon: "✦", value: "1", label: "Patent Filed" },
          ].map((s) => (
            <div key={s.label} className="card-glow grain p-4 sm:p-6 text-center">
              <div className="text-primary text-xl sm:text-2xl mb-1 sm:mb-2">{s.icon}</div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-gradient">{s.value}</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 uppercase tracking-widest leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground/70 tracking-widest uppercase flex items-center gap-2">
        <span className="h-px w-6 bg-muted-foreground/40" />
        scroll
        <span className="h-px w-6 bg-muted-foreground/40" />
      </div>
    </section>
  );
}
