import './Experience.css';

const EXPERIENCE = [
  {
    role: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    period: 'Jan 2022 — Present',
    type: 'Full-time',
    description:
      'Leading development of a distributed microservices platform serving millions of users. Architecting core infrastructure, driving reliability to 99.9% uptime, and mentoring a team of five engineers.',
    highlights: [
      'Redesigned event-driven pipeline, reducing end-to-end latency by 40%',
      'Led migration from monolith to microservices architecture across 8 services',
      'Introduced automated testing practices, lifting coverage from 20% to 85%',
      'Collaborated with product and design to ship three major features per quarter',
    ],
    stack: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Kafka', 'AWS', 'Docker'],
  },
  {
    role: 'Software Engineer',
    company: 'StartupXYZ',
    period: 'Jun 2020 — Dec 2021',
    type: 'Full-time',
    description:
      'Full-stack engineer on a B2B SaaS product. Built customer-facing features, internal tooling, and third-party integrations in a fast-paced agile environment.',
    highlights: [
      'Built end-to-end billing and subscription system integrating Stripe',
      'Reduced page load times by 60% through code splitting and caching strategies',
      'Shipped admin dashboard now used by 200+ enterprise clients',
      'Integrated OAuth providers and SendGrid for transactional email',
    ],
    stack: ['JavaScript', 'React', 'Python', 'Django', 'MySQL', 'Redis'],
  },
  {
    role: 'Junior Developer',
    company: 'DevAgency',
    period: 'Sep 2019 — May 2020',
    type: 'Full-time',
    description:
      'Developed client websites and custom web applications for small-to-medium businesses. Collaborated closely with designers and project managers to deliver on time.',
    highlights: [
      'Built and launched six client websites using React and WordPress',
      'Developed custom CMS integrations for e-commerce clients',
      'Participated in code reviews and contributed to team coding standards',
    ],
    stack: ['JavaScript', 'React', 'PHP', 'WordPress', 'HTML & CSS'],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">// 02</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey so far.</p>
        </div>

        <div className="timeline">
          {EXPERIENCE.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-rail">
                <div className="rail-dot" />
                {index < EXPERIENCE.length - 1 && <div className="rail-line" />}
              </div>

              <div className="exp-card">
                <div className="exp-header">
                  <div className="exp-title-group">
                    <h3 className="exp-role">{job.role}</h3>
                    <p className="exp-company">
                      <span className="at">@</span> <span className="company-name">{job.company}</span>
                    </p>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">{job.period}</span>
                    <span className="tag exp-type">{job.type}</span>
                  </div>
                </div>

                <p className="exp-description">{job.description}</p>

                <ul className="exp-highlights">
                  {job.highlights.map((point, i) => (
                    <li key={i}>
                      <span className="bullet">›</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="exp-stack">
                  {job.stack.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
