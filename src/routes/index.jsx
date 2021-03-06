import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Login from "./../pages/Login/Login";
import Signup from "./../pages/Signup/Signup";
import Farm from "./../pages/Farm/Farm";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/" component={Farm} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Router>
  );
};

export default AppRouter;
