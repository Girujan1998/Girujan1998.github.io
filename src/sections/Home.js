import './Home.css';

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
              <span className="t-cursor">▌</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
