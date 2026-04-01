import SectionWrapper from "./SectionWrapper.jsx";

function Skills({ groups }) {
  return (
    <SectionWrapper id="skills" title="Skills" subtitle="Technical strengths and professional capabilities.">
      <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-slate-50">{group.title}</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200 md:px-4 md:py-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Skills;
