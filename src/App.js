import './App.css';
import NavBar from './components/NavBar';
import { useState } from 'react';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import { Link } from 'react-scroll';

const logo = require('./assets/eye-guide-image.png');

function App() {

  const [, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f0f6cea6-3cbf-41a5-a454-141e8f4e102e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  let routeChange = (path) => {
    window.open(path, "_blank")
  }
  
  return (
    <div className="App">
      <NavBar></NavBar>

      <section id="home" className='home-section'>
        <div className='intro'>
          <div className='intro-name'>
            HEY, THIS IS GIRUJAN NAGULESWARAN
          </div>
          <div className='intro-mini-summary'>
            I'm a Frontend and Fullstack Developer that enjoys creating
            interactive, responsive, and accessible web pages.
          </div>
          <div className='home-buttons-container'>
            <div className='home-section-button'>
              <Link activeClass="active" smooth spy to="projects">
                Projects
              </Link>
            </div>
            <div className='home-section-button'>
              <Link activeClass="active" smooth spy to="contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className='about-section'>
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
              If you have a oppurtunity that I would be a good fit for me, feel 
              free to contact me. If you would like to contact me, you can
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
              <span>LitElement</span>
              <span>Hypermedia API</span>
            </div>
            <h4>Technologies</h4>
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

      <section id="experience" className='past-employment-section'>
        <div className='past-employment-info'>
          <h2 className='section-header'>PAST EXPERIENCE</h2>

          <div className='employment-cards-container'>
            <div className='employment-card'>
              <h3>Arctic Wolf</h3>
              <h4>Full Stack Developer</h4>
              <div>
                <div className='item-block'>
                  <span>React</span>
                  <span>Go</span>
                  <span>SQL</span>
                </div>
              </div>
            </div>
            <div className='employment-card'>
              <h3>D2L</h3>
              <h4>Software Developer</h4>
              <div>
                <div className='item-block'>
                  <span>JavaScript</span>
                  <span>LitElement</span>
                  <span>C#</span>
                  <span>Hypermedia API</span>
                </div>
              </div>
            </div>
            <div className='employment-card'>
              <h3>DOZR</h3>
              <h4>Full Stack Developer</h4>
              <div>
                <div className='item-block'>
                  <span>React</span>
                  <span>NextJS</span>
                  <span>JavaScript</span>
                  <span>TypeScript</span>
                  <span>Headless CMS</span>
                </div>
              </div>
            </div>
            <div className='employment-card'>
              <h3>Soneil Electronics</h3>
              <h4>Web Developer</h4>
              <div>
                <div className='item-block'>
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
            <div className='employment-card'>
                <h3>SAP</h3>
                <h4>Web Automation Developer</h4>
                <div>
                  <div className='item-block'>
                    <span>Python</span>
                    <span>SQL</span>
                    <span>Batch</span>
                    <span>QA</span>
                    <span>Selenium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      <section id="projects" className='projects-section'>
        <div className='projects-container'>
          <h2 className='section-header'>PROJECTS</h2>
          <img className='eye-guide-image' alt="Android phone screen with app homescreen" src={logo}></img>
          <h3>Eye Guide</h3>
          <p>
            Eye Guide is a Android application, which serves as indoor 
            navigation for the visually impaired. It was developed in
            React Native with JavaScript and in Django with Python.
          </p>
          <div className='resource-buttons-container'>
            <button className='resource-button' onClick={() => routeChange("https://github.com/Girujan1998/EyeGuide")}>
              Frontend Repo
            </button>
            <button className='resource-button' onClick={() => routeChange("https://github.com/Girujan1998/EyeGuide-backend")}>
              Backend Repo
            </button>
            <button className='resource-button last-resource-button'>
              More Info
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className='contact-me-section'>
        <div className='contact-me-container'>
          <h2 className='section-header'>CONTACT ME</h2>
          <form onSubmit={onSubmit}>
            <div className='input-field'>
              <label>Name</label>
              <input name="name" type='text' className='field' placeholder='Enter your name' required/>
            </div>
            <div className='input-field'>
              <label>Email</label>
              <input name="email" type='email' className='field' placeholder='Enter your email' required/>
            </div>
            <div className='input-field'>
              <label>Message</label>
              <textarea name='message' type='text' className='field message-box' placeholder='Enter your message' required/>
            </div>
            <button type='submit'>Send Message</button>
          </form>
        </div>
      </section>

      <footer className='footer'>
        <div className='footer-contact-container'>
          Girujan Naguleswaran
          <div className='icons-container'>
            <a href='https://github.com/Girujan1998'>
              <FaGithub size={'1.5em'}/>
            </a>
            <a href='https://www.linkedin.com/in/girujan/'>
              <FaLinkedin size={'1.5em'}/>
            </a>
            <a href='https://www.facebook.com/th3r3algman/'>
              <FaFacebookF size={'1.5em'}/>
            </a>
          </div>
        </div>
        <div className='divider-line'></div>
        <div className='footer-nav-container'>
          <div className='link-item'>
            <Link activeClass="active" smooth spy to="home">
              Home
            </Link>
          </div>
          <div className='link-item'>
            <Link activeClass="active" smooth spy to="about">
              About
            </Link>
          </div>
          <div className='link-item'>
            <Link activeClass="active" smooth spy to="experience">
              Experience
            </Link>
          </div>
          <div className='link-item'>
            <Link activeClass="active" smooth spy to="projects">
              Projects
            </Link>
          </div>
          <div className='link-item'>
            <Link activeClass="active" smooth spy to="contact">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
