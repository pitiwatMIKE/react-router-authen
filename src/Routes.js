import React from "react";
import { Route, Redirect } from "react-router-dom";

import Public from "./components/Public";
import Protected from "./components/Protected";
import Login from "./components/Login";

import {useAuth} from "./hook/ProviderAuth"

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default function Routes() {
  const auth = useAuth()
  return (
    <div>
      <Route path="/public">
        <Public />
      </Route>
      <PrivateRoute path="/protected">
        <Protected />
      </PrivateRoute>
      {!auth.user? 
      (<Route path="/login">
      <Login />
    </Route>):""}
    </div>
  );
}
