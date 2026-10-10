const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Git', 'GitHub'];

function Skills() {
  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-blue-200">
        Skills
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <span
            key={s}
            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-4 py-2 rounded-full text-sm font-medium"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;