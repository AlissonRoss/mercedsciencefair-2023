import Video from '../Assets/Science2023.mp4';
import { Button } from '@mui/material';
function About(){
    return(
        <div className="About">
            <h2 className="About-Description">
                Registration is open to all Undergrad and High school students 
                <br/>in the central valley!
                <br/>
                <Button variant="contained" style={{margin: "2em"}}href="https://forms.gle/WQNv3XrKPyRyh86a7">
                    Registration Form
                </Button>
                <br/>
                This website is under construction by the members of the 
                <br/>CAHSI Merced College computer science club
            </h2>
            <video loop width="450" className="Video" autoPlay src={Video} type="video/mp4"/>
        </div>
        
    );
} export default About;