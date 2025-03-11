import React from 'react';
import './HamburgerNav.css';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const HamburgerNav = (props) => {

    const navigate = useNavigate();

    const backNavigation = () => {
        props.close(false);
        navigate("/");
    }

    return (
        <div className='hamburger'>
            {
                window.location.pathname === "/" ?
                    <>
                        <div className='burger-item'>
                            <Link className='burger-link' onClick={() => props.close(false)} activeClass="active" smooth spy to="home">
                                Home
                            </Link>
                        </div>
                        <div className='burger-item'>
                            <Link className='burger-link' onClick={() => props.close(false)} activeClass="active" smooth spy to="about">
                                About
                            </Link>
                        </div>
                        <div className='burger-item'>
                            <Link className='burger-link' onClick={() => props.close(false)} activeClass="active" smooth spy to="experience">
                                Experience
                            </Link>
                        </div>
                        <div className='burger-item'>
                            <Link className='burger-link' onClick={() => props.close(false)} activeClass="active" smooth spy to="projects">
                                Projects
                            </Link>
                        </div>
                        <div className='burger-item'>
                            <Link className='burger-link' onClick={() => props.close(false)} activeClass="active" smooth spy to="contact">
                                Contact
                            </Link>
                        </div>
                    </>
                    :
                    <div className='burger-item'>
                        <Link className='burger-link' onClick={() => backNavigation()} activeClass="active">
                            Go Back
                        </Link>
                    </div>
            }
        </div>
    )
}

export default HamburgerNav;