import React from 'react';

import classes from './Navigation.scss';

const navigation = (props) => (
    <nav className={classes.nav}>
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Gear</li>
            <li>Testimonials</li>
        </ul>
    </nav>   
)

export default navigation;