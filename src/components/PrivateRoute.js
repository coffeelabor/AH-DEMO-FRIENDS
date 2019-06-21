import React from "react";
import { Route, Redirect } from "react-router-dom";

// --- PrivateRoute component

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Let's fill this in with CODE!

  //1. Check if a user is logged in

  //2. if the user is not logged in, redirect
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
