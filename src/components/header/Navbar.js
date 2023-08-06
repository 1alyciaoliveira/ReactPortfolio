import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
               
                <Link className='nav-link' to='/about-me'>
                    <p>About Me</p>
                </Link>
                <Link className='nav-link' to='/portfolio'>
                    <p>Portfolio</p>
                </Link>
                <Link className='nav-link' to='/contact'>
                    <p>Contact</p>
                </Link>
                <Link className='nav-link' to='/resume'>
                    <p>Resume</p>
                </Link>

            </ul>
        </nav>
    );
};

export default Navbar;

