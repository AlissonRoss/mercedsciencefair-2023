import React from 'react';
import BayValleyTech from '../Assets/sponsor1.webp';
import ASMC from '../Assets/ASMC.webp';

export default function Sponsors() {
  return (
    <div className='sponsorSection'>
        <div>
            <h2>Sponsors</h2>

            <div className="sponsorList">
                <h4>The 2023 Merced college Science Fair prizes were funded thanks to our sponsors</h4>
                <a href="https://www.bayvalleytech.com"><img src={BayValleyTech} height="200"alt="Bay Valley Tech"/></a>
                <h4>Bay Valley Tech will be present during the event to talk about their opportunities</h4>
                <a href="https://www.mccd.edu/campus-life/clubs-organizations/student-government/"><img src={ASMC} width="200"alt="ASMC"/></a>
                <h4>Big thanks to ASMC for their continued support and sponsorship of the Science Fair</h4>
            </div>
        </div>
    </div>
  )
}
