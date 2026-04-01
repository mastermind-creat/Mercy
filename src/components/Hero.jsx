import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
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
    <section id="hero" className="scroll-mt-24 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
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
            className="text-4xl font-black leading-tight text-slate-900 dark:text-white md:text-5xl"
          >
            Turning Data Into Strategic Decisions
          </motion.h1>
          <p className="mt-5 text-lg font-medium text-slate-700 dark:text-slate-300">
            {typed}
            <span className="ml-1 inline-block h-5 w-[2px] animate-blink bg-brand-500 align-middle" />
          </p>

          <p className="mt-6 max-w-2xl text-slate-600 dark:text-slate-300">
            Detail-oriented and analytical BIT graduate passionate about transforming complex datasets into
            actionable insights, enabling growth, efficiency, and impact-driven execution.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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
          </div>
        </div>

        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -6 }}
          style={{ y: cardY, rotate: cardRotate }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/80 p-6 shadow-soft backdrop-blur-lg dark:border-slate-700/60 dark:bg-slate-900/75"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-500/20 blur-2xl" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Quick Info</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p className="inline-flex items-center gap-2">
              <FaPhoneAlt className="text-brand-500" />
              +254 702 384 736
            </p>
            <p className="inline-flex items-center gap-2">
              <FaEnvelope className="text-brand-500" />
              cmursoy@gmail.com
            </p>
            <a
              href="https://www.linkedin.com/in/chelangat-m-065609185/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-brand-600 hover:underline dark:text-brand-400"
            >
              <FaLinkedin />
              LinkedIn Profile
            </a>
            <p>P.O. Box 59857 - 00509</p>
          </div>
        </motion.div>
      </div>

      {/* Animated Stats Counter */}
      <StatsCounter />
    </section>
  );
}

export default Hero;
