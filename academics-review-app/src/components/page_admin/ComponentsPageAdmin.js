import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ComponentsPageAdmin extends Component {
  ischeckAccount(password) {
    if (password === "123456") {
      return <div>You are logged in...</div>;
    }
    return <div>You are not logged in...</div>;
  }

  render() {
    var passWord = this.props.match.params.pass;
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/"} className="navbar-brand">
            HOME
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/admin-index-data"}
                  id="dropdownCourse"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Course
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdownCourse">
                  <Link className="dropdown-item" to={"/admin-create-data"}>
                    Create course
                  </Link>
                  <Link className="dropdown-item" to={"/admin-index-data"}>
                    Read course
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/admin-index-data"}
                  id="dropdownSection"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Section
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownSection"
                >
                  <Link className="dropdown-item" to={"/admin-create-section"}>
                    Create section
                  </Link>
                  <Link className="dropdown-item" to={"/admin-index-section"}>
                    Read section
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="body-admin">
              <h3>{this.ischeckAccount(passWord)}</h3>
        </div>
        <div>
          <div className="services page_section">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="section_title text-center">
                    <h1>Accessibility </h1>
                  </div>
                </div>
              </div>
              <div className="row services_row body-admin">
                <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
                  <h3>Collections course</h3>
                  <p>
                    Each course has a unique, self-created identifier in the
                    database. Currently the system only supports courses on
                    HTML, CSS, React and Python.
                  </p>
                </div>
                <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
                  <h3>Collections section</h3>
                  <p>
                    Each section must refer to the course specified through a
                    unique identifier. These components may or may not include
                    illustrative source code and programming tool links.
                  </p>
                </div>
                <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
                  <h3>Collections sample</h3>
                  <p>
                    Each course will have a small test, to assess the level of
                    knowledge acquisition that the course wants to convey. It is
                    referenced to the course by a unique identifier.
                  </p>
                </div>
                <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
                  <h3>Collections feedback</h3>
                  <p>
                    This function is intended to develop in the future. Its
                    mission is to collect user experience to maintain and
                    develop new system features in future updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
