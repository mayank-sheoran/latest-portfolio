import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //   Redirect,
} from "react-router-dom";

// Local Imports
import Homepage from "./Portfolio/Homepage/Homepage";
import AboutMe from "./Portfolio/AboutMe/AboutMe";

const App = () => {
  return (
    <Router>
      <div className="main-app-container">
        <Switch>
          <Route path="/" exact component={() => <Homepage />} />
          <Route path="/about" exact component={() => <AboutMe />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
