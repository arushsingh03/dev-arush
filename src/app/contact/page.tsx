"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Pickaxe,
} from "lucide-react";
import Nav from "../components/Nav";

const CONTACT = {
  email: "arushsingh1803@gmail.com",
  phone: "+91 93693-26968",
  location: "Kanpur, India",
  github: "https://github.com/arushsingh03",
  linkedin: "https://www.linkedin.com/in/arushsingh03/",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <Nav />

      <section className="relative overflow-hidden">
        <div className="relative px-6 sm:px-12 lg:px-24 py-20 lg:py-28 flex flex-col items-center justify-center text-center mx-auto">
          <div className="text-center mb-12 relative">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 tracking-tight leading-none relative z-10"
            >
              LET&apos;S BUILD
            </motion.h1>

            <div className="absolute top-[30px] right-[80px] translate-x-8 -translate-y-4 text-4xl md:text-6xl z-30">
              <Pickaxe className="w-[50px] h-[50px] text-blue-300 select-none pointer-events-none" />
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500 leading-none relative font-exulta z-30"
            >
              SOMETHING TOGETHER
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-white/70 text-lg relative z-30"
          >
            Want to work together or have a question? Drop a message I&apos;ll get
            back fast.
          </motion.p>
        </div>
      </section>

      <section className="relative px-6 sm:px-12 lg:px-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          <aside className="lg:col-span-2">
            <div className="sticky top-6 space-y-6">
              <Card>
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-xl border border-white/10 p-2">
                    <Mail className="size-5 text-blue-300" aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Email</p>
                    <a
                      className="mt-1 block text-lg hover:underline underline-offset-4"
                      href={`mailto:${CONTACT.email}`}
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-xl border border-white/10 p-2">
                    <Phone className="size-5 text-blue-300" aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Phone</p>
                    <a
                      className="mt-1 block text-lg hover:underline underline-offset-4"
                      href={`tel:${CONTACT.phone}`}
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-xl border border-white/10 p-2">
                    <MapPin className="size-5 text-blue-300" aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Location</p>
                    <p className="mt-1 text-lg">{CONTACT.location}</p>
                  </div>
                </div>
              </Card>

              <Card>
                <p className="text-sm text-white/60">Elsewhere</p>
                <div className="mt-3 flex items-center gap-3">
                  <Social href={CONTACT.github} label="GitHub">
                    <Github className="size-5 text-blue-300" />
                  </Social>
                  <Social href={CONTACT.linkedin} label="LinkedIn">
                    <Linkedin className="size-5 text-blue-300" />
                  </Social>
                </div>
              </Card>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5">
                <p className="text-sm text-white/60">Prefer email?</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white hover:text-black transition"
                >
                  <Mail className="size-4 text-blue-300" /> <span className="text-blue-300">Compose</span>
                </a>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_8px_30px_rgba(0,0,0,0.2)] space-y-5">
      {children}
    </div>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white hover:text-black transition"
    >
      <span className="sr-only">{label}</span>
      {children}
    </Link>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const newErrors: Record<string, string> = {};
    if (!String(data.name || "").trim())
      newErrors.name = "Please enter your name.";
    const email = String(data.email || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email.";
    if (!String(data.message || "").trim())
      newErrors.message = "Please enter a message.";

    if (String(data.company || "")) {
      setStatus("success");
      form.reset();
      return;
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  }

  return (
    <Card>
      <h2 className="text-2xl font-semibold">Send a message</h2>
      <p className="mt-1 text-white/60">I typically reply within a day.</p>

      {status === "success" && (
        <div
          role="status"
          className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-300"
        >
          <CheckCircle2 className="size-5" aria-hidden />
          <p>Thanks! Your message was sent.</p>
        </div>
      )}
      {status === "error" && (
        <div
          role="status"
          className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-300"
        >
          <AlertCircle className="size-5" aria-hidden />
          <p>Something went wrong. Please try again or email me directly.</p>
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={onSubmit}
        noValidate
        className="mt-6 space-y-5"
      >
        <div className="hidden">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" autoComplete="organization" />
        </div>

        <Field label="Your name" error={errors.name} htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputCls}
            placeholder="Arush Singh"
          />
        </Field>

        <Field label="Email" error={errors.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputCls}
            placeholder="you@example.com"
          />
        </Field>

        <Field label="Subject" htmlFor="subject">
          <input
            id="subject"
            name="subject"
            type="text"
            className={inputCls}
            placeholder="Let's collaborate"
          />
        </Field>

        <Field label="Message" error={errors.message} htmlFor="message">
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${inputCls} resize-y min-h-[140px]`}
            placeholder="Tell me about your project, goals, timeline, and budget (if any)."
          />
        </Field>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white text-black px-5 py-3 font-medium transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="size-4 animate-spin " /> Sending
              </>
            ) : (
              <>
                <Mail className="size-4" /> Send message
              </>
            )}
          </button>

          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
          >
            Or email directly
          </a>
        </div>
      </form>
    </Card>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-white/80"
      >
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${htmlFor}-error`} className="mt-2 text-sm text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputCls =
  "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 transition";
