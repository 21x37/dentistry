import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

class DentalCare extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div>
                <Header/>
                <div className='content-container'>
                    <p className='dental-care-p'>Tempus urna et pharetra pharetra. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Nec feugiat nisl pretium fusce id velit. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Gravida arcu ac tortor dignissim. Scelerisque purus semper eget duis. Sit amet volutpat consequat mauris. Praesent elementum facilisis leo vel fringilla est ullamcorper. Integer malesuada nunc vel risus commodo viverra maecenas. Sed faucibus turpis in eu mi bibendum neque egestas congue. Tempus egestas sed sed risus pretium quam.</p>
                    <ul>
                        <li className='dental-care-list-item'><Link to='#'>Cosmetic Dentistry</Link></li>
                        <li className='dental-care-list-item'><Link to='#'>Dental Bonding</Link></li>
                        <li className='dental-care-list-item'><Link to='#'>Porcelain Dental Veneers</Link></li>
                        <li className='dental-care-list-item'><Link to='#'>Teeth Whitening (Zoom! and LaserSmile™)</Link></li>
                        <li className='dental-care-list-item'><Link to='#'>General & Family Dentistry</Link></li>
                        <li className='dental-care-list-item'><Link to='#'>Dental Bridges</Link></li>
                        <li className='dental-care-list-item'><Link to='#'>Dental Crowns</Link></li>
                        <li className='dental-care-list-item'><Link to='#'>Dental Fillings</Link></li>
                        <li className='dental-care-list-item'><Link to='#'>Dental Implants</Link></li>
                        <li className='dental-care-list-item'><Link to='#'>Dental Sealants</Link></li>
                        <li className='dental-care-list-item'><Link to='#'>Dentures</Link></li>
                        <li className='dental-care-list-item'><Link to='#'>Gum Disease Treatment</Link></li>
                        <li className='dental-care-list-item'><Link to='#'>Laser Gum Treatment</Link></li>
                        <li className='dental-care-list-item'><Link to='#'>MTM® Clear•Aligner</Link></li>
                        <li className='dental-care-list-item'><Link to='#'>Root Canal Treatment</Link></li>
                        <li className='dental-care-list-item'><Link to='#'>Tooth Extractions</Link></li>
                    </ul>
                </div>
                <Footer />
            </div>
        );
    };
};

export default DentalCare;