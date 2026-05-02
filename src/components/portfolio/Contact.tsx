import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio enquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`);
    window.location.href = `mailto:saininikita711@gmail.com?subject=${subject}&body=${body}`;
    setStatus("ok");
  };

  return (
    <section id="contact" className="py-32 border-t border-border/70">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center reveal">
        <p className="font-hand text-2xl text-accent mb-2">— say hello</p>
        <h2 className="font-display text-5xl md:text-7xl leading-tight italic mb-6">
          Let's make something <span className="ink-underline">good</span>.
        </h2>
        <p className="text-lg text-foreground/70 mb-12 max-w-xl mx-auto">
          A project, an opportunity, or just a chat about design and engineering — my inbox is open.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          <a href="mailto:saininikita711@gmail.com" className="pill hover:border-accent hover:text-accent transition-colors">
            ✉ saininikita711@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/saininikita711" target="_blank" rel="noreferrer" className="pill hover:border-accent hover:text-accent transition-colors">
            in · LinkedIn
          </a>
          <a href="https://github.com/nikitasainiii" target="_blank" rel="noreferrer" className="pill hover:border-accent hover:text-accent transition-colors">
            ◉ GitHub
          </a>
        </div>

        <form onSubmit={onSubmit} className="paper text-left space-y-5 rounded-2xl p-8">
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="font-hand text-lg text-accent">your name</span>
              <input
                name="name"
                required
                maxLength={100}
                className="mt-1 w-full bg-transparent border-b border-border focus:border-accent py-2 outline-none transition-colors"
              />
            </label>
            <label className="block">
              <span className="font-hand text-lg text-accent">your email</span>
              <input
                name="email"
                type="email"
                required
                maxLength={255}
                className="mt-1 w-full bg-transparent border-b border-border focus:border-accent py-2 outline-none transition-colors"
              />
            </label>
          </div>
          <label className="block">
            <span className="font-hand text-lg text-accent">a few words</span>
            <textarea
              name="message"
              required
              maxLength={1000}
              rows={4}
              className="mt-1 w-full bg-transparent border-b border-border focus:border-accent py-2 outline-none transition-colors resize-none"
            />
          </label>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm hover:bg-primary transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "sending…" : "send message"} <span aria-hidden>→</span>
          </button>
        </form>
      </div>

      <footer className="mt-24 border-t border-border/60 pt-8">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-wrap justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-hand text-base">© 2026 Nikita Saini · made with care</p>
          <p className="italic">Manav Rachna University · Class of '26</p>
        </div>
      </footer>
    </section>
  );
}
