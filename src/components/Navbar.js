import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> c2b795bc726be479000f27e43d96c9e6174dd15f
import PropTypes from "prop-types";

export default function Navbar(props) {
  const clickedHome = () => {
    document.getElementById("about").className = "nav-link";
    document.getElementById("home").className = "nav-link active";
  };
  const clickedAbout = () => {
    document.getElementById("about").className = "nav-link active";
    document.getElementById("home").className = "nav-link";
  };
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" onClick={clickedHome} href="/">
            TextUtils
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home"
                  onClick={clickedHome}
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "dark" ? "light" : "dark"
              } me-3`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id={`flexSwitchCheck${"Default"}`}
                onClick={props.togglemode}
              />
              <label
                className="form-check-label "
                htmlFor="flexSwitchCheckDefault"
                id="togglemode"
              >
                Go Dark!
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  mode: PropTypes.string,
};
Navbar.defaultProps = {
  mode: "light",
};
