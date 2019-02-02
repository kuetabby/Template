import React from 'react';
import './index.css'

import Carousel from './Carousel'
import Time from './Time'

const Featured = () =>{
    return(
        <div>
            <div style={{position: 'relative'}}>
                <Carousel />
                    <div className="band_name">
                        <div className="wrapper">
                            Blink-182
                        </div>
                    </div>
            </div>
            <Time />
        </div>
    )
}

export default Featured