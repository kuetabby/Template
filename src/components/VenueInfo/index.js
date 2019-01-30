import React, {Component} from 'react'
import Zoom from 'react-reveal/Zoom';
import './index.css'

//icon
import calender_icon from '../../image/icons/calendar.png';
import location_icon from '../../image/icons/location.png';

class Venue extends Component{
    state={
        title:['Event Date & Time','Event Location'],
        desc:['12 Dec 2019 @05.00 P.M.','Park Street California'],
        duration:[500,500],
        delay:[0,500],
        icon:[calender_icon,location_icon],
        bck:['#ff4800','#ffa800']
    }
}

export default Venue