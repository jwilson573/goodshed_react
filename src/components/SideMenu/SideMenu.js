import React from 'react';
import classes from './SideMenu.scss';

import Navigation from '../Navigation/Navigation';
import Backdrop from './Backdrop/Backdrop';
import AuxComponent from '../../hocs/AuxComponent/AuxComponent';

const sideMenu = (props) => {
    console.log('sideMenu props', props)
    let attachedClasses = [classes.SideMenu, classes.Close];
    if(props.open){
       attachedClasses = [classes.SideMenu, classes.Open];
    }
    return (
        <AuxComponent>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <Navigation />
                </nav>
            </div>
        </AuxComponent>
    )
}

export default sideMenu;