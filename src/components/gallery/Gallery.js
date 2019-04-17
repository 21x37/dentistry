import React from 'react';
import Header from '../header/Header';
import Carousel from '../../utils/carousel/Carousel';
import Footer from '../footer/Footer';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='gallery-container'>
                <Header/>
            <div className='content-container'>
                <Carousel/>
            </div>
            
                <Footer/>
            </div>
        );
    };
};

export default Gallery;