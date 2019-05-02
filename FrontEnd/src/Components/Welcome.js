import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
class Welcome extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <img src={logo} className="img img-responsive" alt="logo" />
          <h1>Andres Mauricio Londoño Zapata</h1>
          <p>Prueba de React Presentada para AdmanIT</p>
          <Link className="btn btn-primary" to="/users">
            Iniciar
          </Link>
        </div>
      </div>
    );
  }
}
export default Welcome;
