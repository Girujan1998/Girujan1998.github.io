import "./Home.css";

import { Link } from 'react-scroll';

import SkillBlocks from '../components/SkillBlocks';
import EmploymentCard from '../components/EmploymentCard';
import ContactForm from '../components/ContactForm';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const logo = require('../assets/eye-guide-image.png');

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    let routeChange = (path) => {
        window.open(path, "_blank")
    }

    const languages = [
        "JavaScript",
        "TypeScript",
        "Python",
        "HTML5",
        "CSS3",
        "C#",
        "SQL"
    ];

    const frameworks = [
        "React",
        "NextJS",
        "Django",
        ".Net Framework",
        "MySQL",
        "LitElement",
        "Hypermedia API"
    ];

    const technologies = [
        "Git",
        "TortoiseSVN",
        "Docker",
        "Terminal"
    ];

    const other = [
        "Headless CMS",
        "Responsive Design",
        "Agile Development",
        "SEO",
        "GitHub",
        "Frontend Web Development",
        "Fullstack Development",
        "API"
    ];

    const experiences = [
        {
            company: 'Arctic Wolf',
            position: 'Full Stack Developer',
            skills: ["React", "Go", "SQL"]
        },
        {
            company: 'D2L',
            position: 'Software Developer',
            skills: ["JavaScript", "LitElement", "C#", "Hypermedia API"]
        },
        {
            company: 'DOZR',
            position: 'Full Stack Developer',
            skills: ["React", "NextJS", "JavaScript", "TypeScript", "Headless CMS"]
        },
        {
            company: 'Soneil Electronics',
            position: 'Web Developer',
            skills: ["HTML5", "CSS3", "JavaScript"]
        },
        {
            company: 'SAP',
            position: 'Web Automation Developer',
            skills: ["Python", "SQL", "Batch", "QA", "Selenium"]
        },
    ];

    return (
        <div className="home">

            {/* Home Section */}

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

            {/* About Section */}

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
                    <SkillBlocks skills={languages} />
                    <h4>Frameworks / Libraries</h4>
                    <SkillBlocks skills={frameworks} />
                    <h4>Technologies</h4>
                    <SkillBlocks skills={technologies} />
                    <h4>Other</h4>
                    <SkillBlocks skills={other} />
                </div>
            </section>

            {/* Experience Section */}

            <section id="experience" className='past-employment-section'>
                <div className='past-employment-info'>
                    <h2 className='section-header'>PAST EXPERIENCE</h2>

                    <div className='employment-cards-container'>
                        {
                            experiences.map((experience) => {
                                return (
                                    <EmploymentCard experience={experience} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            {/* Projects Section */}

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
                        <button className='resource-button last-resource-button' onClick={() => navigate("eyeguide")}>
                            More Info
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}

            <section id="contact" className='contact-me-section'>
                <div className='contact-me-container'>
                    <h2 className='section-header'>CONTACT ME</h2>
                    <ContactForm />
                </div>
            </section>
        </div>
    )
}

export default Home;