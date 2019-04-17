import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className='header-container'>
                <h1 className='header-title'>Dentistry</h1>
                <div className='nav__flex'>
                    <ul className='header-nav'>
                        <Link style={{color: '#FFF'}} to='/'><li className='nav-item'>Home</li></Link>
                        <Link style={{color: '#FFF'}} to='/about'><li className='nav-item'>Our Practice</li></Link>
                        <Link style={{color: '#FFF'}} to='/dental-care'><li className='nav-item'>Dental Care</li></Link>
                        <Link style={{color: '#FFF'}} to='/new-patient-experience'><li className='nav-item'>New Patient Experience</li></Link>
                        <Link style={{color: '#FFF'}} to='/patient-resources'><li className='nav-item'>Patient Resources</li></Link>
                        <Link style={{color: '#FFF'}} to='/testimonials'><li className='nav-item'>Testimonials</li></Link>
                        <Link style={{color: '#FFF'}} to='/gallery'><li className='nav-item'>Gallery</li></Link>
                        <Link style={{color: '#FFF'}} to='/contact'><li className='nav-item'>Contact</li></Link>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Header;