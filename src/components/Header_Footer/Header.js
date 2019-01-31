import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton  from '@material-ui/core/IconButton';
import './index.css'

import SideDrawer from './SideDrawer'

class Header extends Component{
    state={
        drawerOpen: false,
        headerShow: false
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }

    toggleDrawer = (value) => {
        this.setState({drawerOpen: value})
    }

    handleScroll = () => {
        if(window.scrollY > 0){
            this.setState({headerShow: true})
        }else{
            this.setState({headerShow:false})
        }
    }
    render(){
        return(
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
                    boxShadow:'none',
                    padding:'10px 0px',
                    transition: 'all 300ms ease-in'
            }}
            >
            <Toolbar>

                <div className='header_logo'>
                    <div className='font_righteous header_venue_logo'>The Venue</div>
                    <div className='header_title_logo'>Musical Events</div>
                </div>
                
                <IconButton aria-label="Menu" color="inherit" onClick={(value) => this.toggleDrawer(value)}>
                    <MenuIcon />
                </IconButton>

                <SideDrawer
                    open={this.state.drawerOpen}
                    onClose={(value) => this.toggleDrawer(value)}
                />
            </Toolbar>
            </AppBar>
        );
    }
}

export default Header