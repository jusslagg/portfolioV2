"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks } from "../data/content";

const directContacts = [
  { label: "Tel", value: "+54 9 11 2386 1546", href: "tel:+5491123861546" },
  { label: "Email", value: "lagg312@gmail.com", href: "mailto:lagg312@gmail.com" },
  {
    label: "LinkedIn",
    value: "/jesusgilgonzalez",
    href: "https://www.linkedin.com/in/jesusgilgonzalez/",
    external: true,
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || "No pudimos enviar tu mensaje.");
      }
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (submissionError) {
      console.error(submissionError);
      setError(submissionError.message);
      setStatus("error");
    }
  };
  const isSending = status === "sending";
  const isSent = status === "sent";

  return (
    <section
      id="contact"
      className="relative mt-16 overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-sky-900/20 p-6 shadow-innerGlow sm:mt-20 sm:p-8 md:p-10"
    >
      <div className="grid gap-10 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <p className="text-sm uppercase tracking-[0.5em] text-white/50">Contact</p>
          <h2 className="text-3xl font-semibold text-white">Conectemos ideas</h2>
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-sky-300 focus:outline-none"
          />
          <input
            required
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo"
            className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-sky-300 focus:outline-none"
          />
          <textarea
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Contexto del proyecto"
            rows={4}
            className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-sky-300 focus:outline-none"
          />
          <button
            type="submit"
            data-cursor="focus"
            disabled={isSending}
            className="relative inline-flex w-full items-center justify-center rounded-full bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSending ? "Sending..." : "Send Signal"}
            <AnimatePresence>
              {isSending && (
                <motion.span
                  className="absolute inset-0 rounded-full border border-fuchsia-300/50"
                  initial={{ opacity: 1, scale: 0.6 }}
                  animate={{ opacity: 0, scale: 2 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", repeat: Infinity, repeatDelay: 0.2 }}
                />
              )}
            </AnimatePresence>
          </button>
          {isSent && (
            <p className="text-sm text-sky-200">Recibido. Te respondo en menos de 24h.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-rose-200">
              {error || "No pudimos enviar tu mensaje. Inténtalo de nuevo."}
            </p>
          )}
        </form>
        <div className="space-y-4 rounded-3xl border border-white/15 bg-black/20 p-6 backdrop-blur-2xl">
          <p className="text-sm uppercase tracking-[0.4em] text-white/50">Social signal</p>
          <p className="text-sm text-white/70 sm:text-base">
            Sigue el trabajo diario, wips y experimentos visuales en redes.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Contacto directo</p>
            <ul className="mt-3 space-y-2">
              {directContacts.map(({ label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-black/20 px-3 py-2 text-white/80 transition hover:border-white/40"
                  >
                    <span className="text-xs uppercase tracking-[0.3em] text-white/50">{label}</span>
                    <span className="font-semibold">{value}</span>
                  </a>
                </li>
              ))}
              <li className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-black/20 px-3 py-2 text-white/70">
                <span className="text-xs uppercase tracking-[0.3em] text-white/50">Ubicación</span>
                <span className="font-semibold text-white/80">CABA, Argentina</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="focus"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-white/40 hover:text-white"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="font-medium">{link.label}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-xs uppercase tracking-[0.3em] text-white/70">
                  {link.icon}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
