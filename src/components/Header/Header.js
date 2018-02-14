import React from 'react';

import MobileNav from '../MobileNav/MobileNav';

import classes from './Header.scss';
import logo from '../../assets/small_shed_white.png';

const header = (props) => {
    console.log(props);
    return(
        <div className={classes.header}>
            <img src={logo} alt="small_shed" />
            <MobileNav clicked={props.mobileNavToggle} />
        </div>

    )
}

export default header;