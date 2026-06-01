import './Projects.css';

const PROJECTS = [
  {
    name: 'DevConnect',
    description:
      'A professional networking platform for developers. Features real-time chat, project collaboration rooms, and a global code-snippet feed.',
    stack: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis'],
    github: '#',
    live: '#',
  },
  {
    name: 'CodeFlow',
    description:
      'Visual code review tool that makes PR reviews faster and more intuitive, with inline comments, diff visualization, and team workflows.',
    stack: ['TypeScript', 'React', 'GraphQL', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    name: 'ByteStream',
    description:
      'High-throughput real-time data pipeline capable of processing millions of events per second, built for financial data streaming use cases.',
    stack: ['Go', 'Kafka', 'ClickHouse', 'Docker', 'Kubernetes'],
    github: '#',
    live: null,
  },
  {
    name: 'CloudDash',
    description:
      'Infrastructure monitoring dashboard that aggregates metrics from multiple cloud providers into a single unified view with alert support.',
    stack: ['Python', 'FastAPI', 'React', 'AWS', 'Prometheus'],
    github: '#',
    live: '#',
  },
  {
    name: 'QueryMind',
    description:
      'AI-powered SQL assistant that converts natural language questions into optimized database queries with full schema awareness.',
    stack: ['Python', 'OpenAI API', 'PostgreSQL', 'Next.js'],
    github: '#',
    live: '#',
  },
  {
    name: 'SecureVault',
    description:
      'Zero-knowledge password manager with end-to-end encryption. All data is encrypted client-side before reaching the server.',
    stack: ['TypeScript', 'React Native', 'Node.js', 'Web Crypto API'],
    github: '#',
    live: null,
  },
];

function IconCode() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">// 03</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A selection of things I've built — from production systems to side projects.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div key={project.name} className="project-card">
              <div className="project-card-top">
                <span className="project-icon"><IconCode /></span>
                <div className="project-links">
                  <a href={project.github} className="proj-link" title="View on GitHub" target="_blank" rel="noreferrer">
                    <IconGitHub />
                  </a>
                  {project.live && (
                    <a href={project.live} className="proj-link" title="Live demo" target="_blank" rel="noreferrer">
                      <IconExternal />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
