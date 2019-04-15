import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';

class DentalCare extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div>
                <Header/>
                <p>Tempus urna et pharetra pharetra. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Nec feugiat nisl pretium fusce id velit. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Gravida arcu ac tortor dignissim. Scelerisque purus semper eget duis. Sit amet volutpat consequat mauris. Praesent elementum facilisis leo vel fringilla est ullamcorper. Integer malesuada nunc vel risus commodo viverra maecenas. Sed faucibus turpis in eu mi bibendum neque egestas congue. Tempus egestas sed sed risus pretium quam.</p>
                <Link to='#'>Cosmetic Dentistry</Link>
                <Link to='#'>Dental Bonding</Link>
                <Link to='#'>Porcelain Dental Veneers</Link>
                <Link to='#'>Teeth Whitening (Zoom! and LaserSmile™)</Link>
                <Link to='#'>General & Family Dentistry</Link>
                <Link to='#'>Dental Bridges</Link>
                <Link to='#'>Dental Crowns</Link>
                <Link to='#'>Dental Fillings</Link>
                <Link to='#'>Dental Implants</Link>
                <Link to='#'>Dental Sealants</Link>
                <Link to='#'>Dentures</Link>
                <Link to='#'>Gum Disease Treatment</Link>
                <Link to='#'>Laser Gum Treatment</Link>
                <Link to='#'>MTM® Clear•Aligner</Link>
                <Link to='#'>Root Canal Treatment</Link>
                <Link to='#'>Tooth Extractions</Link>
            </div>
        );
    };
};

export default DentalCare;