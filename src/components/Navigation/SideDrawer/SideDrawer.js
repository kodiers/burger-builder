import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from '../../../hoc/Aux/Aux';

import classes from './SideDrawer.css';


const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }
  return (
    <Aux>
      <Backdrop clicked={props.closed} show={props.open}/>
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
