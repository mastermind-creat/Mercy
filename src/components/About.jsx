import { motion } from "framer-motion";
import { FaGraduationCap, FaMedal, FaStar, FaCertificate, FaAward, FaTrophy } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper.jsx";

function About({ education, awards }) {
  return (
    <SectionWrapper
      id="about"
      title="About"
      subtitle="Business Information Technology graduate with a strong foundation in analytics, business operations, and technology-enabled decision making."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-50">Profile</h3>
          <div className="group relative mx-auto max-w-xs overflow-hidden rounded-2xl border border-slate-200 shadow-md dark:border-slate-700">
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-brand-900/35 via-transparent to-transparent opacity-80" />
            <img
              src="/mercy.jpeg"
              alt="Profile of Chelangat Mercy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-50">Objective</h3>
          <p className="leading-relaxed text-slate-600 dark:text-slate-300">
            Seeking a role where I can apply technical skills and business acumen to transform data into
            strategic insights, improve operational efficiency, and support impactful organizational growth.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2 dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-gradient-to-b from-brand-500 to-violet-600" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Education Journey</h3>
          </div>

          <div className="relative">
            {/* Centered Timeline line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-500 via-violet-500 to-cyan-500 md:block hidden" />

            <div className="space-y-8 md:space-y-12">
              {education.map((item, index) => {
                const isEven = index % 2 === 0;
                const educationParts = item.match(/^(.+?) - (.+?) \((\d{4}(?:-\d{4})?)\), (.+)$/);

                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative ${isEven ? 'md:justify-start' : 'md:justify-end'} md:flex items-center`}
                  >
                    {/* Mobile: Left-aligned timeline, Desktop: Directional Timeline dot */}
                    <div className="md:hidden">
                      <div className="absolute left-0 top-4 h-4 w-4 rounded-full border-4 border-white bg-gradient-to-br from-brand-500 to-violet-600 shadow-lg dark:border-slate-900"></div>
                    </div>

                    <div className="hidden md:block">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                        className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-4 border-white bg-gradient-to-br from-brand-500 to-violet-600 shadow-lg dark:border-slate-900 z-10 ${isEven
                            ? 'left-[calc(50%-8px)]'
                            : 'left-[calc(50%+4px)]'
                          }`}
                      >
                        {/* Directional pointer */}
                        <div className={`absolute top-1/2 h-3 w-3 -translate-y-1/2 border-y-2 border-y-transparent ${isEven
                            ? 'left-full border-l-4 border-l-brand-500'
                            : 'right-full border-r-4 border-r-brand-500'
                          }`}></div>
                      </motion.div>
                    </div>

                    {/* Content card */}
                    <motion.div
                      whileHover={{ y: -3, scale: 1.02 }}
                      className={`w-full md:w-5/12 ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} pl-8`}
                    >
                      <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 md:p-5 shadow-md transition-all hover:shadow-lg dark:border-slate-800 dark:from-slate-900 dark:to-slate-800">
                        {educationParts ? (
                          <>
                            <div className={`mb-2 flex flex-col gap-1 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                              <span className="rounded-full bg-brand-100 px-2 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
                                {educationParts[3]}
                              </span>
                              <span className="text-xs text-slate-500 dark:text-slate-400">
                                {educationParts[2]}
                              </span>
                            </div>
                            <h4 className={`font-semibold text-slate-900 dark:text-white mb-2 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                              {educationParts[1]}
                            </h4>
                            <p className={`text-sm text-slate-600 dark:text-slate-300 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                              {educationParts[4]}
                            </p>
                          </>
                        ) : (
                          <p className={`text-sm text-slate-700 dark:text-slate-300 ${isEven ? 'md:text-right' : 'md:text-left'}`}>{item}</p>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="mt-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-8 shadow-lg dark:border-slate-800 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      >
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-2xl text-brand-600 dark:text-brand-400"
            >
              <FaTrophy />
            </motion.div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Achievements & Certifications</h3>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-brand-500 via-violet-500 to-cyan-500 max-w-xs" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => {
            const icons = [
              <FaGraduationCap className="h-6 w-6" />,
              <FaMedal className="h-6 w-6" />,
              <FaStar className="h-6 w-6" />,
              <FaCertificate className="h-6 w-6" />,
              <FaAward className="h-6 w-6" />
            ];
            const colors = [
              "from-brand-500 to-violet-600",
              "from-violet-500 to-purple-600",
              "from-purple-500 to-pink-600",
              "from-pink-500 to-rose-600",
              "from-rose-500 to-orange-600"
            ];

            return (
              <motion.div
                key={award}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="group relative overflow-hidden rounded-xl border border-slate-200/50 bg-white p-5 shadow-md transition-all duration-300 hover:shadow-xl dark:border-slate-700/50 dark:bg-slate-800/50"
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />

                {/* Icon and content */}
                <div className="relative z-10">
                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                    className="mb-3 text-brand-600 dark:text-brand-400"
                  >
                    {icons[index % icons.length]}
                  </motion.div>

                  <h4 className="mb-2 font-semibold text-slate-900 dark:text-white line-clamp-2">
                    {award}
                  </h4>

                  {/* Decorative elements */}
                  <div className="absolute -right-2 -top-2 h-8 w-8 rounded-full bg-gradient-to-br from-brand-400 to-violet-500 opacity-20 blur-md" />
                  <div className="absolute -bottom-1 -left-1 h-6 w-6 rounded-full bg-gradient-to-br from-cyan-400 to-brand-500 opacity-20 blur-sm" />
                </div>

                {/* Hover effect border */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colors[index % colors.length]} opacity-0 transition-opacity duration-300 group-hover:opacity-20`} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 h-1 w-full origin-left bg-gradient-to-r from-brand-500 via-violet-500 to-cyan-500"
        />
      </motion.div>
    </SectionWrapper>
  );
}

export default About;
