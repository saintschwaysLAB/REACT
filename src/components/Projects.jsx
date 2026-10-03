import './Projects.css';

const projects = [
  { id: 1, title: 'To-Do App', desc: 'A simple task manager built with React.' },
  { id: 2, title: 'Weather UI', desc: 'A clean weather card layout.' },
  { id: 3, title: 'Portfolio', desc: 'This very website you are viewing.' },
];

function Projects() {
  return (
    <section>
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;