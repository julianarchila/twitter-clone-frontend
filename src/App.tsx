import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
import LoginSignupPage from "./pages/LoginSignupPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/:parameter(login|signup)"
            component={LoginSignupPage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
