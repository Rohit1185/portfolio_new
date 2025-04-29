import { NavLink } from "react-router";
import '../assets/nav.css'
import { FaAddressBook, FaFile, FaFileContract, FaHome, FaProjectDiagram } from "react-icons/fa";
import resume from '../../public/Rohit_Resume_3-4.pdf'
function Nav(){
    return(
        <>
            <nav>
                <ul>
                    <li><NavLink to='/'><FaHome/> Home </NavLink></li>
                    <li><NavLink to='/about'><FaAddressBook/>About </NavLink></li>
                    <li><NavLink to='/Project'><FaProjectDiagram/> Projects </NavLink></li>
                    <li><NavLink to='/contact'><FaFileContract/>Contact </NavLink></li>
                    <li> <a href={resume} target="_blank" rel="noopener noreferrer"><FaFile/> View Resume</a></li>
                </ul>
            </nav>
        </>
    )
}
export default Nav;