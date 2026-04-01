import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedCounter from "./AnimatedCounter.jsx";
import { FaChartLine, FaTrophy, FaRocket, FaStar } from "react-icons/fa";

function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const stats = [
    {
      value: 5,
      suffix: "+",
      label: "Years Experience",
      icon: <FaChartLine className="h-6 w-6" />,
      color: "from-brand-500 to-violet-600"
    },
    {
      value: 8,
      suffix: "+",
      label: "Certifications",
      icon: <FaTrophy className="h-6 w-6" />,
      color: "from-violet-500 to-cyan-600"
    },
    {
      value: 15,
      suffix: "+",
      label: "Projects Completed",
      icon: <FaRocket className="h-6 w-6" />,
      color: "from-cyan-500 to-brand-600"
    },
    {
      value: 100,
      suffix: "%",
      label: "Client Satisfaction",
      icon: <FaStar className="h-6 w-6" />,
      color: "from-brand-600 to-pink-600"
    }
  ];

  return (
    <div ref={ref} className="py-16">
      <motion.div
        style={{ y }}
        className="grid grid-cols-2 gap-6 md:grid-cols-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:border-slate-800/50 dark:bg-slate-900/80"
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />

            {/* Icon */}
            <motion.div
              animate={isVisible ? { rotate: [0, 10, -10, 0] } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="mb-3 text-brand-600 dark:text-brand-400"
            >
              {stat.icon}
            </motion.div>

            {/* Counter */}
            <div className="text-3xl font-black text-slate-900 dark:text-white">
              {isVisible ? (
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              ) : (
                <span>0{stat.suffix}</span>
              )}
            </div>

            {/* Label */}
            <div className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
              {stat.label}
            </div>

            {/* Decorative element */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
              className={`absolute -right-2 -top-2 h-16 w-16 rounded-full bg-gradient-to-br ${stat.color} opacity-20 blur-xl`}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default StatsCounter;
