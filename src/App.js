import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./component/Router/Home";
import About from "./component/Router/About";
import Dashbord from "./component/Router/Dashbord";
import Error from "./component/Router/Error";
import Post from "./component/Router/Post";
import Service from "./component/Router/Service";
import NavBar from "./component/Router/Navbar";

function App() {
  const isLogIn = true;

  return (
    <Router>
      <NavBar />
      <h1>Use React Router </h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Dashbord" component={Dashbord} />
        {/* <Route
          exact
          path="/Service"
          render={() => <Service work="we are doing something" />}
        /> */}
        //another rule for sent props from route
        <Route exact path="/Service">
          <Service work="we are doing something" />
        </Route>
        <Route exact path="/Post/:category/:topic" component={Post} />
        <Route exact path="/login">
          {isLogIn ? <Redirect to="/Dashbord" /> : <Home />}
        </Route>
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
