import { Link, IconButton } from "@mui/material";
import { Icon } from '@mui/material';
import Logo from '../Assets/Cahsi-logo1.png';
import { useEffect, useState } from "react";


function NavBar() {
    const [showSideBar, setShowSideBar] = useState(false)


    useEffect(() => { // controls mobile sidebar
        function reSize() {
            if (window.innerWidth > 524 && showSideBar === true) {
                setShowSideBar(false);
            }
        }
        window.addEventListener('resize', reSize)

        return () => { //clean up event listener, removes event listener
            window.removeEventListener('resize', reSize)
        }
    }, [showSideBar])

    function showSide() {
        setShowSideBar(bool => !bool)
    }
    return (
        <>
            <nav className="navbar-container" id='go-home'>
                <div className="logo-nav">

                    <img className="logo-img" src={Logo} alt="CAHSI logo" />
                </div>
                <ul className="links-ul">
                    <Link className="links-li" href="#about">About</Link>
                    <Link className="links-li" href="#prizes">Prizes</Link>
                    <Link className="links-li" href="#footer">Contacts</Link>
                </ul>

                {showSideBar &&
                    <div className="sidebar-container">
                        <ul className="sidebar-ul">
                            <Link className="sidebar-li" href="#about">About</Link>
                            <Link className="sidebar-li" href="#prizes">Prizes</Link>
                            <Link className="sidebar-li" href="#footer">Contacts</Link>
                        </ul>
                    </div>

                }
                <IconButton //component from MUI
                    className="hamburger-icon"
                    edge="start"
                    aria-label="open drawer"
                    sx={{ mr: 1, display: "flex", color: "white" }}
                >
                    <Icon  //component from MUI 
                        onClick={showSide}>
                        <svg viewBox="0 0 24 24">
                            <path fill="currentColor" d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z" />
                        </svg>/1
                    </Icon>
                </IconButton>

            </nav>
        </>
    );
} export default NavBar;