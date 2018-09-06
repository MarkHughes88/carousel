import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';

const SLIDES = [
    {
        thumb: "thumb-focus-st2-interior.jpg",
        img: "focus-st2-interior.jpg",
        desc: "Interior",
    },
    {
        thumb: "thumb-focus-st2-lifestyle.jpg",
        img: "focus-st2-lifestyle.jpg",
        desc: "Lifestyle",
    },
    {
        thumb: "thumb-focus-st3-blue-main.jpg",
        img: "focus-st3-blue-main.jpg",
        desc: "Ford Focus",
    },
    {
        thumb: "thumb-focus-st3-blue-rear.jpg",
        img: "focus-st3-blue-rear.jpg",
        desc: "Ford Focus rear",
    },
    {
        thumb: "thumb-focus-st3-blue-side.jpg",
        img: "focus-st3-blue-side.jpg",
        desc: "Ford Focus side",
    },
    {
        thumb: "thumb-focus-st3-blue-wheel.jpg",
        img: "focus-st3-blue-wheel.jpg",
        desc: "Ford Focus wheel",
    }
];

class ProductPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Product Page',
        };
    }

    render () {
        return (
            <div>
                {this.state.title}
                <Carousel slides={SLIDES} />
            </div>
        )
    }
};

export default ProductPageContainer;
