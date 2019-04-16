import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const NewPatientExperience = () => {
    return (
        <div>
            <Header/>
            <div className='content-container'>
                <h1 className='npe-title'>New Patient Experience</h1>
                <h3 className='npe-subtitle'>Welcome to our new patients!</h3>
                <p className='npe-p'>Eu scelerisque felis imperdiet proin fermentum leo vel orci. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Tellus orci ac auctor augue mauris augue neque. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Ultrices vitae auctor eu augue ut lectus arcu. Vel risus commodo viverra maecenas accumsan lacus vel.</p>
                <h3 className='npe-subtitle'>What to expect as a new patient!</h3>
                <p className='npe-p'>Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Lectus proin nibh nisl condimentum. Duis convallis convallis tellus id interdum velit laoreet. In vitae turpis massa sed elementum tempus egestas sed. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Ac ut consequat semper viverra. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Lacus viverra vitae congue eu consequat ac.</p>
                <h3 className='npe-subtitle'>Comprehensive New Patient Exam!</h3>
                <p className='npe-p'>Tellus pellentesque eu tincidunt tortor aliquam. Mauris ultrices eros in cursus turpis massa tincidunt dui. Pellentesque habitant morbi tristique senectus et netus. Ut tristique et egestas quis ipsum suspendisse ultrices. Facilisis mauris sit amet massa vitae tortor. Tincidunt arcu non sodales neque sodales ut etiam sit. At ultrices mi tempus imperdiet. Purus in mollis nunc sed id semper risus in. Fames ac turpis egestas sed tempus urna.</p>
            </div>
            <Footer/>
        </div>
    );
};

export default NewPatientExperience;