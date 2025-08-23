import React from "react";
import {Link} from "react-scroll";
import {X, MenuIcon} from "lucide-react";
import { ScriptComp } from "./ScriptComp";

export const Header = () => {

    return (
        <header>
            <nav className='navbar section-content'>
               <a href='#' className='nav-logo'>
                  <h2 className='logo-text'>
                    {/* Name needs to be change*/}
                    Brian's LockSmith Services 
                  </h2>
               </a>

               {/* Header Navbar Options */}
               <ul className='nav-menu'>
                    {/*Button to close menu*/}
                    <button id='menu-close-button' className='fas fa-times'>
                        <X/>
                    </button>
                    
                    <li className='nav-item'>
                        <Link activeClass='active' to='hero' className='nav-item nav-link'>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='nav-link'>
                            About
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link activeClass='active' to='testimonials' spy={true} smooth={true} offset={-100} duration={500} className='nav-link'> Testimonials </Link>
                    </li>

                    <li className='nav-item'>
                        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='nav-link'> Contact </Link>
                    </li>
               </ul>

                {/* Butto to fully close menu */}
                <button id='menu-button-open' className='fa fa-bars'>
                    <MenuIcon/>  
                </button>            
            </nav>
        </header>
    )
}
