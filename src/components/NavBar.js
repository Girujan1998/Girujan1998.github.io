import React from 'react';
import './NavBar.css';

const NavBar = () => {

    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <a href='/' className='logo'>
                    Girujan Naguleswaran
                </a>
            </div>
            <div className='navbar-right'>
                <ul className='nav-links'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;