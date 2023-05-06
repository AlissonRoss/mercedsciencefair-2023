import { Link } from "@mui/material";
import Logo from '../Assets/Cahsi-logo1.png';
import { useState, useRef } from "react";
import {BiMenu} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';

function NavBar(){  
    const navRef = useRef();
    const [navOpen, setNavOpen] = useState(false);


    const toggleNav = () => {
        const visibility = navRef.current.getAttribute('data-visible');
        navRef.current.setAttribute('data-visible', visibility === 'false' ? 'true' : 'false');

        if(navRef.current.getAttribute('data-visible') === 'false'){
            setNavOpen(false);
        }
        else{ 
            setNavOpen(true)
        }
    }

    return(
        <nav className="navbar">
                <div className="logo-nav">
                     <img className="logo-img" src={Logo} alt="CAHSI logo" />
                 </div>
                 
                 <BiMenu onClick={() => toggleNav()} className={ navOpen === false ? "mobileNavToggle" : "hidden"} size={30}/>
                 <AiOutlineClose className={ navOpen === true ? "mobileNavToggle" : "hidden"} data-closed="true" size={28} onClick={() => toggleNav()} />

                <div className="navSections">
                    <ul ref={navRef} data-visible="false" className="nav-links">
                        <li><Link className="links-li" href="#about">About</Link></li>
                        <li><Link className="links-li" href="#prizes">Prizes</Link></li>
                        <li><Link className="links-li" href="#footer">Contacts</Link></li>
                    </ul> 
                </div>

        </nav>
    )
}
export default NavBar;