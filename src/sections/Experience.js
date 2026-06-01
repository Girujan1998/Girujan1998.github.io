import './Experience.css';

const EXPERIENCE = [
  {
    role: 'Full Stack Developer',
    company: 'Arctic Wolf',
    period: 'Sep 2022 — Dec 2022',
    type: 'Co-op',
    location: 'Kitchener, Ontario, Canada',
    highlights: [
      'Updated API calls in Go to remove usage of deprecated fields from the Postgres database',
      'Modified SQL queries to retrieve data with filters based on senior leadership\'s specifications',
      'Developed a React UI for an internal tool to manage team and individual employee online training completion statistics',
    ],
    stack: ['React', 'Go', 'PostgreSQL', 'SQL'],
  },
  {
    role: 'Software Developer',
    company: 'D2L',
    period: 'Jan 2022 — Apr 2022',
    type: 'Co-op',
    location: 'Kitchener, Ontario, Canada',
    highlights: [
      'Developed features for the new evaluation experience release using JavaScript and the LitElement library',
      'Diagnosed and resolved UI and API defects in C#, JavaScript, and the Hypermedia API',
      'Provided extensive code reviews regarding architecture, design, and developing flexible code',
    ],
    stack: ['JavaScript', 'LitElement', 'C#', 'Hypermedia API', 'CSS'],
  },
  {
    role: 'Full Stack Developer',
    company: 'DOZR',
    period: 'Jan 2021 — May 2021',
    type: 'Co-op',
    location: 'Waterloo, Ontario, Canada',
    highlights: [
      'Spearheaded migration of architecture from React to Next.js and TypeScript',
      'Researched, developed, integrated, and implemented a headless CMS into existing and new code infrastructure',
      'Developed 404, blog, and search pages using JavaScript, HTML5, CSS3, and API calls, ensuring page responsiveness and low latency',
      'Debugged and resolved over 50 bugs to ensure release of new webpage design',
      'Effectively communicated information between the engineering and marketing teams',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    role: 'Web Developer',
    company: 'Soneil Electronics',
    period: 'Jun 2020 — Sep 2020',
    type: 'Co-op',
    location: 'Brampton, Ontario, Canada',
    highlights: [
      'Developed responsive webpages for customer usage using HTML5, CSS3, and JavaScript',
      'Consistently tested UI and functionality to ensure multi-screen size compatibility and a smooth user experience',
      'Documented website components to assist end users in navigating the webpages',
    ],
    stack: ['JavaScript', 'HTML5', 'CSS3'],
  },
  {
    role: 'Software Test Automation Developer',
    company: 'Senstar',
    period: 'Sep 2019 — Dec 2019',
    type: 'Co-op',
    location: 'Waterloo, Ontario, Canada',
    highlights: [
      'Used OOP to develop a new automation structure for Windows applications with C# and .NET Framework',
      'Implemented Dapper framework to manipulate SQL databases using C#',
      'Set up Jenkins jobs for nightly automation and reviewed failed builds',
      'Worked within an Agile development cycle',
      'Debugged and resolved multiple build issues related to SDKs, NuGet packages, and DLLs',
    ],
    stack: ['C#', '.NET Framework', 'Dapper', 'SQL', 'Jenkins'],
  },
  {
    role: 'QA Automation Engineer',
    company: 'SAP',
    period: 'Jan 2019 — Apr 2019',
    type: 'Co-op',
    location: 'Waterloo, Ontario, Canada',
    highlights: [
      'Designed and implemented a nightly automated testing project using SQL, Python, and Batch to auto-run tests after hours',
      'Provided frequent and thorough code reviews for other team members',
      'Supervised co-ops and assisted them with debugging issues in Python',
      'Efficiently managed time to consistently complete multiple tasks and assist co-ops',
    ],
    stack: ['Python', 'SQL', 'Batch'],
  },
  {
    role: 'Content Developer',
    company: 'Chartwell Retirement Residences',
    period: 'May 2018 — Aug 2018',
    type: 'Contract',
    location: 'Mississauga, Ontario, Canada',
    highlights: [
      'Created multiple content documents for more than 120 properties',
      'Created and uploaded more than 120 YouTube videos marketing different residence properties',
      'Developed a Batch script to rename over 2000 images to specified names, reducing manual work by more than half',
      'Analyzed web pages for all properties and reported defects and enhancements',
    ],
    stack: ['Batch', 'Content Development'],
  },
  {
    role: 'QA Automation Engineer',
    company: 'SAP',
    period: 'Jan 2018 — Apr 2018',
    type: 'Co-op',
    location: 'Waterloo, Ontario, Canada',
    highlights: [
      'Designed and developed automated test cases using PyCharm to verify UI and functionalities of specific regions',
      'Created detailed test cases and actively tested multiple versions of SAP HANA HRTT',
      'Communicated effectively with managers and developers to ensure productivity',
    ],
    stack: ['Python', 'PyCharm', 'SAP HANA'],
  },
  {
    role: 'QA Analyst',
    company: 'Climax Media Inc',
    period: 'Jan 2017 — Apr 2017',
    type: 'Co-op',
    location: 'Toronto, Ontario, Canada',
    highlights: [
      'Managed time effectively to ensure completion of multiple projects with strict deadlines',
      'Communicated with developers and team leads to ensure correct testing requirements',
      'Developed detailed test specs to be implemented with automation',
      'Created detailed error reports within GitHub covering web page layout, database, and code',
    ],
    stack: ['GitHub', 'Software Testing'],
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
                    <span className="exp-location">{job.location}</span>
                  </div>
                </div>

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
