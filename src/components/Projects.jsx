import { motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper.jsx";
import ProjectModal from "./ProjectModal.jsx";

function Projects({ items }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const enhancedProjects = [
    {
      title: "LaunchVerse",
      description: "A startup-oriented platform designed to support product launches and digital onboarding workflows. Optimized for speed, usability, and future feature expansion.",
      overview: "LaunchVerse is a comprehensive platform that streamlines the product launch process for startups and digital businesses. The platform provides intuitive workflows for onboarding, project management, and launch coordination, making it easier for teams to bring their products to market efficiently.",
      features: [
        "Interactive product launch dashboard with real-time progress tracking",
        "Streamlined digital onboarding workflows for new users and team members",
        "Responsive design optimized for mobile, tablet, and desktop devices",
        "Performance-optimized architecture for fast loading and smooth interactions",
        "Scalable component structure for future feature expansion",
        "Modern UI/UX with intuitive navigation and user-friendly interface"
      ],
      technologies: ["React", "Tailwind CSS"],
      demo: "https://launch-verse.vercel.app/#/login",
      github: null,
      duration: "3 months",
      teamSize: "2 developers",
      status: "Live Production",
      tags: ["React", "Tailwind CSS", "Startup Platform", "Product Launch"],
      thumbnail: "/launchverse.png"
    },
    {
      title: "Personal Welding Website",
      description: "A professional industrial portal for welding fabrication services, featuring dynamic service galleries and consultation booking integration.",
      overview: "A specialized web platform for a professional welding fabrication business, showcasing services, completed projects, and facilitating client consultations. The website combines visual appeal with functional business tools to help attract and convert potential clients.",
      features: [
        "Dynamic service gallery showcasing welding projects and fabrication work",
        "Integrated consultation booking system with calendar availability",
        "Responsive image galleries with zoom and lightbox functionality",
        "Contact forms with instant quote request capabilities",
        "SEO-optimized content structure for better search visibility",
        "Professional portfolio display with project details and specifications"
      ],
      technologies: ["React", "Tailwind CSS"],
      demo: "https://welding-flax.vercel.app/",
      github: null,
      duration: "2 months",
      teamSize: "1 developer",
      status: "Live Production",
      tags: ["React", "Tailwind CSS", "Industrial", "Portfolio", "Booking System"],
      thumbnail: "/welding.png"
    },
    {
      title: "Kodiero Business Center",
      description: "A professional business website developed for a registered enterprise. Focuses on clarity, performance, and responsive design, delivering a polished multi-page layout.",
      overview: "A comprehensive business website for Kodiero Business Center, a registered enterprise requiring a professional online presence. The project emphasizes clean design, optimal performance, and responsive layout to effectively represent the business across all devices.",
      features: [
        "Multi-page layout with comprehensive business information sections",
        "Fully responsive design adapting to all screen sizes and devices",
        "Performance-optimized for fast loading and smooth user experience",
        "Professional content management system for easy updates",
        "Contact forms and business inquiry integration",
        "Modern design reflecting corporate professionalism and trust"
      ],
      technologies: ["React", "Tailwind CSS"],
      demo: "https://kodiero-investments.vercel.app/",
      github: null,
      duration: "1.5 months",
      teamSize: "1 developer",
      status: "Live Production",
      tags: ["React", "Tailwind CSS", "Business", "Corporate", "Multi-page"],
      thumbnail: "/kodiero.png"
    }
  ];

  return (
    <>
      <SectionWrapper id="projects" title="Projects" subtitle="Selected portfolio work and solution concepts.">
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {enhancedProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-soft dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-violet-500 to-cyan-400 opacity-0 transition group-hover:opacity-100" />

              {/* Project Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} project thumbnail`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-4 md:p-5">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50">{project.title}</h3>
                <p className="mt-2 md:mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">{project.description}</p>

                <div className="mt-3 md:mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-500 dark:border-slate-700 dark:text-slate-300 md:px-3 md:py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="rounded-full border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-400 dark:border-slate-700 dark:text-slate-400 md:px-3 md:py-1.5">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-4 md:mt-5 flex items-center justify-between gap-3">
                  <motion.button
                    onClick={() => openModal(project)}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-100 dark:bg-brand-950/50 dark:text-brand-300 dark:hover:bg-brand-900/60 md:px-4 md:py-2"
                  >
                    View Details
                  </motion.button>

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 md:px-4 md:py-2"
                  >
                    <FaExternalLinkAlt className="h-3 w-3" />
                    Live
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}

export default Projects;
