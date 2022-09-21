import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header sticky-top">
      {/* navbar */}
      <div className="header-nav">
        <nav className="navbar">
          <div className="container">
            <NavLink className="navbar-brand header-left" to="/">
              <img src="../src/assets/img/image3.png" />
            </NavLink>
            <div className="header-right">
              <NavLink className="header-right_cart" to="/carts">
                {/* <img src="../../assets/img/image 8.png" alt="" /> */}
                <i className="fa fa-cart-arrow-down" />
                <span className="header-right_cart_count">(1)</span>
              </NavLink>
              <NavLink className="header-right_text" id="login" to="/login">
                {" "}
                Login{" "}
              </NavLink>
              <NavLink className="header-right_text" to="/register">
                Register
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
      {/* menu */}
      <div className="header-menu">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Men
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Women
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Kid
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sport
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
