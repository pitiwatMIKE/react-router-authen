import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ProviderAuth from "./hook/ProviderAuth"

import Navbar from "./components/static/Navbar";
import Routes from "./Routes";

export default function App() {
  return (
    <ProviderAuth>
      <Router>
        <Navbar />
        <Switch>
          <Routes />
        </Switch>
      </Router>
      </ProviderAuth>
  );
}
