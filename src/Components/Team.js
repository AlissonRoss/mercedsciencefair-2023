import Landing from "./Landing";
import NavBar from "./NavBar";
import Ivan from '../Assets/Ivan.jpg';
import Yeng from '../Assets/Yeng.jpg';
import Alisson from '../Assets/Alisson.jpg';
import Mulero from '../Assets/Mulero.JPG';
import Stefin from '../Assets/Stefin.jpg';
import LinkedIn from '../Assets/linkedin.svg';
import "../App.css";

function Team() {
    return (
      <div className='App'>
        <header className="App-header">
            <NavBar />
            <Landing />
        </header>
        <div className="Team">
            <h1>Meet Our 2023 Front-End Engineering Team</h1>
            <h3 className="Team-Member-Div">The following are the team members that worked on this website. We coded this website using Javascript, ReactJS, MUI, among other libraries.
              We hope this page inspires others to code and follow their career goals & dreams.
            </h3>
            {/*Ivan */}
            <div className="Team-Member-Div">
              <img className="Team-Img" src={Ivan} width="250" alt="Ivan Piceno"/>
              <h2 className="Name">Ivan Piceno</h2>
              <h3 className="Team-Description">I am an aspiring full-stack developer currently attending Merced College for my A.S. in Computer Technology and Information Systems, 
                with a focus on cybersecurity. Some of my hobbies include watching sports, playing video games, 
                being a craft beer enthusiast, and being a huge foodie.
              </h3>
              Connect with Ivan on LinkedIn<br/>
              <a href="https://www.linkedin.com/in/ivan-piceno-939274204/"><img src={LinkedIn} width={50} alt="LinkedIn"/></a>
            </div>
            {/*Yeng */}
            <div className="Team-Member-Div">
              <img className="Team-Img" src={Yeng} width="250" alt="Yeng Her"/>
              <h2 className="Name">Yeng Her</h2>
              <h3 className="Team-Description">
              I am a Hmong American college student who is seeking experience and knowledge in anything computer science related. 
              My goal is to obtain my bachelors from California State University, San Jose and someday become a video game developer
              </h3>
              Connect with Yeng on LinkedIn<br/>
              <a href="http://linkedin.com/in/yeng-her-095b38248"><img src={LinkedIn} width={50} alt="LinkedIn"/></a>
            </div>
            {/* Alisson */}
            <div className="Team-Member-Div">
              <img className="Team-Img" src={Alisson} width="250" alt="Alisson Ross"/>
              <h2 className="Name">Alisson Ross</h2>
              <h3 className="Team-Description">
                My name is Alisson. I am from Managua, Nicaragua. I love art, web development, and cats!
                I am transferring to CSU Stanislaus to continue my Computer Science studies.
                I keep going despite my failures and hoping to one day become a full-time Front-end Engineer in Industry!
              </h3>
              Connect with Alisson on LinkedIn<br/>
              <a href="https://www.linkedin.com/in/alisson-ross/"><img src={LinkedIn} width={50} alt="LinkedIn"/></a>
            </div>
            {/*Stefin */}
            <div className="Team-Member-Div">
              <img className="Team-Img" src={Stefin} width="250" alt="Stefin Racho"/>
              <h2 className="Name">Stefin Racho</h2>
              <h3 className="Team-Description">
                Hello I am Stefin!
              </h3>
              Connect with Stefin on LinkedIn<br/>
              <a href="https://www.linkedin.com/in/stefinracho/"><img src={LinkedIn} width={50} alt="LinkedIn"/></a>
            </div>
            {/*Mulero */}
            <div className="Team-Member-Div">
              <img className="Team-Img" src={Mulero} width="250" alt="Stefin Racho"/>
              <h2 className="Name">Mulero Alamou</h2>
              <h3 className="Team-Description">
                Hello I am Mulero!
              </h3>
              Connect with Mulero on LinkedIn<br/>
              <a href="https://www.linkedin.com/in/mulero-alamou-5a4927240/"><img src={LinkedIn} width={50} alt="LinkedIn"/></a>
            </div>
        </div>
      </div>
    )
}export default Team;
  