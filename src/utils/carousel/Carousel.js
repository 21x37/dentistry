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
                'https://www.phillyismile.com/wp-content/uploads/emergency-dentist-header.jpg'
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
            <div>
                <img style={{width: '300px'}} src={this.state.images[this.state.currentImage]}/>
                <button onClick={this.onForward}>Forward</button>
                <button onClick={this.onBack}>Back</button>
            </div>
        );
    };
};

export default Carousel