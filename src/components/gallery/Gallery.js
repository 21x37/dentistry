import React from 'react';
import Header from '../header/Header';
import Carousel from '../../utils/carousel/Carousel';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <Carousel/>
            </div>
        );
    };
};

export default Gallery;