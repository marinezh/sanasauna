import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./Header.module.css";
import Nav from './Nav';

const Header = () => {
    return (
        <header className={classes.header}>
            <Link to= "/"><h1>SANASAUNA</h1></Link> 
            <Nav />
        </header>
    );
};

export default Header;