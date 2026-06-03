import './Home.css';

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function IconGitHub() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function Home() {
  return (
    <section id="home" className="home section">
      <div className="container home-container">

        <div className="home-content">
          <p className="home-greeting">
            <span className="prompt">$</span>&nbsp;whoami
          </p>
          <h1 className="home-name">
            Girujan<br />Naguleswaran
          </h1>
          <p className="home-title">
            Software Engineer <span className="title-sep">&amp;</span> Full Stack Developer
          </p>
          <p className="home-description">
            Building scalable systems and elegant user experiences. Passionate about clean
            architecture, distributed systems, and writing code that lasts.
          </p>
          <div className="home-cta">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View Projects
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Contact Me
            </button>
          </div>
          <div className="home-status">
            <span className="status-dot" />
            <span className="status-text">Available for new opportunities</span>
          </div>

          <div className="home-socials">
            <a
              href="https://github.com/Girujan1998"
              className="social-link"
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="Girujan Naguleswaran on GitHub"
            >
              <IconGitHub />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/girujan/"
              className="social-link"
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="Girujan Naguleswaran on LinkedIn"
            >
              <IconLinkedIn />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="home-terminal" aria-hidden="true">
          <div className="terminal-bar">
            <span className="tdot tdot-red" />
            <span className="tdot tdot-yellow" />
            <span className="tdot tdot-green" />
            <span className="terminal-title">girujan@portfolio ~ zsh</span>
          </div>
          <div className="terminal-body">
            <div className="t-line">
              <span className="t-prompt">❯</span>
              <span className="t-cmd"> cat about.txt</span>
            </div>
            <div className="t-output">
              <p><span className="t-key">Name</span><span className="t-sep">:</span> Girujan Naguleswaran</p>
              <p><span className="t-key">Role</span><span className="t-sep">:</span> Software Engineer</p>
              <p><span className="t-key">Location</span><span className="t-sep">:</span> Ontario, Canada</p>
              <p><span className="t-key">Focus</span><span className="t-sep">:</span> Full Stack Development</p>
              <p><span className="t-key">Status</span><span className="t-sep">:</span> <span className="t-green">Available</span></p>
            </div>
            <div className="t-line">
              <span className="t-prompt">❯</span>
              <span className="t-cmd"> ls skills/</span>
            </div>
            <div className="t-output t-skills">
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>Python</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Go</span>
              <span>Docker</span>
              <span>PostgreSQL</span>
              <span>Claude</span>
            </div>
            <div className="t-line">
              <span className="t-prompt">❯</span>
              <span className="t-cmd"> cat links.txt</span>
            </div>
            <div className="t-output t-links">
              <a href="https://github.com/Girujan1998" target="_blank" rel="me noopener noreferrer">
                <span className="t-key">GitHub</span>
                <span className="t-sep">→</span>
                <span>github.com/Girujan1998</span>
              </a>
              <a href="https://www.linkedin.com/in/girujan/" target="_blank" rel="me noopener noreferrer">
                <span className="t-key">LinkedIn</span>
                <span className="t-sep">→</span>
                <span>linkedin.com/in/girujan</span>
              </a>
            </div>
            <div className="t-line">
              <span className="t-prompt">❯</span>
              <span className="t-cursor">▌</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
