import "./Footer.css";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-contact-container'>
                Girujan Naguleswaran
                <div className='icons-container'>
                    <a href='https://github.com/Girujan1998'>
                        <FaGithub size={'1.5em'} />
                    </a>
                    <a href='https://www.linkedin.com/in/girujan/'>
                        <FaLinkedin size={'1.5em'} />
                    </a>
                    <a href='https://www.facebook.com/th3r3algman/'>
                        <FaFacebookF size={'1.5em'} />
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
    )
}

export default Footer;