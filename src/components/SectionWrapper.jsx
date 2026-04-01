import { motion } from "framer-motion";

function SectionWrapper({ id, title, subtitle, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="scroll-mt-24 py-14 md:py-20"
    >
      {(title || subtitle) && (
        <div className="mb-8">
          {title && (
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 md:text-3xl">
              {title}
            </h2>
          )}
          {subtitle && <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">{subtitle}</p>}
        </div>
      )}
      {children}
    </motion.section>
  );
}

export default SectionWrapper;
