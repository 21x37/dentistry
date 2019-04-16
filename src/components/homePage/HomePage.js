import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                'https://www.henryschein.com/us-en/images/Dental/dental-materials_seo_supplies.jpg',
                'https://dentcetera-advisors.com/wp-content/uploads/2016/08/Sellers-2.jpg',
                'http://kohaninc.com/wp-content/uploads/2016/11/DRSHAWNTAHERI_20161027_165841_0010-1-1499x1000.jpg'
            ],
            index: 0,
            completed: true
        }
        this.backgroundImageShuffle = this.backgroundImageShuffle.bind(this);
    }
    componentDidMount() {

    }
    backgroundImageShuffle(index) {
        clearInterval();

        setInterval(() => {
            this.backgroundImageShuffle();
            this.setState((prevState) => {
                return {
                    index: (prevState.index + 1) % this.state.images.length,
                    completed: true
                }
            })
        }, 4000)

        console.log(this.state.index)
    }
    render() {
        return (
            <div className='content-container'>
                <h1 className='homepage-title'>Dentistry</h1>
                <div className='homepage-button-container'>
                    <Link to='/about'><button className='button'>Meet the Team</button></Link>
                    <Link to='/testimonials'><button className='button'>Read Testimonials</button></Link>
                    <Link to='/contact'><button className='button button__filled'>Request a appointment</button></Link>
                </div>
            </div>
        );
    };
};


export default HomePage;