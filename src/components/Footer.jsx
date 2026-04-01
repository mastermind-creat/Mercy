import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-200/80 py-8 dark:border-slate-800">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row dark:text-slate-400">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Chelangat Mercy. Crafted with precision and purpose.
        </p>
        <div className="flex items-center gap-4 text-lg">
          <a
            href="mailto:cmursoy@gmail.com"
            className="rounded-full border border-slate-200 p-2 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:hover:text-brand-400"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/chelangat-m-065609185/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200 p-2 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:hover:text-brand-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="rounded-full border border-slate-200 p-2 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:hover:text-brand-400"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
