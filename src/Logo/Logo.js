import React from 'react';

import classes from './Logo.css';
import AlgoStreak from '../assets/Images/mylogo.PNG';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={AlgoStreak} alt="AlgoStreak"/>
    </div>
);

export default logo;