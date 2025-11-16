"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { navigationLinks } from "../data/content";
import { useTheme } from "./ThemeProvider";

const socialItems = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jesusgilgonzalez/", Icon: FaLinkedinIn },
  { label: "WhatsApp", href: "https://wa.me/5491123861546", Icon: FaWhatsapp },
  { label: "Email", href: "mailto:lagg312@gmail.com", Icon: FaEnvelope },
];

export const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const themeIcon = isDark ? "DM" : "LM";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) { return; }
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="sticky top-3 z-50 flex w-full justify-center px-4 sm:px-6"
      >
        <motion.div
          layout
          className="flex w-full max-w-6xl flex-col gap-3 rounded-3xl border border-white/15 bg-gradient-to-r from-[#0f0520]/80 via-[#1c0f3a]/80 to-[#0f0520]/80 p-4 shadow-[0_20px_60px_rgba(40,0,92,0.45)] backdrop-blur-2xl md:flex-row md:items-center md:justify-between md:gap-6"
        >
          <div className="flex w-full items-center justify-between gap-3 md:w-auto">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6c5cff] via-[#9c6bff] to-[#6c5cff] text-lg font-semibold text-white shadow-[0_0_35px_rgba(145,115,255,0.8)]">
                JG
              </div>
              <div className="leading-tight">
                <p className="text-[10px] uppercase tracking-[0.6em] text-white/60">Jesús Gil</p>
                <p className="text-sm font-semibold text-white">Full-Stack / Gestión</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                aria-label="Cambiar modo"
                onClick={toggleTheme}
                data-cursor="focus"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-white/80 transition hover:border-white/70 hover:text-white"
              >
                {themeIcon}
              </button>
              <button
                type="button"
                aria-label="Abrir menú"
                onClick={toggleMenu}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:border-white/60"
              >
                <span className="sr-only">Abrir menú de navegación</span>
                <div className="flex flex-col gap-1.5">
                  <span className="block h-0.5 w-6 bg-white" />
                  <span className="block h-0.5 w-6 bg-white" />
                  <span className="block h-0.5 w-6 bg-white" />
                </div>
              </button>
            </div>
          </div>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 md:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor="focus"
                className={clsx(
                  "rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/70 transition",
                  "hover:bg-white/20 hover:text-white",
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            {socialItems.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                data-cursor="focus"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:border-white/70 hover:text-white"
              >
                <Icon size={14} />
              </a>
            ))}
            <button
              type="button"
              aria-label="Cambiar modo"
              onClick={toggleTheme}
              data-cursor="focus"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-white/80 transition hover:border-white/70 hover:text-white"
            >
              {themeIcon}
            </button>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="absolute left-4 right-4 top-20 rounded-3xl border border-white/15 bg-[#0b031a]/95 p-6 text-white shadow-[0_25px_70px_rgba(0,0,0,0.45)]"
            >
              <nav className="flex flex-col gap-3">
                {navigationLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm uppercase tracking-[0.35em] text-white/80 transition hover:border-white/40 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">Redes</p>
                <div className="flex flex-wrap gap-3">
                  {socialItems.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-w-[120px] flex-1 items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-3 py-2 text-white/80 transition hover:border-white/40"
                    >
                      <Icon size={14} />
                      <span className="text-sm">{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
