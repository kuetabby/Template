import React from 'react';
import Slider from "react-slick";

import Mark  from '../../image/mark.jpg'
import Matt from '../../image/matt.jpg'
import Travis from '../../image/travis.jpg'

const Carosel = () =>{

    const settings={
        dots: true,
        infinite: true,
        speed: 500
    }

    return(
        <div 
        className="carrousel_wrapper" 
        style={{
            height: `${window.innerHeight}px`, overflow: 'hidden'
        }}>
            <Slider {...settings}>
                <div>
                    <div className="carrousel_image" style={{background:`url(${Mark})`,height:`${window.innerHeight}px` }}>

                    </div>
                </div>

                <div>
                    <div className="carrousel_image" style={{ background:`url(${Matt})`,height:`${window.innerHeight}px` }}>

                    </div>
                </div>

                <div>
                    <div className="carrousel_image" style={{ background:`url(${Travis})`,height:`${window.innerHeight}px` }}>

                    </div>
                </div>

            </Slider>
        </div>
    );
};

export default Carosel