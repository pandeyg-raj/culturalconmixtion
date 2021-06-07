import React from "react";
import "./App.css";

function Nav() {
  return (
    <div className="navcontainer">
      <nav className="navbar navbar-expand-lg  navbar-dark red">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon icon-color"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                about us <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                document
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                store
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
