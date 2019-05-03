import React, { Component } from "react";
import { UserServices } from "../Services/Services.js";
import { Link } from "react-router-dom";
class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    UserServices(null, `/user/${params.id}`, "GET").then(response => {
      console.log(response);
      this.setState({
        user: response.data
      });
    });
  }
  render() {
    return (
      <div className="jumbotron">
        <img
          src={this.state.user.avatar}
          className="display-4"
          alt="Janet Weaver"
        />
        <hr className="my-4" />
        <p className="lead">Identificación: {this.state.user.id}</p>
        <p>Nombre: {this.state.user.first_name}</p>
        <p>Apellido: {this.state.user.last_name}</p>
        <Link to="/users" className="btn btn-primary btn-lg">
          {"Volver"}
        </Link>
      </div>
    );
  }
}

export default UserDetail;
