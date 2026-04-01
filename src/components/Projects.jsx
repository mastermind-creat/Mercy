import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper.jsx";

function Projects({ items }) {
  return (
    <SectionWrapper id="projects" title="Projects" subtitle="Selected portfolio work and solution concepts.">
      <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => (
          <motion.article
            key={project.title}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm transition hover:shadow-soft dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-violet-500 to-cyan-400 opacity-0 transition group-hover:opacity-100" />
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50">{project.title}</h3>
            <p className="mt-2 md:mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
            <div className="mt-3 md:mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-500 dark:border-slate-700 dark:text-slate-300 md:px-3 md:py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 md:mt-5 flex items-center gap-3 text-sm font-semibold">
              <a
                href={project.demo}
                className="rounded-full bg-brand-50 px-3 py-1.5 text-brand-700 transition hover:bg-brand-100 dark:bg-brand-950/50 dark:text-brand-300 dark:hover:bg-brand-900/60 md:px-4 md:py-2"
              >
                Demo
              </a>
              <a
                href={project.github}
                className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 md:px-4 md:py-2"
              >
                GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Projects;
