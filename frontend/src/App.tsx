import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import './App.css';

/*COMPONENTS*/

import { HomePage } from './components/mainPage/Home/home';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Redirect to="/" />
        </Switch>
    </Router>
  );
}

export default App;
