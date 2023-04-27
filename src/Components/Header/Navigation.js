import React, { Component } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand">Burrito Boyz</a>
            <ul class="nav nav-pills" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  <NavLink to="/"> Home</NavLink>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link "
                  id="pills-menu-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-menu"
                  type="button"
                  role="tab"
                  aria-controls="pills-menu"
                  aria-selected="false"
                >
                  <NavLink to="/menu"> Menu</NavLink>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  <NavLink to="/contact"> Contact</NavLink>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-about-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-about"
                  type="button"
                  role="tab"
                  aria-controls="pills-about"
                  aria-selected="false"
                >
                  <NavLink to="/about"> About</NavLink>
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabindex="0"
              ></div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              ></div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabindex="0"
              ></div>
              <div
                class="tab-pane fade"
                id="pills-disabled"
                role="tabpanel"
                aria-labelledby="pills-disabled-tab"
                tabindex="0"
              ></div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
