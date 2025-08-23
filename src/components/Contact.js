import React from "react";
import {Crosshair, MailIcon, Phone, Clock1, Earth} from "lucide-react";

export const Contact = () => {
    return (
        <section className='contact-section' id='contact'>
            <h2 className='section-title'>
                Contact Us
            </h2>

            <div className='section-content'>
                <ul className='contact-info-list'>
                    <li className='contact-info'>
                        <i> <Crosshair/> </i>
                        <p> Arizona </p>
                    </li>

                    <li className='contact-info'>
                        <i> <MailIcon/> </i>
                        <p> brian.321@hotmail.com </p>
                    </li>

                    <li className='contact-info'>
                        <i> <Phone/> </i>
                        <p> 480-261-5543 </p>
                    </li>

                    <li className='contact-info'>
                        <i>  <Clock1/> </i>
                        <p> Monday - Sunday: 24 Hours </p>
                    </li>

                    <li className='contact-info'>
                        <i> <Earth/> </i>
                        {/* Needs to be updated it */}
                        <p>
                        BrianLockSmith.com 
                        </p>

                        {/* We can add here the form submission for the user */}
                                                
                    </li>
                </ul>
            </div>
        </section>
    )
}