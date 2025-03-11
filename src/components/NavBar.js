import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';
import HamburgerNav from './HamburgerNav';
import Hamburger from 'hamburger-react';
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const navigate = useNavigate();

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-left'>
                    <a href='/' className='logo'>
                        Girujan Naguleswaran
                    </a>
                </div>
                <div className='navbar-right'>
                    <ul className='nav-links'>
                        {
                            window.location.pathname === "/" ?
                                <>
                                    <li>
                                        <Link activeClass="active" smooth spy to="home">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link activeClass="active" smooth spy to="about">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link activeClass="active" smooth spy to="experience">
                                            Experience
                                        </Link>
                                    </li>
                                    <li>
                                        <Link activeClass="active" smooth spy to="projects">
                                            Projects
                                        </Link>
                                    </li>
                                    <li className='last-link'>
                                        <Link activeClass="active" smooth spy to="contact">
                                            Contact
                                        </Link>
                                    </li>
                                </>

                                :

                                <>
                                    <li className='last-link' onClick={() => navigate("/")}>
                                        Go Back
                                    </li>
                                </>
                        }

                    </ul>
                </div>
                <div className='hamburger-button'>
                    <Hamburger toggled={hamburgerOpen} toggle={setHamburgerOpen} />
                </div>
            </nav>
            {hamburgerOpen ? <HamburgerNav close={setHamburgerOpen} /> : <></>}
        </>
    )
}

export default NavBar;