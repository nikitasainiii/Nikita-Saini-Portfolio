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
  { icon: "✉", label: "Email", value: "saininikita711@gmail.com", href: "mailto:saininikita711@gmail.com" },
  { icon: "📍", label: "Location", value: "Gurugram, India" },
  { icon: "◉", label: "GitHub", value: "@nikitasainiii", href: "https://github.com/nikitasainiii" },
  { icon: "in", label: "LinkedIn", value: "@saininikita711", href: "https://www.linkedin.com/in/saininikita711" },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();
    setError(null);
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid input");
      toast.error(parsed.error.issues[0]?.message ?? "Please check your input");
      return;
    }

    setStatus("sending");
    
    try {
      // Use environment variable for the access key, fallback to a placeholder
      // Users can get a free key at https://web3forms.com/
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      
      if (!accessKey) {
        throw new Error("API Key missing. Please check your .env file and restart the server.");
      }

      console.log("Using Access Key (first 5 chars):", accessKey.substring(0, 5));
      
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
          botcheck: fd.get("botcheck"),
        }),
      });

      const result = await response.json();
      console.log("Web3Forms Result:", result);

      if (result.success) {
        setStatus("ok");
        toast.success("Message sent successfully! I'll get back to you soon.");
        form.reset();
      } else {
        setError(result.message || "Something went wrong");
        toast.error(result.message || "Something went wrong");
        setStatus("idle");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("idle");
      setError("Failed to send message. Please try again later.");
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
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{c.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors truncate">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <a href="/ResumeNikita.pdf" download className="btn-primary w-full justify-center">
              <span aria-hidden>↓</span> Download Resume
            </a>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="card-glow p-7 space-y-5">
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
            <div>
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Name</span>
                <input
                  name="name"
                  required
                  maxLength={100}
                  placeholder="Your name"
                  className="mt-2 w-full bg-background/40 border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors"
                />
              </label>
            </div>
            <div>
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  placeholder="your.email@example.com"
                  className="mt-2 w-full bg-background/40 border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors"
                />
              </label>
            </div>
            <div>
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Message</span>
                <textarea
                  name="message"
                  required
                  maxLength={1000}
                  rows={5}
                  placeholder="Tell me about your project or opportunity…"
                  className="mt-2 w-full bg-background/40 border border-border rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors resize-none"
                />
              </label>
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            {status === "ok" && (
              <p className="text-sm text-primary">Message sent! Thank you!</p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full justify-center disabled:opacity-60"
            >
              <span aria-hidden>✉</span>
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
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
