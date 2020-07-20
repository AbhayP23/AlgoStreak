import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MainPage from "./pages";
import Problems from './pages/problems';
import Interview from './pages/interview';
import CPAlgo from './pages/cpalgo';
import NotFoundPage from './pages/404';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/problems" component={Problems} />
          <Route exact path="/interview-questions" component={Interview} />
          <Route exact path="/cp-algorithms" component={CPAlgo} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" /> 
        </Switch>
      </Router>
    );
  }
}

export default App;
