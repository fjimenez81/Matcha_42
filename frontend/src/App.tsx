import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import './App.css';

/*COMPONENTS*/

import { HomePage } from './components/mainPage/Home/home';
import { InitProfile } from './components/mainPage/InitProfile/initProfile';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/initProfile" exact component={InitProfile} />
          <Redirect to="/" />
        </Switch>
    </Router>
  );
}

export default App;
