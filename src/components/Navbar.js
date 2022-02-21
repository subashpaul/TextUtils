import React from "react";
import { Link } from "react-router-dom";
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
  const toggleColor = (color) => {
    document.body.classList = "bg-" + color;
  };
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" onClick={clickedHome} to="/">
            TextUtils
          </Link>
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
                <Link
                  className="nav-link active"
                  id="home"
                  onClick={clickedHome}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="about"
                  onClick={clickedAbout}
                  aria-current="page"
                  to="/Aboutus"
                >
                  About Us
                </Link>
              </li>
            </ul>
            <div className="d-felx">
              <button
                className="btn m-1 btn-warning rounded"
                onClick={() => toggleColor("warning")}
              ></button>
              <button
                className="btn m-1 btn-success rounded"
                onClick={() => toggleColor("success")}
              ></button>
              <button
                className="btn m-1 btn-secondary rounded"
                onClick={() => toggleColor("secondary")}
              ></button>
              <button
                className="btn m-1 me-2 btn-danger rounded"
                onClick={() => toggleColor("danger")}
              ></button>
            </div>

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
