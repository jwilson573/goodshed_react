import React from 'react';
import classes from './MobileNav.scss';

const mobileNav = (props) => (
    <div className={classes.MobileNav} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default mobileNav;