import React, { Component } from "react";
import { UserServices } from "../Services/Services.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentPage } from "../Redux/Actions/SetCurrentPage";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      pageIndex: this.props.CurrentPage,
      totalPages: 0
    };
    this.createPagination = this.createPagination.bind(this);
    this.paginationPrev = this.paginationPrev.bind(this);
    this.paginationFind = this.paginationFind.bind(this);
    this.paginationNext = this.paginationNext.bind(this);
    this.clickPaginationNumber = this.clickPaginationNumber.bind(this);
  }

  paginationPrev = () => {
    if (this.state.pageIndex > 1) {
      this.paginationFind(this.state.pageIndex - 1);
    }
  };
  paginationFind = page => {
    UserServices(null, `/users/${page}`, "GET").then(response => {
      this.props.setPage(page);
      this.setState({
        users: response.data,
        totalPages: response.total_pages,
        pageIndex: response.page
      });
    });
  };
  paginationNext = () => {
    if (this.state.pageIndex < this.state.totalPages) {
      this.paginationFind(this.state.pageIndex + 1);
    }
  };

  clickPaginationNumber = e => this.paginationFind(e.target.textContent);

  createPagination = () => {
    let pagination = [];
    let activeClass = "";
    for (let i = 1; i <= this.state.totalPages; i++) {
      if (i === this.state.pageIndex) {
        activeClass = "active";
      } else {
        activeClass = "";
      }

      pagination.push(
        <li key={i} className={`page-item ${activeClass}`}>
          <button className="page-link" onClick={this.clickPaginationNumber}>
            {i}
          </button>
        </li>
      );
    }
    return pagination;
  };

  componentDidMount() {
    UserServices(null, `/users/${this.state.pageIndex}`, "GET").then(
      response => {
        this.setState({
          users: response.data,
          totalPages: response.total_pages,
          pageIndex: response.page
        });
      }
    );
  }
  render() {
    const { users, totalPages, pageIndex } = this.state;

    const nextClass = pageIndex === totalPages ? "disabled" : "";
    const prevClass = pageIndex === 1 ? "disabled" : "";
    return (
      <div className="row">
        <div className="col-md-12">
          <h1>Listado de Usuarios</h1>
          <p>Al hacer click en el nombre puedes ver el detalle del usuario.</p>
        </div>
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Avatar</th>
                <th scope="col">Nombre</th>
              </tr>
            </thead>
            <tbody>
              {users.map(element => (
                <tr key={element.id}>
                  <td>{element.id}</td>
                  <td>
                    <img src={element.avatar} alt={element.first_name} />
                  </td>
                  <td>
                    <Link to={`/user/${element.id}`}>{`${element.first_name} ${
                      element.last_name
                    }`}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className={`page-item ${prevClass}`}>
                <button className="page-link" onClick={this.paginationPrev}>
                  Previous
                </button>
              </li>
              {this.createPagination()}
              <li className={`page-item ${nextClass}`}>
                <button className={`page-link`} onClick={this.paginationNext}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    CurrentPage: state.CurrentPage
  };
};

const mapDispatch = dispatch => {
  return {
    setPage: id => dispatch(setCurrentPage(id))
  };
};

export default connect(
  mapState,
  mapDispatch
)(UserList);
