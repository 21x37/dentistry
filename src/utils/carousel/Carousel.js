import React from 'react';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                'https://www.phmic.com/wp-content/uploads/2016/05/YoungFemaleDentalStudent-e1500565966857.jpg',
                'https://www.memerewards.com/images/2017/11/07/S6T61Y1_dceb8eb5224796348.jpg',
                'https://www.chattanoogadentalcare.com/images/dentalchair.jpg',
                'https://www.phillyismile.com/wp-content/uploads/emergency-dentist-header.jpg',
                'https://www.usnews.com/dims4/USNEWS/799ae9b/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F29%2F40%2F469bc2b24ae796b40b9f718f3103%2F150603-dentist-stock.jpg',
                'https://fortworthtexasdentist.com/wp-content/uploads/2014/07/smiles4-.jpg'
            ],
            currentImage: 0
        }
        this.onForward = this.onForward.bind(this);
        this.onBack = this.onBack.bind(this);
    }
    onForward() {
        this.setState((prevState) => {
            return {
                currentImage: (prevState.currentImage + 1) % this.state.images.length
            };
        });
    };
    onBack() {
        if (this.state.currentImage !== 0) {
            this.setState((prevState) => {
                return {
                    currentImage: (prevState.currentImage - 1) % this.state.images.length
                };
            });
        } else if (this.state.currentImage === 0) {
            this.setState(() => {
                return {
                    currentImage: this.state.images.length -1
                }
            })
        }

    };
    render() {
        return (
            <div className='content-container carousel-container'>
                <img onClick={this.onForward} className='carousel-image' src={this.state.images[this.state.currentImage]}/><br/>
            <div className='carousel-div-button-wrapper'>
                <div className='carousel-div-button-container'>
                </div>
            </div>
                <button className='carousel-button carousel-button__left' onClick={this.onForward}><ion-icon name="arrow-back"></ion-icon></button>
                <button className='carousel-button carousel-button__right' onClick={this.onBack}><ion-icon name="arrow-forward"></ion-icon></button>
            </div>
        );
    };
};

export default Carousel