import React from 'react';
import Slider from 'react-slick';
import logo from './logo.png';
import slide1 from './slide1.jpg'
import slide2 from './slide2.jpg'
import slide3 from './slide3.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlideShow.css'
import hometwo1 from './hometwo1.jpg'

const Slideshow = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <Slider {...settings}>
            <div className="slide">
                <img src={hometwo1} alt="Slide 1" style={{ width: '90%', height: 'auto', margin: '0 auto' }} />
            </div>
            <div className="slide">
                <img src={slide2} alt="Slide 2" style={{ width: '90%', height: 'auto', margin: '0 auto' }} />
            </div>
            <div className="slide">
                <img src={slide3} alt="Slide 3" style={{ width: '90%', height: 'auto', margin: '0 auto' }} />
            </div>
        </Slider>
    );
};

export default Slideshow;
