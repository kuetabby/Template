import React from 'react';
import Fade from 'react-reveal/Fade';
import './index.css'

const Footer = () =>{
    return(
        <footer>
            <Fade delay={500}>
                <div className="font_righteous">The Venue</div>
                <div className="footer_copyright">The Venue 2018. All Rights Reserved.</div>
            </Fade>
        </footer>
    );
}

export default Footer