/* eslint-disable react-hooks/exhaustive-deps */
import "../assets/home.css";
import Homemain from "../assets/home-main.svg";
import avtar from '../assets/avatar.svg'
import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import { useState,useEffect } from "react";
function Home() {
        const words = [
            "MERN STACK DEVELOPER",
            "FREELANCER",
            "FRONTEND DEVELOPER",
            "BACKEND DEVELOPER"
        ];
    
        const [wordIndex, setWordIndex] = useState(0);
        const [letterIndex, setLetterIndex] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);
        const speed = 100; // Typing speed
        const delay = 1500; // Delay before deleting
    
        useEffect(() => {
            const currentWord = words[wordIndex];
    
            const updateText = () => {
                setLetterIndex((prevIndex) => {
                    if (!isDeleting && prevIndex === currentWord.length) {
                        setTimeout(() => setIsDeleting(true), delay);
                        return prevIndex;
                    } else if (isDeleting && prevIndex === 0) {
                        setIsDeleting(false);
                        setWordIndex((prevWordIndex) => (prevWordIndex + 1) % words.length);
                        return prevIndex;
                    }
    
                    return isDeleting ? prevIndex - 1 : prevIndex + 1;
                });
            };
    
            const typingTimer = setTimeout(updateText, isDeleting ? speed / 2 : speed);
    
            return () => clearTimeout(typingTimer);
        }, [letterIndex, isDeleting, wordIndex]);

  return (
    <>
      <div className="main">
        <div className="info">
          <h1>Hi There! 👋🏻</h1>
          <h1 className="inner-info">
            I&lsquo;M <span> ROHIT AHIR</span>
          </h1>
          <div className="text-container">
            {words[wordIndex].substring(0, letterIndex)}
            <span className="cursor">|</span>
        </div>
        </div>
        <div className="main-img">
          <img src={Homemain} alt="" />
        </div>
      </div>
      <div className="intro">
        <div className="intro-info">
          <h1>
            LET ME <span>INTRODUCE</span> MYSELF
          </h1>
          <br />
          <p>
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
          </p>
<br />
          <p>I am fluent in classics like <span>C++, Javascript and Go.</span></p>
<br />
          <p>
            My field of Interest&rsquo;s are building new <span> Web Technologies and
            Products </span>and also in areas related to <span>Blockchain.</span>
          </p>
<br />
          <p>
            Whenever possible, I also apply my passion for developing products
            with <span>Node.js</span> and <span>Modern Javascript Library and Frameworks </span>like
            <span>React.js and Next.js</span>
          </p>
        </div>
        <div className="intro-img">
            <img src={avtar} alt="" />
        </div>
      </div>
      <div className="find-me">
        <h1>FIND ME ON</h1>
        <p>Feel free to <span>connect</span> with me</p>
        <span> <a href="https://github.com/Rohit1185" target="_blank"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/rohitahir1126/" target="_blank"><FaLinkedin/></a>
        <a href="https://www.instagram.com/rohit_70_58/" target="_blank"><FaInstagram/></a>
        </span>
      </div>
      
        
    
    </>
  );
}
export default Home;
