import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>Home Page</p>
                <Link to='/about'><button>Meet the doctor</button></Link>
                <Link to='/testimonials'><button>Read Testimonials</button></Link>
                <Link to='/appointment'><button>Request a appointment</button></Link>
            </div>
        );
    };
};


export default HomePage;