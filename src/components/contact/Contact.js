import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        const type = e.target.getAttribute('name');
        const value = e.target.value();

        this.setState(() => {
            return {
                [type]: value
            }
        })
    }
    render() {
        return (
            <div>
                <Header/>
            <div className='content-container'>
                <div className='contact-container'>
                <h1 className='contact-title'>Contact Us!</h1>
                    <form className='contact-form'>
                        <input className='contact-input' onChange={this.onChange} placeholder='Name' name='name' type='text'/>
                        <input className='contact-input' onChange={this.onChange} placeholder='Email' name='email' type='text'/>
                        <textarea className='contact-textarea' onChange={this.onChange} placeholder='Please type your message!' name='message'/><br/>
                        <button className='button button__filled'>Submit</button>
                    </form>
                </div>
            </div> 
                <Footer/>
            </div>
        )
    }
}


export default Contact;