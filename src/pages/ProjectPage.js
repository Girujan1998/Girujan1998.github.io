import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import './ProjectPage.css';

function IconGitHub() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function IconArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.slug === slug);
  const related = project ? PROJECTS.find((p) => p.slug === project.related) : null;

  if (!project) {
    return (
      <div className="pp-not-found">
        <p>Project not found.</p>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>← Back to Portfolio</button>
      </div>
    );
  }

  return (
    <div className="pp-wrapper">
      <header className="pp-topbar">
        <div className="pp-topbar-inner">
          <button className="pp-back" onClick={() => navigate('/')}>
            <IconArrowLeft />
            <span>Back to Portfolio</span>
          </button>
          <a href={project.github} className="btn btn-secondary pp-github-btn" target="_blank" rel="noreferrer">
            <IconGitHub />
            View on GitHub
          </a>
        </div>
      </header>

      <main className="pp-main">
        <div className="pp-container">

          <section className="pp-hero">
            <p className="pp-tagline">{project.tagline}</p>
            <h1 className="pp-title">{project.name}</h1>
            <div className="pp-stack">
              {project.stack.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </section>

          <section className="pp-section">
            <h2 className="pp-section-title">Overview</h2>
            {project.overview.map((para, i) => (
              <p key={i} className="pp-body">{para}</p>
            ))}
          </section>

          <section className="pp-section">
            <h2 className="pp-section-title">Key Features</h2>
            <ul className="pp-features">
              {project.features.map((f, i) => (
                <li key={i}>
                  <span className="pp-bullet">›</span>
                  {f}
                </li>
              ))}
            </ul>
          </section>

          <section className="pp-section pp-links-section">
            <a href={project.github} className="btn btn-primary" target="_blank" rel="noreferrer">
              <IconGitHub />
              View Source on GitHub
            </a>
            {related && (
              <button className="btn btn-secondary" onClick={() => navigate(`/projects/${related.slug}`)}>
                {project.relatedLabel}
              </button>
            )}
          </section>

        </div>
      </main>
    </div>
  );
}

export default ProjectPage;
