"use client";

import { AnimatePresence, motion } from "framer-motion";

export const ProjectModal = ({ project, onClose }) => (
  <AnimatePresence>
    {project && (
      <motion.div
        className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 py-8 backdrop-blur md:items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          className="w-full max-w-2xl rounded-[32px] border border-white/15 bg-gradient-to-br from-purple-900/60 to-slate-900/60 p-6 shadow-glow sm:p-8"
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
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            data-cursor="focus"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-sky-200"
          >
            Abrir demo <span aria-hidden>-&gt;</span>
          </a>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
