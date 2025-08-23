import React from 'react';
//We can add some images here

export const Menu = () => {
    return (
        <section className='menue-section' id='menu'>
            <h2 className='section-title'> Our Services </h2>
            <div className='section-content'>
                <ul className='menu-list'>
                    <li className='menu-item'>
                        {/* Perhaps adding an image here*/}
                        <h3 className='name'>
                            Rapid Response
                        </h3>
                        <p>
                          We know every second counts. Our team is on call 24/7 to provide fast, reliable assistance for all 
                          automotive lock emergencies
                        </p>
                    </li>

                    <li className='menu-item'>
                    {/* Perhaps adding an image here*/}
                        <h3 className='name'>
                            Expert Technicians
                        </h3>
                        <p>
                            Certified and highly trained, our locksmiths handle even the most complex automotive lock systems with precision and care
                        </p>
                    </li>

                    <li className='menu-item'>
                    {/* Perhaps adding an image here*/}
                        <h3 className='name'>
                            Honest Pricing
                        </h3>
                        <p>
                            No surprises, no hidden fees. We deliver clear, upfront estimates and competitive rates you can trust. 
                        </p>
                    </li>
                </ul>
            </div>
        </section>
       
    )
}