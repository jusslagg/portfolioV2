"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiAmazonaws,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
  SiHtml5,
} from "react-icons/si";

const orbitIcons = [
  { id: "react", Icon: SiReact },
  { id: "js", Icon: SiJavascript },
  { id: "firebase", Icon: SiFirebase },
  { id: "next", Icon: SiNextdotjs },
  { id: "ts", Icon: SiTypescript },
  { id: "aws", Icon: SiAmazonaws },
  { id: "tailwind", Icon: SiTailwindcss },
  { id: "github", Icon: SiGithub },
  { id: "html", Icon: SiHtml5 },
];

const orbitGridSvg = encodeURIComponent(
  `<svg width="420" height="420" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 420"><g fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="0.6"><circle cx="210" cy="210" r="60"/><circle cx="210" cy="210" r="120"/><circle cx="210" cy="210" r="180"/><circle cx="210" cy="210" r="210"/><path d="M0 210h420M210 0v420"/></g></svg>`,
);
const orbitGridBackground = `url("data:image/svg+xml,${orbitGridSvg}")`;

const contactHighlights = [
  { label: "Ubicación", value: "CABA, Argentina" },
  { label: "Tel", value: "+54 9 11 2386 1546", href: "tel:+5491123861546" },
  { label: "Email", value: "lagg312@gmail.com", href: "mailto:lagg312@gmail.com" },
  {
    label: "LinkedIn",
    value: "jesusgilgonzalez",
    href: "https://www.linkedin.com/in/jesusgilgonzalez/",
    external: true,
  },
];

export const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const glowRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".badge-item", { opacity: 0, y: -15, stagger: 0.1 })
        .from(
          titleRef.current?.querySelectorAll("span"),
          { opacity: 0, y: 40, stagger: 0.05, duration: 0.9 },
          "-=0.4",
        )
        .from(".hero-subtitle, .hero-cta", { opacity: 0, y: 20, stagger: 0.1 }, "-=0.5");
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!buttonRef.current || !glowRef.current) return;
    const handleEnter = () => {
      gsap.to(glowRef.current, { scale: 1.3, opacity: 1, duration: 0.35, ease: "power2.out" });
    };
    const handleLeave = () => {
      gsap.to(glowRef.current, { scale: 0.4, opacity: 0, duration: 0.5, ease: "power3.out" });
    };
    const btn = buttonRef.current;
    btn.addEventListener("mouseenter", handleEnter);
    btn.addEventListener("mouseleave", handleLeave);
    return () => {
      btn.removeEventListener("mouseenter", handleEnter);
      btn.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative overflow-hidden rounded-[52px] border border-white/10 bg-[rgba(2,0,16,0.9)] p-5 shadow-[0_70px_200px_rgba(1,0,5,0.9)] sm:p-6 md:p-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-40%,rgba(60,52,160,0.8),rgba(6,3,21,0.95)_55%,rgba(1,0,7,1)_85%)]" />
      <div
        className="absolute inset-x-0 top-[-220px] h-[260px]"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.35), rgba(62,45,160,0.5) 40%, rgba(5,3,17,0) 80%)",
          opacity: 0.8,
          filter: "blur(18px)",
        }}
      />
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: orbitGridBackground }} />

      <div className="relative z-10 flex flex-col gap-10 md:flex-row lg:gap-16">
        <div className="flex-1 space-y-8">
          <div>
            <h1
              ref={titleRef}
              className="mt-3 text-3xl font-semibold leading-snug text-white sm:text-4xl md:text-5xl lg:text-[56px]"
            >
              <span className="block">Full-Stack Developer & Control de Gestión</span>
              <span className="bg-gradient-to-r from-[#7dd3fc] via-[#a78bfa] to-[#67e8f9] bg-clip-text text-transparent">
                Transformo datos y procesos en soluciones digitales que impulsan eficiencia y decisiones inteligentes.
              </span>
            </h1>
          </div>

          <p className="hero-subtitle max-w-2xl text-base text-white/80 md:text-lg">
            {
              "Impulso eficiencia y decisiones inteligentes con automatización, IA aplicada y dashboards conectados al negocio."
            }
          </p>

          <div className="hero-cta flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              ref={buttonRef}
              href="#projects"
              data-cursor="focus"
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full px-10 py-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-white sm:w-auto"
              style={{
                background:
                  "linear-gradient(90deg, rgba(80,0,255,0.9) 0%, rgba(164,92,255,0.95) 50%, rgba(80,0,255,0.9) 100%)",
              }}
            >
              <span
                ref={glowRef}
                className="pointer-events-none absolute inset-0 scale-50 rounded-full bg-fuchsia-400/50 blur-2xl opacity-0 transition"
              />
              <span className="relative">Ver proyectos</span>
            </a>
            <a
              href="/CV_Jesus_Gil.pdf"
              data-cursor="focus"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/25 px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/60 sm:w-auto"
            >
              Descargar CV
            </a>
          </div>

          <div className="grid w-full gap-2 text-sm text-white/70 sm:grid-cols-2">
            {contactHighlights.map(({ label, value, href, external }) => {
              const inner = (
                <>
                  <span className="text-white/40">{label}</span>
                  <span className="font-semibold text-white/80">{value}</span>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="flex items-center justify-between gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-white/40"
                >
                  {inner}
                </a>
              ) : (
                <span
                  key={label}
                  className="flex items-center justify-between gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  {inner}
                </span>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex flex-1 items-center justify-center md:mt-0">
          <div className="relative mx-auto h-[260px] w-[260px] max-w-full sm:h-[320px] sm:w-[320px] md:h-[360px] md:w-[360px]">
        <div className="absolute inset-6 rounded-full border border-white/10" />
        <div className="absolute inset-14 rounded-full border border-white/10 opacity-50" />
        <div className="absolute inset-22 rounded-full border border-white/10 opacity-30" />
            <div className="absolute inset-0 overflow-hidden rounded-full border border-white/5 bg-black/20 backdrop-blur">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: orbitGridBackground }} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/10 text-center text-2xl font-black tracking-[0.2em] text-white/80">
                FSD
              </div>
            </div>
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            >
              {orbitIcons.map(({ id, Icon }, index) => {
                const angleDeg = (index / orbitIcons.length) * 360;
                return (
                  <div
                    key={id}
                    className="absolute left-1/2 top-1/2"
                    style={{ transform: `translate(-50%, -50%) rotate(${angleDeg}deg)` }}
                  >
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-2xl border border-white/10 bg-[#060317]/80 text-white/80 shadow-[0_8px_30px_rgba(2,0,24,0.5)] backdrop-blur sm:h-10 sm:w-10"
                      style={{ transform: `translateY(-86px) rotate(-${angleDeg}deg)` }}
                    >
                      {Icon ? (
                        <Icon className="text-sm sm:text-base" />
                      ) : (
                        <span className="text-[10px] font-semibold uppercase">{id}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
