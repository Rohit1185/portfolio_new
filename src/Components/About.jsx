import pre from '../assets/about.png'
import postman from '../assets/git.png'
import vscode from '../assets/vscode.png'
import github from '../assets/github.png'
import '../assets/about.css'
function About(){
    return(
        <>
            <div className="about-main">
                <div className="about-info">
                    <h1 >Know Who <strong>I&rsquo;M</strong></h1>
                    <p>Hi Everyone, I am <strong> Rohit Ahir</strong> from <strong> Ahmedabad,</strong> India</p>
                    
                    <p>I have completed Bechlore of Computer Application (BCA) at GLS University.</p>
                    <p>Ahmedabad</p>
                    <br />
                    <br />
                    <p>Apart from coding, some other activities that I love to do!</p>
                    
                        <p className='p'>Playing Games</p>
                        <p className='p'>Writing tech blogs</p>
                        <p className='p'>Travelling</p>
                    
                </div>
                <div className="about-img">
                    <img src={pre} alt="" />
                </div>
            </div>
            <div className='skill-main'>
                <h1>Professional <strong>Skillset</strong></h1>
                <div className='skill-icon'>
                    <div  className='skills'>Python</div>
                    <div className='skills'>JS</div>
                    <div className='skills'>Node JS</div>
                    <div className='skills'>Exprees JS</div>
                </div>
                <div className='skill-icon'>
                    <div  className='skills'>React</div>
                    <div className='skills'>HTML</div>
                    <div className='skills'>CSS</div>
                    <div className='skills'>PHP</div>
                </div>
                <h1><strong>Tools</strong> I use</h1>
                <div className='skill-icon'>
                    <div className='skills'><img src={postman} alt="" /></div>
                    <div className='skills'><img src={github} alt="" /></div>
                    <div className='skills'><img src={vscode} alt="" /></div>

                </div>
            </div>
        </>
    )
}
export default About;