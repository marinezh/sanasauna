import React from 'react';
import ProgressBar from '../progressBar/ProgressBar';
import classes from './Category.module.css';

const Category = () => {
    return (
        <div className={classes.category_container}>
            <div className={classes.category}>
                <div className={classes.link_category}>
                    <a href="">Colors</a>
                    </div>
                <ProgressBar />
            </div>
        </div>
    );
};

export default Category;