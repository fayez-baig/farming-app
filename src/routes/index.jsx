import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Login from "./../pages/Login/Login";
import Signup from "./../pages/Signup/Signup";
import Farm from "./../pages/Farm/Farm";

const AppRouter = () => {
  return (
    <Router>
      {/* <Container> */}
      <Route exact path="/" component={Farm} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      {/* </Container> */}
    </Router>
  );
};

export default AppRouter;
