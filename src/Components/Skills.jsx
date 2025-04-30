import '../assets/skills.css';
import projectImage from '../assets/porter-2.png';
import pet from '../assets/adopt.png'
import promise from '../assets/promise.png'
import github from '../assets/github.png'
function Skills() {
    
    return (
        <div className='skills-section'>
            <h1>Projects <strong>Skillset</strong></h1>
            <div className='skills-container'>
                <div className='skill-card'>
                    <div className='skill-content'>
                        <img src={projectImage} alt="Project" className='cargo-img' />
                        <h2>Cargo Lift Website</h2>
                        <p>
The Cargo Lift Platform helps users book cargo transport and supports drivers in managing trips, vehicles, and earnings. Users can request lifts and track bookings, while drivers can view trips, manage vehicles, and generate invoices.</p>
                        <p><strong>Tools:</strong> <br /> React, Node.js, Express.js, MongoDB</p>
                        <a id='githubp' href='https://github.com/Rohit1185' target='_blank'><img src={github} id='github' alt=""/></a>
                    </div>
                </div>
                <div className='skill-card'>
                <div className='skill-content'>
                        <img src={pet} alt="Project" className='pet-img' />
                        <h2>Pet Adoption Website</h2>
                        <p>The Pet Adoption Platform helps people adopt pets and supports shelters in managing adoptions, donations, and events. Users can find pets, submit requests, and donate, while shelters can list pets and track activities.</p>
                        <p><strong>Tools:</strong> <br /> React, Node.js, Express.js, MongoDB</p>
                        <a id='githubp' href='https://github.com/Rohit1185/pet' target='_blank'><img src={github} id='github' alt=""/></a>
                    </div>
                </div>
                <div className='skill-card'>
                <div className='skill-content'>
                        <img src={promise} alt="Project" className='pet-img'/>
                        <h2>EduManage Website</h2>
                        <p>EduManage helps institutes manage student records, faculty, and academic operations. Admins can handle inquiries, track student progress, and manage staff, while faculty can update student data and view schedules</p>
                        <p><strong>Tools:</strong> <br /> React, Node.js, Express.js, MongoDB</p>
                        <a id='githubp' href='https://github.com/Rohit1185/student_managment' target='_blank'><img src={github} id='github' alt=""/></a>
                    </div>

                </div>
                
            </div>
        
        </div>
    );
}

export default Skills;