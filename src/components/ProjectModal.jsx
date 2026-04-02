import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaCalendar, FaUsers, FaRocket, FaCode, FaPalette, FaMobileAlt, FaDatabase } from 'react-icons/fa';

function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const getIconForTech = (tech) => {
    const techIcons = {
      'React': <FaCode className="text-blue-500" />,
      'Tailwind CSS': <FaPalette className="text-cyan-500" />,
      'JavaScript': <FaCode className="text-yellow-500" />,
      'Node.js': <FaDatabase className="text-green-500" />,
      'MongoDB': <FaDatabase className="text-green-600" />,
      'Firebase': <FaDatabase className="text-orange-500" />,
      'TypeScript': <FaCode className="text-blue-600" />,
      'Next.js': <FaRocket className="text-gray-800" />,
    };
    return techIcons[tech] || <FaCode className="text-gray-500" />;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/20 bg-gradient-to-br from-white via-slate-50 to-white p-6 shadow-2xl backdrop-blur-xl dark:border-slate-700/60 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 md:p-8"
      >
        {/* Animated Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gradient-to-br from-brand-500/20 via-violet-500/15 to-cyan-500/20 blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -left-24 -bottom-24 h-48 w-48 rounded-full bg-gradient-to-tr from-cyan-500/20 via-brand-500/30 to-violet-500/20 blur-2xl"
          />
        </div>

        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/80 text-slate-600 shadow-lg transition hover:bg-white hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <FaTimes className="h-4 w-4" />
        </motion.button>

        {/* Header with Thumbnail */}
        <div className="relative z-10">
          {/* Project Thumbnail */}
          <div className="relative h-64 overflow-hidden rounded-2xl mb-8">
            <img
              src={project.thumbnail}
              alt={`${project.title} project screenshot`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <motion.div
                animate={{
                  background: [
                    "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)",
                    "linear-gradient(90deg, #8b5cf6 0%, #06b6d4 50%, #3b82f6 100%)",
                    "linear-gradient(90deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="mb-4 h-1 w-full rounded-full opacity-80"
              />

              <h2 className="text-3xl font-black text-white md:text-4xl">
                {project.title}
              </h2>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {project.description}
          </p>
        </div>

        {/* Project Details */}
        <div className="relative z-10 grid gap-6 md:grid-cols-2">
          {/* Left Column - Overview */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-white/20 bg-white/60 p-6 backdrop-blur-sm dark:border-slate-700/40 dark:bg-slate-800/60"
            >
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-50">
                <FaRocket className="text-brand-500" />
                Project Overview
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.overview}
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-white/20 bg-white/60 p-6 backdrop-blur-sm dark:border-slate-700/40 dark:bg-slate-800/60"
            >
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-50">
                <FaCode className="text-brand-500" />
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features?.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-2 text-slate-600 dark:text-slate-300"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-500 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Technical Details */}
          <div className="space-y-6">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-white/20 bg-white/60 p-6 backdrop-blur-sm dark:border-slate-700/40 dark:bg-slate-800/60"
            >
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-50">
                <FaCode className="text-brand-500" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies?.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
                  >
                    {getIconForTech(tech)}
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Project Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl border border-white/20 bg-white/60 p-6 backdrop-blur-sm dark:border-slate-700/40 dark:bg-slate-800/60"
            >
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-50">
                <FaUsers className="text-brand-500" />
                Project Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaCalendar className="text-slate-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Duration</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{project.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaUsers className="text-slate-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Team Size</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{project.teamSize}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaRocket className="text-slate-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Status</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{project.status}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 mt-8 flex flex-wrap gap-4"
        >
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            <FaExternalLinkAlt className="h-4 w-4" />
            View Live Project
          </motion.a>

          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              <FaGithub className="h-4 w-4" />
              View Source Code
            </motion.a>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ProjectModal;
