import React from 'react';
import Header from '../header/Header';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <p>Gallery</p>
            </div>
        );
    };
};

export default Gallery;