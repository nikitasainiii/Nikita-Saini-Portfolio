export function Hero() {
  const tagWords = ["CS Engineer", "/", "Web Developer", "/", "Data Analyst"];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-100 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

      {/* Corner technical markers */}
      <div className="absolute top-20 left-6 md:left-10 font-mono text-[10px] text-muted-foreground tracking-widest">
        N 28.4595° · E 77.0266°
      </div>
      <div className="absolute top-20 right-6 md:right-10 font-mono text-[10px] text-muted-foreground tracking-widest">
        STATUS: <span className="text-primary">● ONLINE</span>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 w-full">
        <p
          className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-8 word-in"
          style={{ animationDelay: "0.1s" }}
        >
          {"// portfolio · build 2026.01"}
        </p>

        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[1.02] font-medium">
          <span className="word-in inline-block" style={{ animationDelay: "0.2s" }}>Nikita</span>{" "}
          <span className="word-in inline-block" style={{ animationDelay: "0.35s" }}>Saini</span>
        </h1>

        <p className="mt-6 font-mono text-sm md:text-base text-foreground/60 cursor-blink">
          <span className="text-primary">$</span> whoami
        </p>

        <p className="mt-3 text-lg md:text-2xl text-foreground/80 font-light flex flex-wrap gap-x-3 gap-y-1">
          {tagWords.map((w, i) => (
            <span
              key={i}
              className={`word-in ${w === "/" ? "text-primary" : ""}`}
              style={{ animationDelay: `${0.7 + i * 0.08}s` }}
            >
              {w}
            </span>
          ))}
        </p>

        <p
          className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground word-in border-l-2 border-primary/40 pl-4"
          style={{ animationDelay: "1.2s" }}
        >
          Building thoughtful digital solutions at the intersection of frontend craft and data intelligence.
        </p>

        <div
          className="mt-12 flex flex-wrap gap-4 word-in"
          style={{ animationDelay: "1.4s" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-primary transition-colors"
          >
            <span>View Work</span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="/ResumeNikita.pdf"
            download
            className="inline-flex items-center gap-3 border border-foreground/30 hover:border-primary hover:text-primary px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors"
          >
            <span>Download Resume</span>
            <span aria-hidden>↓</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] text-muted-foreground tracking-widest uppercase flex items-center gap-2">
        <span className="h-px w-8 bg-muted-foreground" />
        scroll
        <span className="h-px w-8 bg-muted-foreground" />
      </div>
    </section>
  );
}
