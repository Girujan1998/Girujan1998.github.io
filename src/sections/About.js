import './About.css';

const SKILLS = [
  { category: 'Languages',    items: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Java'] },
  { category: 'Frontend',     items: ['React', 'Next.js', 'HTML & CSS', 'Tailwind', 'Redux'] },
  { category: 'Backend',      items: ['Node.js', 'Express', 'FastAPI', 'GraphQL', 'REST'] },
  { category: 'Database',     items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'] },
  { category: 'Tools',        items: ['Git', 'Figma', 'VS Code', 'Postman', 'Jira'] },
];

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">// 01</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-bio">
            <p>
              Hi! I'm Girujan, a passionate software engineer focused on building reliable,
              scalable, and user-friendly applications. I enjoy the full lifecycle of software
              development — from architecture and system design all the way through to
              deployment and production optimization.
            </p>
            <p>
              Over the years I've worked across a variety of domains, including web platforms,
              REST and GraphQL APIs, and distributed systems. I thrive in collaborative
              environments and am always looking for new challenges that push my technical
              boundaries.
            </p>
            <p>
              Outside of work you'll find me exploring new technologies, contributing to open
              source, or diving into a good engineering blog. I'm currently open to full-time
              roles and interesting freelance projects.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-num">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">10+</span>
                <span className="stat-label">Projects Shipped</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <p className="skills-heading">// Skills &amp; Technologies</p>
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
