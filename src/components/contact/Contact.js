import React from 'react';
import Header from '../header/Header';

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
                <form>
                    <input onChange={this.onChange} placeholder='Name' name='name' type='text'/>
                    <input onChange={this.onChange} placeholder='Email' name='email' type='text'/>
                    <textarea onChange={this.onChange} placeholder='Please type your message!' name='message'/>
                </form>
            </div>
        )
    }
}


export default Contact;