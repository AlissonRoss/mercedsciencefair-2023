import React from 'react';
import tablet from "../Assets/tablet.png";
import storage from "../Assets/storage.png";
import drone from "../Assets/drone.png";

function Prizes(){
    return(
        <div className="Prizes" id='prizes'>
            <div className="Prizes-Top-Description">
                <h1 className = "Prizes-Title">
                    Prizes
                </h1>
                <h2 className="Prizes-Description">
                &nbsp; There are three categories you can win prizes in Computer Science, STEM, and High School! There are slightly different prizes for each category
                </h2>
            </div>
            <div className="prizes-container">

            <div className='First-Place'>
                
                <div className='Left-Div'>
                    <h3 className="Left-Title">
                        1st Place
                    </h3>
                    
                    <h3 className="Prizes-Prizes-left">
                        The top prizes of all the categories are tablets, First place for Computer Science and High School include:
                    </h3>
                    <h3 className="Prizes-Name-left">
                        Samsung Galaxy Tab S6 Lite 10.4", 64GB Wi-Fi Tablet Oxford Gray, S Pen Included
                    </h3>
                    <h3 className="Prizes-Prizes-left">
                        First place for STEM includes:
                    </h3>
                    <h3 className="Prizes-Name-left">
                        Kindle Fire HD and an Electronic Stylus Pen for Amazon HD Fire 10/8 Tablet Pencil, Active Digital Capacitive Pen for Amazon Fire HD 10 Tablet
                    </h3>
                </div>
                <div className='Image-One'>
                    <img className="image-one" src={tablet} alt = ""/>
                </div>
            </div>
            <div className='Second-Place'>
                <div className='Image-Two'>
                    <img className="image-two" src={storage} alt = ""/>
                </div>
                <div className='Right-Div'>
                    <h3 className="Right-Title">
                        2nd Place
                    </h3>
                    <h3 className="Prizes-Prizes-right">
                        &nbsp; The second prize of each category include various fun and useful electronics, Second place for Computer Science is:
                    </h3>
                    <h3 className="Prizes-Name-right">
                        Mechanical keyboard, Ducky One 3 TKL Daybreak
                    </h3>
                    <h3 className="Prizes-Prizes-right">
                        Second place for STEM is:
                    </h3>
                    <h3 className="Prizes-Name-right">
                        SanDisk 1TB Extreme Portable SSD - Up to 1050MB/s - USB-C, USB 3.2 Gen 2 - External Solid State Drive
                    </h3>
                    <h3 className="Prizes-Prizes-right">
                        Lastly, Second place for High School is:
                    </h3>
                    <h3 className="Prizes-Name-right">
                        JBL CHARGE 5 - Portable Bluetooth Speaker with IP67 Waterproof and USB Charge out
                    </h3>
                </div>
            </div>
            
            <div className='Third-Place'>
                <div className='Left-Div'>
                    <h3 className="Left-Title">
                        3rd Place
                    </h3>
                    <h3 className="Prizes-Prizes-left">
                        The third prizes of all the categories include more awesome tech that you never knew you needed, Third place for Computer Science is:
                    </h3>
                    <h3 className="Prizes-Name-left">
                        SanDisk 1TB Extreme Portable SSD - Up to 1050MB/s - USB-C, USB 3.2 Gen 2 - External Solid State Drivek
                    </h3>
                    <h3 className="Prizes-Prizes-left">
                        Third place for STEM is:
                    </h3>
                    <h3 className="Prizes-Name-left">
                        House of Marley True Wireless Champion Earbuds - Bluetooth 5.0 Earphones, Up to 28 Hours Battery Life with Quick Charge
                    </h3>
                    <h3 className="Prizes-Prizes-left">
                        Lastly, Third place for High School is:
                    </h3>
                    <h3 className="Prizes-Name-left">
                        Ryze Tech Tello - Mini Drone Quadcopter UAV for Kids Beginners 5MP Camera HD720
                    </h3>
                </div>
                <div className='Image-Three'>
                    <img className="image-three" src={drone} alt = ""/>
                </div>
            </div>
            </div>
        </div>
        
    );
} export default Prizes;