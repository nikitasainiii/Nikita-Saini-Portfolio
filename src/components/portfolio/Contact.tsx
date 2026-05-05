import { useState } from "react";
import { z } from "zod";
import { Section } from "./Section";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const contacts = [
  {
    icon: "✉",
    label: "Email",
    value: "saininikita711@gmail.com",
    href: "mailto:saininikita711@gmail.com",
  },
  { icon: "📍", label: "Location", value: "Gurugram, India" },
  { icon: "◉", label: "GitHub", value: "@nikitasainiii", href: "https://github.com/nikitasainiii" },
  {
    icon: "in",
    label: "LinkedIn",
    value: "@saininikita711",
    href: "https://www.linkedin.com/in/saininikita711",
  },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();
    setErrorMsg(null);

    const fd = new FormData(form);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });

    if (!parsed.success) {
      const msg = parsed.error.issues[0]?.message ?? "Invalid input";
      setErrorMsg(msg);
      toast.error(msg);
      return;
    }

    setStatus("sending");

    try {
      // Get the access key from environment variable
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error("Contact form is not configured. Please set VITE_WEB3FORMS_ACCESS_KEY.");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: parsed.data.name,
          email: parsed.data.email,
          message: parsed.data.message,
          subject: `Portfolio enquiry from ${parsed.data.name}`,
          from_name: parsed.data.name,
          replyto: parsed.data.email,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setStatus("ok");
        toast.success("Message sent! I'll get back to you soon.");
        form.reset();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      const msg = err instanceof Error ? err.message : "Failed to send message. Please try again.";
      setErrorMsg(msg);
      setStatus("error");
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <Section id="contact" index="07" label="Get in Touch" title="Let's build something good">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          {/* Contact info */}
          <div className="flex flex-col gap-3 h-full">
            <div className="flex flex-col gap-3 flex-1">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href ?? "#"}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="card-glow p-5 flex items-center gap-4 group flex-1"
                >
                  <span className="h-11 w-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center text-lg shrink-0">
                    {c.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">
                      {c.label}
                    </p>
                    <p className="font-medium group-hover:text-primary transition-colors truncate">
                      {c.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <a
              href="/ResumeNikita.pdf"
              download="ResumeNikita.pdf"
              className="btn-primary w-full justify-center"
            >
              <span aria-hidden>↓</span> Download Resume
            </a>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="card-glow p-7 space-y-5">
            <div>
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Name
                </span>
                <input
                  name="name"
                  required
                  maxLength={100}
                  placeholder="Your name"
                  disabled={status === "sending"}
                  className="mt-2 w-full bg-background/40 border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors disabled:opacity-60"
                />
              </label>
            </div>
            <div>
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  placeholder="your.email@example.com"
                  disabled={status === "sending"}
                  className="mt-2 w-full bg-background/40 border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors disabled:opacity-60"
                />
              </label>
            </div>
            <div>
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  maxLength={1000}
                  rows={5}
                  placeholder="Tell me about your project or opportunity…"
                  disabled={status === "sending"}
                  className="mt-2 w-full bg-background/40 border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors resize-none disabled:opacity-60"
                />
              </label>
            </div>

            {errorMsg && status !== "ok" && <p className="text-sm text-destructive">{errorMsg}</p>}
            {status === "ok" && (
              <p className="text-sm text-primary font-medium">
                ✓ Message sent! Thank you, I'll be in touch soon.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending" || status === "ok"}
              className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span aria-hidden>✉</span>
              {status === "sending" ? "Sending…" : status === "ok" ? "Sent!" : "Send Message"}
            </button>

            {/* Fallback direct email link */}
            <p className="text-xs text-center text-muted-foreground">
              Or email directly:{" "}
              <a href="mailto:saininikita711@gmail.com" className="text-primary hover:underline">
                saininikita711@gmail.com
              </a>
            </p>
          </form>
        </div>
      </Section>

      <footer className="border-t border-border/60 py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 flex flex-wrap justify-between gap-3 text-xs sm:text-sm text-muted-foreground">
          <p>Made by Nikita Saini</p>
          <p>© 2026 All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
