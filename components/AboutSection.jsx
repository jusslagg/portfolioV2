"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Avatar3D } from "./Avatar3D";

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative mt-16 grid gap-10 overflow-hidden rounded-[48px] border border-white/10 bg-gradient-to-br from-[#040014] via-[#05001a] to-[#0d0324] px-5 py-8 shadow-[0_40px_120px_rgba(0,0,0,0.7)] backdrop-blur-2xl sm:px-8 sm:py-10 md:mt-20 md:grid-cols-[minmax(240px,320px)_1fr] md:py-12"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="constellation-mesh absolute inset-0" />
      </div>
      <motion.div
        style={{ y: parallaxY }}
        className="relative order-2 flex items-center justify-center md:order-1"
        aria-hidden
      >
        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-[#7c3aed]/70 via-[#5eead4]/30 to-transparent blur-3xl" />
          <Avatar3D />
        </div>
      </motion.div>
      <div className="relative order-1 space-y-6 md:order-2">
        <div className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.5em] text-white/60">
          Perfil
        </div>
        <h2 className="text-4xl font-semibold text-white">Gestor + Full-Stack</h2>
        <div className="space-y-4 text-base text-white/80 sm:text-lg">
          <p>
            Gestiono proyectos de control operativo desde Buenos Aires, combinando más de cuatro años de liderazgo,
            comunicación estratégica y seguimiento de KPIs con una sólida formación en desarrollo full-stack. Mi
            experiencia se centra en la creación de soluciones digitales, dashboards financieros y automatizaciones que
            mejoran la eficiencia y transforman datos en decisiones.
          </p>
          <p>
            Antes, coordiné el marketing digital de Cruz Roja y lideré cultura y operaciones en Atento, integrando visión
            humana, técnica y analítica. Ese recorrido me permite traducir objetivos de negocio en productos digitales
            medibles, con foco en la mejora continua y en decisiones basadas en datos.
          </p>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">Stack Focus</p>
        <div className="flex flex-wrap gap-3 text-sm text-white/70">
          {["React", "Next.js", "Node.js", "MongoDB", "Firebase", "Automatización"].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1 uppercase tracking-[0.3em]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};



