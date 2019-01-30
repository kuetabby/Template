import React from 'react';
import './index.css'

import Carosel from './Carousel'
import Time from './Time'

const Featured = () =>{
    return(
        <div>
            <div style={{position: 'relative'}}>
                <Carosel />
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