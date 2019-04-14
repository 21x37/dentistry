import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>Lorem Ipsum</h1>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>Our Practice</li></Link>
                <Link to='/dental-care'><li>Dental Care</li></Link>
                <Link to='/new-patient-experience'><li>New Patient Experience</li></Link>
                <Link to='/patient-resources'><li>Patient Resources</li></Link>
                <Link to='/testimonials'><li>Testimonials</li></Link>
                <Link to='/gallery'><li>Gallery</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
        </div>
    )
}

export default Header;