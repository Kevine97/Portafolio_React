import React from "react";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error404 from "./componentes/Error404";

const AppPrincipal = () => {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={()=><App/>}  />
          <Route  path="*" component={()=><Error404/>}  />
      </Switch>
    </Router>
  );
};

export default AppPrincipal;
