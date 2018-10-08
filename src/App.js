import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import Histoire from "./Contact";
import Product from "./Product";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink exact to="/">
            {" "}
            Accueil{" "}
          </NavLink>
          <NavLink activeClassName="selected" to="/page-de-histoire">
            {" "}
            Histoire{" "}
          </NavLink>
          <NavLink to="/page-de-produit"> Product </NavLink>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page-de-histoire" component={Histoire} />
            <Route path="/page-de-produit" component={Product} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
