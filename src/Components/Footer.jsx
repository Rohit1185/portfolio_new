import "../assets/home.css";
import '../assets/Footer.css';
import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
function Footer(){
    return(
        <>
            <div className="footer">
                <p>Develop By Rohit</p>
                <p>MERN STACK DEVELOPER</p>
                <p>
                            <span>
                            <a href="https://github.com/Rohit1185" target="_blank"><FaGithub/></a>
                            <a href="https://www.linkedin.com/in/rohitahir1126/" target="_blank"><FaLinkedin/></a>
                            <a href="https://www.instagram.com/rohit_70_58/" target="_blank"><FaInstagram/></a>
                            </span>
                </p>
            </div>
        </>
    )
}
export default Footer;