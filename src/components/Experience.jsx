import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper.jsx";

function Experience({ items }) {
  return (
    <SectionWrapper id="experience" title="Experience" subtitle="Career journey and impact highlights.">
      <div className="relative ml-0 md:ml-3 border-l-2 border-brand-200 pl-6 md:pl-8 dark:border-brand-900">
        {items.map((item) => (
          <motion.article
            key={`${item.role}-${item.company}`}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            className="relative mb-6 md:mb-8 rounded-xl border border-transparent p-3 md:p-4 last:mb-0 hover:border-slate-200 hover:bg-white/60 dark:hover:border-slate-800 dark:hover:bg-slate-900/40"
          >
            <span className="absolute -left-[42px] top-1 h-4 w-4 rounded-full border-4 border-white bg-brand-500 dark:border-slate-950" />
            <h3 className="mt-1 text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100">{item.role}</h3>
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{item.company}</p>
            <ul className="mt-3 md:mt-4 list-disc space-y-1 md:space-y-2 pl-4 md:pl-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Experience;
