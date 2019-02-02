import React from 'react';
import './index.css'
import Description from './Description';
import Discount from './Discount';

const Highlight = () => {
    return (
        <div>
            <div className="highlight_wrapper">
                <Description />
                <Discount />
            </div>
        </div>
    );
};

export default Highlight;