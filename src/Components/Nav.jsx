import { useState } from "react";
import { NavLink } from "react-router";
import '../assets/nav.css';
import { FaBars, FaTimes, FaAddressBook, FaFile, FaFileContract, FaHome, FaProjectDiagram } from "react-icons/fa";
import resume from '../assets/Rohit_Resume_3-4.pdf';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav>
            <div className="nav-container">
                <div className="hamburger" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li onClick={closeMenu}><NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li onClick={closeMenu}><NavLink to='/about'><FaAddressBook /> About</NavLink></li>
                    <li onClick={closeMenu}><NavLink to='/Project'><FaProjectDiagram /> Projects</NavLink></li>
                    <li onClick={closeMenu}><NavLink to='/contact'><FaFileContract /> Contact</NavLink></li>
                    <li onClick={closeMenu}><a href={resume} target="_blank" rel="noopener noreferrer"><FaFile /> View Resume</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
