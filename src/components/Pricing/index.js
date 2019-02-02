import React, {Component} from 'react';
import Zoom from 'react-reveal/Zoom';
import './index.css'
import MyButton from '../Button/index'

class Pricing extends Component{
    state={
        prices:[100,150,250],
        positions:['Balcony','Medium','Star'],
        desc:[
            'Lorem amet anim id nulla veniam nisi anim aute.',
            'Lorem amet anim id nulla veniam nisi anim aute.',
            'Lorem amet anim id nulla veniam nisi anim aute.'
        ],
        linkto:['#','#','#'],
        delay:[500,0,500]
    }

    showPrice = () => (
        this.state.prices.map((box,i) => (
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className='pc_item'>
                    <div className='pc_inner_wrapper'>
                        <div className='pc_price'>
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className='pc_desc'>{this.state.desc[i]}</div>
                        <div className='pc_button'>
                            <MyButton
                            text="Purchase"
                            bck="#ffa800"
                            color="#fffff"
                            link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render(){
        return(
            <div className='bck_black'>
                <div className='pc_section'>
                    <h2>Pricing</h2>
                    <div className='pc_wrapper'>
                        {this.showPrice()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing