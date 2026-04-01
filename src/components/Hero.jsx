import { useEffect, useMemo, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhoneAlt, FaDownload } from "react-icons/fa";
import StatsCounter from "./StatsCounter.jsx";

const fullTitle = "Business & Information Technology Graduate";

function Hero() {
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const cardRef = useRef(null);

  const speed = useMemo(() => (isDeleting ? 40 : 70), [isDeleting]);

  // Parallax effect for the card
  const { scrollYProgress } = useScroll();
  const cardY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const cardRotate = useTransform(scrollYProgress, [0, 0.5], [0, 2]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && typed.length < fullTitle.length) {
        setTyped(fullTitle.slice(0, typed.length + 1));
      } else if (!isDeleting && typed.length === fullTitle.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typed.length > 0) {
        setTyped(fullTitle.slice(0, typed.length - 1));
      } else {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typed, isDeleting, speed]);

  return (
    <section id="hero" className="scroll-mt-24 py-12 md:py-16">
      <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        {/* Mobile: Quick Info last */}
        <div className="order-3 md:order-2 md:w-full mt-8">
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -4 }}
            style={{ y: cardY, rotate: cardRotate }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-white/40 bg-gradient-to-br from-white via-slate-50 to-white p-4 shadow-xl backdrop-blur-xl dark:border-slate-700/60 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 md:p-6"
          >
            {/* Simplified mobile background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl md:hidden">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 90, 180]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-gradient-to-br from-brand-500/20 via-violet-500/15 to-cyan-500/20 blur-xl"
              />
            </div>

            {/* Desktop animated background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl hidden md:block">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -right-20 -top-20 h-32 w-32 rounded-full bg-gradient-to-br from-brand-500/30 via-violet-500/20 to-cyan-500/30 blur-3xl"
              />
              <motion.div
                animate={{
                  x: [0, 10, 0],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -left-16 -bottom-16 h-24 w-24 rounded-full bg-gradient-to-tr from-cyan-500/20 via-brand-500/30 to-violet-500/20 blur-2xl"
              />
            </div>

            {/* Compact header */}
            <div className="relative z-10 mb-3 rounded-xl border border-white/20 bg-white/60 backdrop-blur-md p-3 dark:border-slate-700/40 dark:bg-slate-800/60 md:mb-4 md:rounded-2xl md:p-4">
              <motion.div
                animate={{
                  background: [
                    "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)",
                    "linear-gradient(90deg, #8b5cf6 0%, #06b6d4 50%, #3b82f6 100%)",
                    "linear-gradient(90deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
                className="h-0.5 w-full rounded-full opacity-80"
              />
              <h3 className="text-base font-black bg-gradient-to-r from-brand-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent dark:from-brand-400 dark:via-violet-400 dark:to-cyan-400 md:text-lg">
                Quick Info
              </h3>
            </div>

            {/* Mobile: Compact grid layout */}
            <div className="relative z-10 grid grid-cols-2 gap-2 md:hidden">
              {[
                { icon: <FaPhoneAlt className="h-4 w-4" />, text: "+254 702 384 736", color: "from-green-500 to-emerald-600" },
                { icon: <FaEnvelope className="h-4 w-4" />, text: "cmursoy@gmail.com", color: "from-blue-500 to-indigo-600" },
                { icon: <FaLinkedin className="h-4 w-4" />, text: "LinkedIn", color: "from-blue-600 to-purple-600", link: "https://www.linkedin.com/in/chelangat-m-065609185/" },
                { icon: "📍", text: "P.O. Box 59857", color: "from-slate-500 to-slate-700" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className={`group relative overflow-hidden rounded-lg border border-white/20 bg-white/80 backdrop-blur-sm p-2.5 transition-all duration-300 hover:shadow-lg dark:border-slate-700/40 dark:bg-slate-800/80 ${item.link ? 'cursor-pointer' : ''
                    }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />

                  <div className="relative z-10 flex items-center gap-2">
                    <motion.div
                      animate={{
                        rotate: item.link ? [0, 3, -3, 0] : [0, 0, 0],
                        scale: item.link ? [1, 1.05, 1] : [1, 1, 1]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.15
                      }}
                      className={`rounded-lg bg-gradient-to-br ${item.color} p-1.5 text-white shadow-md`}
                    >
                      {item.icon}
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-slate-800 dark:text-slate-200 truncate">
                        {item.text}
                      </p>
                      {item.link && (
                        <motion.a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="text-xs font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                        >
                          View
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop: Full contact items */}
            <div className="relative z-10 space-y-3 hidden md:block md:space-y-4">
              {[
                { icon: <FaPhoneAlt className="h-5 w-5" />, text: "+254 702 384 736", color: "from-green-500 to-emerald-600" },
                { icon: <FaEnvelope className="h-5 w-5" />, text: "cmursoy@gmail.com", color: "from-blue-500 to-indigo-600" },
                { icon: <FaLinkedin className="h-5 w-5" />, text: "LinkedIn Profile", color: "from-blue-600 to-purple-600", link: "https://www.linkedin.com/in/chelangat-m-065609185/" },
                { icon: "📍", text: "P.O. Box 59857 - 00509", color: "from-slate-500 to-slate-700" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className={`group relative overflow-hidden rounded-2xl border border-white/20 bg-white/80 backdrop-blur-md p-4 transition-all duration-300 hover:shadow-2xl dark:border-slate-700/40 dark:bg-slate-800/80 ${item.link ? 'cursor-pointer' : ''
                    }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />

                  <div className="relative z-10 flex items-center gap-3">
                    <motion.div
                      animate={{
                        rotate: item.link ? [0, 5, -5, 0] : [0, 0, 0],
                        scale: item.link ? [1, 1.1, 1] : [1, 1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                      className={`rounded-xl bg-gradient-to-br ${item.color} p-2.5 text-white shadow-lg`}
                    >
                      {item.icon}
                    </motion.div>

                    <div className="flex-1">
                      <p className="font-medium text-slate-800 dark:text-slate-200">
                        {item.text}
                      </p>
                      {item.link && (
                        <motion.a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                        >
                          View
                          <motion.svg
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10.293 3.293a1 1 0 011.414 0l10 10a1 1 0 001.414 1.414l-10-10z" />
                          </motion.svg>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="order-1 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400"
          >
            MS. CHELANGAT MERCY
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-3xl font-black leading-tight text-slate-900 dark:text-white md:text-4xl md:font-black"
          >
            Turning Data Into Strategic Decisions
          </motion.h1>
          <p className="mt-4 text-base font-medium text-slate-700 dark:text-slate-300 md:text-lg md:leading-relaxed">
            {typed}
            <span className="ml-1 inline-block h-4 w-[2px] animate-blink bg-brand-500 align-middle md:h-5" />
          </p>

          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 md:text-base md:leading-relaxed">
            Detail-oriented and analytical BIT graduate passionate about transforming complex datasets into
            actionable insights, enabling growth, efficiency, and impact-driven execution.
          </p>

          {/* Mobile: Compact button layout */}
          <div className="order-2 mt-6 grid grid-cols-2 gap-3 md:hidden">
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-brand-600 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-brand-700 text-center"
            >
              Contact
            </motion.a>
            <motion.a
              href="mailto:cmursoy@gmail.com"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-300 px-3 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200"
            >
              <FaEnvelope className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="/mercy-cv.pdf"
              download="mercy-cv.pdf"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-300 px-3 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 col-span-2"
            >
              <FaDownload className="h-4 w-4" />
              Download CV
            </motion.a>
          </div>

          {/* Desktop: Full-width buttons */}
          <div className="hidden mt-8 flex flex-wrap items-center gap-3 md:flex">
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="mailto:cmursoy@gmail.com"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200"
            >
              <FaEnvelope /> Email
            </motion.a>
            <motion.a
              href="/mercy-cv.pdf"
              download="mercy-cv.pdf"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200"
            >
              <FaDownload /> Download CV
            </motion.a>
          </div>
        </div>
      </div>

      {/* Animated Stats Counter */}
      <StatsCounter />
    </section>
  );
}

export default Hero;
