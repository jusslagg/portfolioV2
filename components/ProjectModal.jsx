"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export const ProjectModal = ({ project, onClose }) => (
  <AnimatePresence>
    {project && (
      <motion.div
        className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 px-4 py-8 backdrop-blur-md md:items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          className="w-full max-w-4xl rounded-[40px] border border-white/15 bg-gradient-to-br from-[#150622]/80 to-[#04000a]/90 p-8 shadow-[0_40px_140px_rgba(0,0,0,0.55)] sm:p-12"
          style={{ maxHeight: "80vh", overflowY: "auto" }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Project</p>
              <h3 className="text-3xl font-semibold text-white">{project.title}</h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              data-cursor="focus"
              className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/70 hover:text-white"
            >
              Close
            </button>
          </div>
          <p className="mt-4 text-white/80">{project.details}</p>
          {project.features?.length > 0 && (
            <ul className="mt-4 list-disc space-y-1 text-left text-sm text-white/75 sm:text-base">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          )}
          {project.preview && (
            <div className="relative mt-6 h-72 w-full overflow-hidden rounded-3xl border border-white/10 bg-black/20 sm:h-80">
              <Image
                src={project.preview}
                alt={`Demo de ${project.title}`}
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 520px, (min-width: 768px) 70vw, 100vw"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          )}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={onClose}
            data-cursor="focus"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:text-white"
          >
            Cerrar <span aria-hidden>×</span>
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
