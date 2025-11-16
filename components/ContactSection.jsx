"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";

const directContacts = [
  { label: "Teléfono", value: "+54 9 11 2386 1546", href: "tel:+5491123861546" },
  { label: "Email", value: "lagg312@gmail.com", href: "mailto:lagg312@gmail.com" },
  {
    label: "LinkedIn",
    value: "/jesusgilgonzalez",
    href: "https://www.linkedin.com/in/jesusgilgonzalez/",
    external: true,
  },
];

export const ContactSection = () => {
  const handleTilt = useCallback((event) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const rotateY = (x - 0.5) * 16;
    const rotateX = (0.5 - y) * 16;
    card.style.setProperty("--tiltX", `${rotateX}deg`);
    card.style.setProperty("--tiltY", `${rotateY}deg`);
  }, []);

  const resetTilt = useCallback((event) => {
    event.currentTarget.style.setProperty("--tiltX", "0deg");
    event.currentTarget.style.setProperty("--tiltY", "0deg");
  }, []);

  const accentCards = [
    "from-[#5520a2]/70 via-[#1c0f36]/80 to-transparent",
    "from-[#0d1327]/80 via-[#1f1b4c]/75 to-transparent",
    "from-[#2c1e64]/70 via-[#3b1e72]/65 to-transparent",
  ];

  return (
    <section
      id="contact"
      className="relative mt-16 overflow-hidden rounded-[48px] border border-white/15 bg-[#020012]/90 p-10 shadow-[0_60px_200px_rgba(0,0,0,0.65)] sm:mt-20"
    >
      <div className="starfield pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.6em] text-white/50">Contacto directo</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Tres accesos para conectar al instante</h2>
          <p className="max-w-3xl text-sm text-white/70 sm:text-base">
            Agenda, escribe o llama. Respondo en menos de 24 horas desde Buenos Aires para coordinar workshops, demos o
            propuestas donde la automatización y el producto digital impulsan decisiones estratégicas.
          </p>
        </div>

        <div className="grid w-full gap-5 md:grid-cols-3">
          {directContacts.map(({ label, value, href, external }, index) => (
            <motion.a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              data-cursor="focus"
              className={`tilt-card group flex h-full flex-col items-center justify-center rounded-[32px] border border-white/15 bg-gradient-to-br ${accentCards[index]} px-6 py-10 text-white transition`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              <span className="text-[11px] uppercase tracking-[0.5em] text-white/60">{label}</span>
              <span className="mt-4 text-lg font-semibold sm:text-xl">{value}</span>
              <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60 group-hover:text-white">
                Abrir canal <span aria-hidden>↗</span>
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
