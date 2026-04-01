import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import LoadingAnimation from "./components/LoadingAnimation.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const experienceData = [
  {
    role: "Data Analyst",
    company: "Impact Botanics Limited",
    period: "Sep 2023 - Present",
    points: [
      "Developed and maintained client relationships to drive sales growth.",
      "Ensured compliance with industry standards and quality control measures.",
      "Conducted market research and data analysis to support product development.",
    ],
  },
  {
    role: "Volunteer",
    company: "Strathmore Institute of Family Studies and Ethics",
    period: "Apr 2022 - May 2023",
    points: [
      "Engaged in team meetings to drive collaborative, data-driven strategies.",
      "Conducted surveys and interviews to improve data quality and evidence-based recommendations.",
    ],
  },
  {
    role: "Intern",
    company: "National Construction Authority",
    period: "Feb 2022 - Apr 2022",
    points: [
      "Collected and analyzed construction project data for compliance assessment.",
      "Built KPI dashboards that improved decision-making.",
      "Streamlined data collection workflows and improved data accuracy by 25%.",
    ],
  },
  {
    role: "Secretary",
    company: "Garden Hills Academy",
    period: "Feb 2021 - Apr 2021",
    points: [
      "Maintained attendance and performance tracking spreadsheets for better accessibility.",
      "Implemented filing systems that improved information retrieval speed by 30%.",
      "Prepared reports and presentations with data visualizations for faculty meetings.",
    ],
  },
  {
    role: "Volunteer Service",
    company: "New Hope Church and School",
    period: "Jan 2020 - Mar 2020",
    points: [
      "Organized workshops on data collection best practices for volunteers.",
      "Prepared reports on program outcomes and community engagement metrics.",
      "Maintained databases for student information and event registrations.",
    ],
  },
];

const skillGroups = [
  {
    title: "Data & Analysis",
    items: [
      "Data Analysis",
      "Statistical Methods",
      "Dashboard Creation",
      "Market Research",
      "Data Visualization",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Microsoft Office Suite",
      "QuickBooks (Familiar)",
      "Spreadsheet Modeling",
      "Report Preparation",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Leadership",
      "Community Engagement",
    ],
  },
];

const projectData = [
  {
    title: "Construction Compliance Dashboard",
    description:
      "An internal KPI dashboard concept for tracking compliance trends and project performance metrics.",
    tags: ["Data Visualization", "Reporting", "KPI"],
    demo: "#",
    github: "#",
  },
  {
    title: "Community Program Insights",
    description:
      "A data collection and analysis workflow for volunteer programs, improving reporting consistency.",
    tags: ["Surveys", "Data Quality", "Impact Reporting"],
    demo: "#",
    github: "#",
  },
  {
    title: "Student Records Optimization",
    description:
      "A structured records management system prototype that improved retrieval and tracking efficiency.",
    tags: ["Spreadsheets", "Data Ops", "Process Improvement"],
    demo: "#",
    github: "#",
  },
];

const educationData = [
  "Bachelor of Business Information Technology - Strathmore University (2019-2023), Second Class Upper (69.45)",
  "Certificate in Business Management & Data Analytics - ESMT Berlin (Jul-Aug 2023)",
  "K.C.S.E - Londiani Girls Secondary School (2015-2018), Mean Grade B-",
];

const awards = [
  "Strathmore University Dean's List (Years 2, 3, 4)",
  "AWS Cloud Foundation Certificate",
  "National Cyber Rise Hackathon 2022",
  "Oracle Academy Students Boot Camp",
  "Digital Marketing Certification",
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 25, restDelta: 0.001 });

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark =
      stored !== null
        ? stored === "dark"
        : false; // Default to light theme
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {isLoading ? (
        <LoadingAnimation onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
          <motion.div
            style={{ scaleX }}
            className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-brand-500 via-violet-500 to-cyan-400"
          />

          <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
            <motion.div
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-16 top-24 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl dark:bg-brand-600/20"
            />
            <motion.div
              animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-700/20"
            />
          </div>

          <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/65">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <button
                type="button"
                onClick={() => scrollTo("hero")}
                className="bg-gradient-to-r from-brand-700 to-violet-600 bg-clip-text text-lg font-black tracking-tight text-transparent dark:from-brand-300 dark:to-violet-300"
              >
                Mercy Chelangat
              </button>
              <nav className="hidden items-center gap-6 md:flex">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
              <button
                type="button"
                onClick={() => setDarkMode((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
                {darkMode ? "Light" : "Dark"}
              </button>
            </div>
          </header>

          <main className="relative z-10 mx-auto w-full max-w-6xl px-6">
            <Hero />
            <About education={educationData} awards={awards} />
            <Experience items={experienceData} />
            <Skills groups={skillGroups} />
            <Projects items={projectData} />
            <Contact />
          </main>

          <Footer />

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="fixed bottom-5 right-5 hidden items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700 sm:flex"
          >
            <FaEnvelope />
            Hire Me
          </motion.a>

          <div className="sr-only">
            <FaPhoneAlt />
            <FaMapMarkerAlt />
            <FaLinkedin />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
