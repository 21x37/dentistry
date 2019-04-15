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
                <Link to='/about'><button>Meet the Team</button></Link>
                <Link to='/testimonials'><button>Read Testimonials</button></Link>
                <Link to='/contact'><button>Request a appointment</button></Link>
            </div>
        );
    };
};


export default HomePage;