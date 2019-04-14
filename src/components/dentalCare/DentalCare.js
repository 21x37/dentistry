import React from 'react';
import Header from '../header/Header';

class DentalCare extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <p>Dental Care</p>
            </div>
        );
    };
};

export default DentalCare;