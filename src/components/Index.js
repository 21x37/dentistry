import React from 'react';
import Header from './header/Header';
import HomePage from './homePage/HomePage';
import Footer from './footer/Footer';



// Home Page


const Index = () => {
    return (
        <div className='homepage-container'>
            <Header />
            <div className='body'>
                <HomePage />
            </div>
            <Footer/>
        </div>
    )
}

export default Index;