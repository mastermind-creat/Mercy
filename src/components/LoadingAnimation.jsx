import { useEffect } from "react";
import { motion } from "framer-motion";

function LoadingAnimation({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900">
      <div className="relative">
        {/* Animated circles */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 0.3, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-8 rounded-full border-2 border-brand-400"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
          className="absolute -inset-4 rounded-full border border-cyan-400"
        />

        {/* Central logo/initials */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-600 shadow-2xl"
        >
          <span className="text-2xl font-black text-white">
            MC
          </span>
        </motion.div>

        {/* Loading text */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2">
            {/* <span className="text-sm font-medium text-white/80">Loading Portfolio</span> */}
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-brand-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingAnimation;
