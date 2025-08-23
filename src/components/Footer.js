import React from "react";
import {Link} from "react-scroll";

export const Footer = () => {
    return (
        <footer className='footer-section' id='footer'>  
            <div className='section-content'>
                <p className='copyright-text'>
                    2025 Brian LockSmith Services
                </p>

            <div className='social-link-list'>
                    {/* Removing the Social Media Icons */}

                    {/* <Link activeClass='active' to='intro' className='social-link'>  */}
                        {/* Facebook Logo from Lucide Library*/}
                        {/* <FacebookIcon/>
                    </Link> */}

                    {/* <Link activeClass='active' to='intro' className='social-link'>  */}
                        {/* Facebook Logo from Lucide Library*/}
                        {/* <Instagram/>
                    </Link> */}

                    {/* <Link activeClass='active' to='intro' className='social-link'>  */}
                        {/* Facebook Logo from Lucide Library*/}
                        {/* <Twitter/>
                    </Link>  */}

                    <a href='https://sweetestadsmedia.com' target='_blank' rel='noopener noreferrer' className='policy-link'>
                        Copyright &#169; 2025. Created by Sweetest Interactive AdsMedia
                    </a>                        
            </div>

            <p className='policy-text'>
                {/* {/* We would need to create the Privacy Policy */} */}
                <Link activeClass='active' to='intro' className='policy-link'> 
                    Privacy Policy
                </Link>

                <span className='separator'> . </span>
                
                {/* We would need to create the Refund Policy */}
                <Link activeClass='active' to='intro' className='policy-link'> 
                    Refund Policy
                </Link>
                    {/* 
                    <a href=# class="policy-link">
                        Privacy Policy.
                    </a> 
                    */}
                </p>
            </div> 
        </footer>
    )
}