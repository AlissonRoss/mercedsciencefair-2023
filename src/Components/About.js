import Video from '../Assets/Science2023.mp4';
import { Button } from '@mui/material';
function About(){
    return(
        <div className="About" id='about'>
            <h2 className="About-Description">
            &nbsp;Join in the excitement of STEM and enter to win awesome prizes in the Merced College annual Science Fair.  This year’s task is to invent something new and cool in the pursuance of STEM.  It can be any invention, 
                but projects that involve some type of programming can win in a special category
                &nbsp;Registration is open to all Undergrad and High school students 
                in the central valley!
                <br/>
                <Button variant="contained" className="About-Button" href="https://forms.gle/WQNv3XrKPyRyh86a7">
                    Registration Form
                </Button>
                <br/>
                &nbsp;This website is under construction by the members of the 
                <br/>CAHSI Merced College computer science club
            </h2>
            <video loop className="Video" autoPlay src={Video} type="video/mp4"/>
        </div>
        
    );
} export default About;