import React from 'react';
import BayValleyTech from '../Assets/sponsor1.webp'

export default function Sponsors() {
  return (
    <div className='sponsorSection'>
        <div>
            <h2>Sponsors</h2>

            <div className="sponsorList">
                <h4>The 2023 Merced college Science Fair prizes were funded thanks to our sponsors</h4>
                <a href="https://www.bayvalleytech.com"><img src={BayValleyTech} height="200"alt="Bay Valley Tech"/></a>
            </div>
        </div>
    </div>
  )
}
