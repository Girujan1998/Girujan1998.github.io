import './About.css';

const SKILLS = [
  { category: 'Languages',    items: ['JavaScript', 'TypeScript', 'Python', 'Go', 'C#', 'C++', 'Java', 'SQL'] },
  { category: 'Frontend',     items: ['React', 'React Native', 'Next.js', 'HTML & CSS', 'LitElement'] },
  { category: 'Backend',      items: ['Django', 'REST APIs', 'Hypermedia API'] },
  { category: 'Database',     items: ['PostgreSQL'] },
  { category: 'Testing & QA', items: ['Test Automation', 'Jenkins', 'PyCharm'] },
  { category: 'Tools',        items: [ 'Claude', 'Git', 'GitHub', 'Postman', '.NET Framework', 'Dapper', 'Arduino']},
];

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">{"//"} 01</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A bit about who I am, what I build, and where I'm headed.</p>
        </div>

        <div className="about-grid">
          <div className="about-bio">
            <p>
              Hi! I'm Girujan, a passionate software engineer focused on building reliable,
              scalable, and user-friendly applications. I enjoy the entire software development
              lifecycle—from architecture and system design to deployment, monitoring, and
              continuous optimization in production.
            </p>
            <p>
              My experience spans web applications, REST APIs, distributed systems, and modern
              cloud-based platforms. I enjoy solving complex technical problems and collaborating
              with cross-functional teams to deliver high-quality software that creates real
              value for users.
            </p>
            <p>
              I'm also enthusiastic about leveraging AI to enhance the development process.
              Whether it's using large language models for rapid prototyping, accelerating
              development through AI-assisted coding, or experimenting with vibe coding to
              quickly validate ideas and build proof-of-concepts, I enjoy finding practical ways
              to combine engineering best practices with emerging technologies. At the same time,
              I believe in balancing AI-generated solutions with thoughtful architecture,
              rigorous testing, and maintainable code.
            </p>
            <p>
              Outside of work, you'll find me exploring new technologies, building side projects,
              contributing to open-source communities, and staying current with the latest
              developments in software engineering and AI. I'm always eager to learn, take on
              new challenges, and collaborate on innovative projects.
            </p>
            <p>
              I'm currently open to full-time software engineering opportunities and interesting
              freelance projects.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-num">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">2+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <p className="skills-heading">{"//"} Skills &amp; Technologies</p>
            <div className="skills-list">
              {SKILLS.map(({ category, items }) => (
                <div key={category} className="skill-row">
                  <span className="skill-cat">{category}</span>
                  <div className="skill-tags">
                    {items.map((item) => (
                      <span key={item} className="tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
