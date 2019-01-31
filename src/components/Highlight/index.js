import React from 'react';
import './index.css'
import Description from './description';
import Discount from './discount';

const HighLights = () => {
    return (
        <div>
            <div className="highlight_wrapper">
                <Description />
                <Discount />
            </div>
        </div>
    );
};

export default HighLights;