import React from 'react';
import classes from './Filler.module.css';

const Filler = (props) => {
    return (
        <div className={classes.filler} style= {{width:`${props.percentageFiller}%`}}>
            
        </div>
    );
};

export default Filler;