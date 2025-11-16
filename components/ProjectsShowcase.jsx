"use client";

import { useState } from "react";
import { projects } from "../data/content";
import { ProjectModal } from "./ProjectModal";

const tiltCard = (element, event) => {
  const rect = element.getBoundingClientRect();
  const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
  const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
  element.style.setProperty("--rotateX", `${rotateX}deg`);
  element.style.setProperty("--rotateY", `${rotateY}deg`);
};

export const ProjectsShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="mt-16 space-y-10 sm:mt-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.5em] text-white/50">Projects</p>
          <h2 className="text-3xl font-semibold text-white">Operaciones con impacto real</h2>
        </div>
        <p className="max-w-2xl text-sm text-white/70 sm:text-base">
          {
            "Cada caso nace de mi experiencia en CAT Technologies, Cruz Roja y Atento: automatización, tableros BI e iniciativas de cultura que vinculan datos con personas."
          }
        </p>
      </div>
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            data-cursor="focus"
            onMouseMove={(event) => tiltCard(event.currentTarget, event)}
            onMouseLeave={(event) => {
              event.currentTarget.style.setProperty("--rotateX", "0deg");
              event.currentTarget.style.setProperty("--rotateY", "0deg");
            }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer rounded-[32px] border border-white/10 bg-gradient-to-br from-[#12042c]/70 to-[#050118]/80 p-5 shadow-[0_30px_90px_rgba(5,0,24,0.5)] backdrop-blur-2xl transition will-change-transform sm:p-6"
            style={{
              transformStyle: "preserve-3d",
              transform: "perspective(900px) rotateX(var(--rotateX, 0deg)) rotateY(var(--rotateY, 0deg))",
            }}
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.4em] text-white/50">Caso destacado</span>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-white/70">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition group-hover:text-sky-200">
                Abrir detalles <span aria-hidden>-&gt;</span>
              </span>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
