import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const PatientResources = () => {
    return (
        <div>
            <Header />
            <div className='content-container'>
                <h3 className='pr-title'>Financial Options</h3>
                <p className='pr-p'>olutpat diam ut venenatis tellus in metus vulputate. Arcu bibendum at varius vel. Elementum nibh tellus molestie nunc. Aliquam faucibus purus in massa tempor nec feugiat. Diam vulputate ut pharetra sit amet aliquam. </p>
                <h3 className='pr-subtitle'>In Office Dental Plan</h3>
                <p className='pr-p'>Odio eu feugiat pretium nibh. Eleifend donec pretium vulputate sapien nec sagittis. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Porttitor eget dolor morbi non arcu risus quis varius quam. Sollicitudin ac orci phasellus egestas tellus rutrum. Varius morbi enim nunc faucibus a. Pulvinar sapien et ligula ullamcorper malesuada proin. Aliquet enim tortor at auctor urna nunc id. Convallis convallis tellus id interdum.</p>
                <h3 className='pr-subtitle'>Patient Forms</h3>
                <p className='pr-p'>Orci phasellus egestas tellus rutrum tellus pellentesque eu. Viverra adipiscing at in tellus. Massa placerat duis ultricies lacus. Molestie at elementum eu facilisis sed odio morbi quis. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus.</p>
                <ul className='pr-list'>
                    <li><a href='#'>New Patient Form</a></li>
                    <li><a href='#'>Medical History Form</a></li>
                    <li><a href='#'>Office Policies</a></li>
                </ul>
                <h3 className='pr-subtitle'>Infection Control</h3>
                <p className='pr-p'>Tincidunt dui ut ornare lectus sit. Mattis rhoncus urna neque viverra justo nec ultrices. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Neque vitae tempus quam pellentesque nec nam. Quis viverra nibh cras pulvinar mattis nunc sed blandit.</p>
            </div>
            <Footer/>
        </div>
    );
};

export default PatientResources;