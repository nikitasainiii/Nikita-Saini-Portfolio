export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Soft sun behind name */}
      <div
        className="pointer-events-none absolute top-1/3 -left-20 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.13 80 / 0.55), transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-10 right-0 h-[360px] w-[360px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.66 0.13 45 / 0.35), transparent 65%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 w-full">
        <p
          className="font-hand text-2xl md:text-3xl text-accent mb-4 word-in"
          style={{ animationDelay: "0.1s" }}
        >
          hello, I'm —
        </p>

        <h1 className="font-display text-6xl sm:text-7xl md:text-[8.5rem] leading-[0.95] font-normal">
          <span className="word-in inline-block italic" style={{ animationDelay: "0.2s" }}>
            Nikita
          </span>{" "}
          <span className="word-in inline-block" style={{ animationDelay: "0.35s" }}>
            Saini.
          </span>
        </h1>

        <p
          className="mt-8 max-w-2xl text-lg md:text-2xl text-foreground/80 leading-snug word-in"
          style={{ animationDelay: "0.7s" }}
        >
          A final-year computer science student writing software with{" "}
          <span className="ink-underline">care</span>, curiosity and a quiet love for{" "}
          <span className="italic font-display">good design</span>.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center gap-3 word-in"
          style={{ animationDelay: "1s" }}
        >
          <span className="pill">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Currently at KPMG India
          </span>
          <span className="pill">
            <span>📍</span> Gurugram · open worldwide
          </span>
          <span className="pill">
            <span>🎓</span> Class of 2026
          </span>
        </div>

        <div
          className="mt-12 flex flex-wrap gap-4 word-in"
          style={{ animationDelay: "1.2s" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 rounded-full text-sm hover:bg-primary transition-colors"
          >
            <span>See my work</span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="/ResumeNikita.pdf"
            download
            className="inline-flex items-center gap-3 border border-foreground/30 hover:border-accent hover:text-accent px-6 py-3 rounded-full text-sm transition-colors"
          >
            <span>Download résumé</span>
            <span aria-hidden>↓</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-hand text-xl text-muted-foreground flex items-center gap-3">
        <span className="h-px w-8 bg-muted-foreground/60" />
        scroll, slowly
        <span className="h-px w-8 bg-muted-foreground/60" />
      </div>
    </section>
  );
}
