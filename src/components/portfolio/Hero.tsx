export function Hero() {
  const tagWords = ["CS Engineer", "·", "Web Developer", "·", "Data Analyst"];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 w-full">
        <p
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 word-in"
          style={{ animationDelay: "0.1s" }}
        >
          Portfolio · 2026
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[1.02] font-medium">
          <span className="word-in inline-block" style={{ animationDelay: "0.2s" }}>Nikita</span>{" "}
          <span className="word-in inline-block" style={{ animationDelay: "0.35s" }}>Saini</span>
          <span className="text-primary word-in inline-block" style={{ animationDelay: "0.5s" }}>.</span>
        </h1>

        <p className="mt-8 text-lg md:text-2xl text-foreground/70 font-light flex flex-wrap gap-x-3 gap-y-1">
          {tagWords.map((w, i) => (
            <span
              key={i}
              className="word-in"
              style={{ animationDelay: `${0.7 + i * 0.08}s` }}
            >
              {w}
            </span>
          ))}
        </p>

        <p
          className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground word-in"
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
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm hover:bg-primary transition-colors"
          >
            View My Work
            <span aria-hidden>→</span>
          </a>
          <a
            href="/ResumeNikita.pdf"
            download
            className="inline-flex items-center gap-2 border border-foreground/30 hover:border-foreground px-6 py-3 rounded-full text-sm transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground tracking-widest uppercase">
        Scroll ↓
      </div>
    </section>
  );
}
