import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <section className='home-section'>
        <div className='intro'>
          <div className='intro-name'>
            HEY, THIS IS GIRUJAN NAGULESWARAN
          </div>
          <div className='intro-mini-summary'>
            I'm a Frontend and Fullstack Developer that enjoys creating
            interactive, responsive, and accessible web pages.
          </div>
        </div>
      </section>

      <section className='about-section'>
        <div className='about-me-info'>
            <h2 className='section-header'>ABOUT ME</h2>
            <h3>Stuff About Me</h3>
            <p>
              I'm a <span>Frontend and Fullstack Developer</span>, with experience working
              on frontend facing websites and backend architecture.
              I graduated from the <span>University of Waterloo</span> with a <span>Bachelor's Degree
              in Computer Engineering.</span>
            </p>
            <p>
              I am interested in career oppurtunities in <span>Web Development</span> where I have the
              oppurtuniy to contibute the knowledge I have garnered over
              the years and learn new skills.
            </p>
            <p>
              If you have a oppurtunity that I would be a good fit for, feel f
              ree to contact me. If you would like to contact me, you can
              Connect and Message me on <a href="https://www.linkedin.com/in/girujan/">LinkedIn</a>. 
              Additionally, if you would like to view my past and current 
              projects, you can view them on my <a href="https://github.com/Girujan1998">GitHub</a>.
            </p>

            <h3>My Skills</h3>
            <h4>Languages</h4>
            <div className='skill-blocks'>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>Python</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>C#</span>
              <span>SQL</span>
            </div>
            <h4>Frameworks / Libraries</h4>
            <div className='skill-blocks'>
              <span>React</span>
              <span>NextJS</span>
              <span>Django</span>
              <span>.Net Framework</span>
              <span>MySQL</span>
              <span>LitElement#</span>
              <span>Hypermedia API</span>
            </div>
            <h4>Technology</h4>
            <div className='skill-blocks'>
              <span>Git</span>
              <span>TortoiseSVN</span>
              <span>Docker</span>
              <span>Terminal</span>
            </div>
            <h4>Other</h4>
            <div className='skill-blocks'>
              <span>Headless CMS</span>
              <span>Responsive Design</span>
              <span>Agile Development</span>
              <span>SEO</span>
              <span>GitHub</span>
              <span>Frontend Web Development</span>
              <span>Fullstack Developemt</span>
              <span>API</span>
            </div>
        </div>
      </section>

      <section className='past-employment'>
        
      </section>


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Website under construction.
        </p>
      </header> */}
    </div>
  );
}

export default App;
