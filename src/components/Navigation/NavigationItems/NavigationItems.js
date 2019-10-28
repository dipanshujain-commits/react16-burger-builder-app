import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
   <ul className={classes.NavigationItems}>
       <NavigationItem link="/" active>Burger Builder</NavigationItem>  {/*Here active means active = {true} */}
       <NavigationItem link="/">Checkout</NavigationItem>
   </ul>
);

export default navigationItems;