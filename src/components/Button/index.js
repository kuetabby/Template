import React from 'react'
import Button from '@material-ui/core/Button';
import Ticket from '../../image/icons/ticket.png'

const styles = {
    width: '20px',
    marginRight: '10px'
}

const MyButton = (props) => {
    return (
        <div>
            <Button
                size="small" 
                href={props.href} 
                variant="contained" 
                style={{
                    background:props.bck,
                    color: props.color
                }}
            >
                <img src={Ticket} style={styles} alt="Icon Button"/>
                {props.text}
            </Button>
        </div>
    );
}
export default MyButton