import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import s from './Carousel.css';

const LEFT = 'left';
const RIGHT = 'right';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
            slides: this.props.slides,
            currentSlide: {
                src: undefined,
                desc: undefined,
            }
        }

        this.arrowClick = this.arrowClick.bind(this);
    }

    componentDidMount() {
        const { slides } = this.state;
        const { slideIndex } = this.state;

        this.setState({
            currentSlide: {
                src: slides[slideIndex].img,
                desc: slides[slideIndex].desc,
            }
        }, () => console.log(this.state.currentSlide.src));
    }

    arrowClick(direction) {
        const { slideIndex } = this.state;

        if (direction === LEFT) {
            this.setState({
                slideIndex: slideIndex - 1,
            }, () => console.log(this.state.slideIndex));
        } else if (direction === RIGHT) {
            this.setState({
                slideIndex: slideIndex + 1,
            }, () => console.log(this.state.slideIndex));
        }
    }
    
    render() {
        return (
            <div className={s.carouselContainer}>
                <img
                    className={s.mainImg}
                    src={`/Static/${this.state.currentSlide.src}`}
                    alt={this.state.currentSlide.desc}
                />
                <span
                    className={`${s.arrow} ${s.arrowLeft}`}
                    onClick={() => this.arrowClick(RIGHT)} 
                >
                    <i className="fas fa-chevron-left" />
                </span>
                <span
                    className={`${s.arrow} ${s.arrowRight}`}
                    onClick={() => this.arrowClick(RIGHT)} 
                >
                    <i className="fas fa-chevron-right" />
                </span>
            </div>
        );
    }
};

Carousel.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.objectOf(oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])))
};

Carousel.defaultProps = {
    slides: [],
}

export default Carousel;
