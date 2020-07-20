import React from "react";
// import {Link} from "react-router-dom";
import NavigationItems from '../Navigation/NavigationItems';

//Functional Component 
const MainPage = () => {
  return (
    <div>
      <nav>
        <NavigationItems/>
      </nav>
      <h3>This is Main Page</h3>
    </div>
  );
};

export default MainPage;