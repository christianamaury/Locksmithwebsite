import React from 'react';
import Link from 'react-scroll';
//Image... 
import Image1 from '../images/Image1.png'

export const Hero = () => {
    return (
        <main>
            <section className='hero-section' id='hero'>
                <div className='section-content'>
                    <div className='hero-details'>
                        <h2 className='title'>
                            Fast & Reliable Car LockSmith Services in Arizona - Available 24/7
                        </h2>

                        <h3 className='subtitle'>
                            Locked out? We're on the way - anytime, anywhere in Arizona
                        </h3>

                        <p className='description'>
                        {/* Needs to be updated  */}
                        At Brian's Locksmith, we specialize in quick and professional locksmith services across Arizona. Whether you’re locked out of your car, lost your keys, or need an emergency lock replacement, our certified technicians are ready to help 24/7. With transparent pricing, rapid response times, and trusted service, we get you back on the road — safely and stress-free.”
                        </p>
                        
                        <div className='buttons'>
                            <Link activeClass='active' to='intro' className='button order-now'> Order Now </Link>
                            <Link activeClass='active' to='intro' className='button contact-us'> Contact Us </Link>
                        </div>
                    </div>

                    <div className='hero-image-wrapper'>
                        <img src={Image1} alt='Hero' className='hero-image'/>

                    </div>
                </div>
            </section>
        </main>
    )
}