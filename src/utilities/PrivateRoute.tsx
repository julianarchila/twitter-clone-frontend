import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppSelector } from "./typedReduxHooks";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const auth = useAppSelector((state) => state.auth);
  const { isLoading, isAuthenticated } = auth;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoading ? (
          <p>Loading ...</p>
        ) : !isAuthenticated ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
