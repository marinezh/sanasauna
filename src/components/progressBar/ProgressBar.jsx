import React from 'react';
import { useState } from 'react';
import Filler from './Filler';
import classes from "./ProgressBar.module.css";

const ProgressBar = () => {
    const[percentage,setPercentage] = useState(70);
    return (
        <div className={classes.progress_container}>
            <div className={classes.progress_bar}>
                <Filler percentageFiller = {percentage} />
            </div>
        </div>
    );
};

export default ProgressBar;