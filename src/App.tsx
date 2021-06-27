import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
import './styles/media-query.css';
import LoginSignupPage from "./pages/LoginSignupPage";
import PrivateRoute from "./utilities/PrivateRoute";
import { useAppSelector } from "./utilities/typedReduxHooks";
import { useDispatch } from "react-redux";
import { getProfile } from "./actions/authActions";
import Profile from "./pages/Profile";

function App() {
  const dispatch = useDispatch();
  const auth = useAppSelector((state) => state.auth);
  const { isAuthenticated } = auth;

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getProfile());
    }
  }, [isAuthenticated, dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route
            exact
            path="/:parameter(login|signup)"
            component={LoginSignupPage}
          />
          <Route exact path="/:username" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
