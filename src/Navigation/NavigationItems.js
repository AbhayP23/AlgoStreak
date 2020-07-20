import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../Logo/Logo';

const navigationItems = () => (
    <header className="header">
        <ul className="NavigationItems">
            {/* <Logo classsName="Logo" /> */}
            <li className="topnav-left">
                <NavigationItem link="/">Home</NavigationItem>
                <NavigationItem link="/problems">Problems</NavigationItem>
                <NavigationItem link="/interview-questions">Interview Q&A</NavigationItem>
                <NavigationItem link="/cp-algorithms">CP & Algorithms</NavigationItem>
            </li>
            <li className="topnav-right">
                <NavigationItem link="/learnandearn">Learn & Earn</NavigationItem>
                <NavigationItem link="/search">Login</NavigationItem>
                <NavigationItem link="/signup">Sign Up</NavigationItem>
            </li>
        </ul>
    </header>
);

export default navigationItems;