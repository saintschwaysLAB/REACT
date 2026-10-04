const projects = [
  { id: 1, title: 'To-Do App', desc: 'A simple task manager built with React.' },
  { id: 2, title: 'Weather UI', desc: 'A clean weather card layout.' },
  { id: 3, title: 'Portfolio', desc: 'This very website you are viewing.' },
];

function Projects() {
  return (
    <section id="projects" className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-blue-200">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:-translate-y-1 transition-transform"
          >
            <h3 className="text-purple-700 dark:text-purple-300 font-semibold mb-2">
              {p.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;