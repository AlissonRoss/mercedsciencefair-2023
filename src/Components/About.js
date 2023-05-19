import Video from '../Assets/Science2023.mp4';
import { Button } from '@mui/material';
function About(){
    return(
        <div className="About" id='about'>
            <h2 className="About-Description">
            &nbsp;Thank you all for joining this year's Science Fair! Stay tuned for Science Fair 2024!
                <br/>
                <Button variant="outlined" disabled>
                    Registration Form closed
                </Button>
                <br/>
                &nbsp;This website is under construction by the members of the 
                <br/>CAHSI Merced College computer science club
            </h2>
            <video loop className="Video" autoPlay src={Video} type="video/mp4"/>
        </div>
        
    );
} export default About;