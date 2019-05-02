import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import {} from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "../Redux/store";
import Welcome from "../Components/Welcome.js";
import Userlist from "../Components/Userlist.js";
import UserDetail from "../Components/UserDetail.js";
import Error from "../Components/Error.js";

class MainLayout extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
              <Link className="navbar-brand" to="/">
                AdmanIT Test
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/users">
                      Users
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <Switch>
              <Route path="/" component={Welcome} exact />
              <Route path="/users" component={Userlist} />
              <Route path="/user/:id" component={UserDetail} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default MainLayout;
