import React from 'react';

import classes from './NavigationItem.css';
import { NavLink } from "react-router-dom";

const navigationItem = (props) => (
    <li className="topnav">
        <NavLink 
        to={props.link}
        className={props.active ? classes.active : null} exact>{props.children}</NavLink>
    </li>
);

export default navigationItem;