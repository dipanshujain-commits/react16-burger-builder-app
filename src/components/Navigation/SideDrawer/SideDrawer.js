import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilliary/Auxilliary';

const sideDrawer = (props) => {

    let alternateClasses = [classes.SideDrawer, classes.Close];
    if(props.open) {
        alternateClasses = [classes.SideDrawer, classes.Open];
    }
    return (
       <Aux>
            <Backdrop show={props.open} clicked={props.closed}/> 
            <div className={alternateClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
       </Aux>
    );
};

export default sideDrawer;