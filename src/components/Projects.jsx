import { useState } from 'react';

const projects = [
  { id: 1, title: 'To-Do App', desc: 'A simple task manager.', tag: 'React' },
  { id: 2, title: 'Weather UI', desc: 'A weather card layout.', tag: 'CSS' },
  { id: 3, title: 'Portfolio', desc: 'This website.', tag: 'React' },
  { id: 4, title: 'Landing Page', desc: 'A responsive landing page.', tag: 'Tailwind' },
];

function Projects() {
  const [filter, setFilter] = useState('All');
  const tags = ['All', 'React', 'CSS', 'Tailwind'];
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.tag === filter);

  return (
    <section id="projects" className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-blue-200">
        My Projects
      </h2>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
              filter === t
                ? 'bg-purple-700 text-white'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:-translate-y-1 transition-transform"
          >
            <h3 className="text-purple-700 dark:text-purple-300 font-semibold mb-2">
              {p.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{p.desc}</p>
            <span className="text-xs text-purple-500 mt-2 inline-block">{p.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;