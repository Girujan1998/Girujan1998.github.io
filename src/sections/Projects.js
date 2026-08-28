import { useNavigate } from 'react-router-dom';
import { PROJECT_GROUPS } from '../data/projects';
import './Projects.css';

function IconFuel() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="22" x2="15" y2="22" />
      <line x1="4" y1="9" x2="14" y2="9" />
      <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2 2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
    </svg>
  );
}

function IconWhiteCane() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="4" r="1.9" />
      <path d="M9 6.2V13" />
      <path d="M9 8 6.2 10.5" />
      <path d="M9 8l2.8 3" />
      <path d="M9 13l-2.4 7.5" />
      <path d="M9 13l2.4 3.5-0.4 4" />
      <path d="M11.8 11 19 21" strokeWidth="1.15" />
    </svg>
  );
}

const ICONS = { fuel: IconFuel, 'white-cane': IconWhiteCane };

function IconGitHub() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">{"//"} 03</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Grouped by project, with an overview and every repo that makes it up.
          </p>
        </div>

        <div className="project-groups">
          {PROJECT_GROUPS.map((group) => {
            const Icon = ICONS[group.icon];
            return (
              <article key={group.name} className="project-group">
                <div className="pg-head">
                  <span className="pg-icon">{Icon && <Icon />}</span>
                  <div className="pg-heading">
                    <h3 className="pg-name">{group.name}</h3>
                    <p className="pg-tagline">{group.tagline}</p>
                  </div>
                  {group.repos.length > 0 && (
                    <div className="pg-repos-links">
                      {group.repos.map((repo) => (
                        <a
                          key={repo.url}
                          href={repo.url}
                          className="pg-repo"
                          target="_blank"
                          rel="noreferrer"
                          title="View repository on GitHub"
                        >
                          <IconGitHub />
                          {repo.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <p className="pg-description">{group.description}</p>

                <div className="pg-stack">
                  {group.stack.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>

                <div className="pg-parts">
                  {group.parts.map((part) => (
                    <div
                      key={part.slug}
                      className="part-card"
                      onClick={() => navigate(`/projects/${part.slug}`)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && navigate(`/projects/${part.slug}`)}
                    >
                      <div className="part-top">
                        <span className="part-kind">{part.kind}</span>
                        <a
                          href={part.github}
                          className="proj-link"
                          title="View on GitHub"
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <IconGitHub />
                        </a>
                      </div>

                      <p className="part-blurb">{part.blurb}</p>

                      <div className="part-stack">
                        {part.stack.map((tech) => (
                          <span key={tech} className="tag sm">{tech}</span>
                        ))}
                      </div>

                      <span className="part-cta">View details →</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
