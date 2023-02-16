import React from "react";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;

    return (
      <div>
        <h3 className="text-center">Project M4</h3>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light content-center"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ul
            className="navbar-nav"
            style={{
              listStyleType: "none",
              display: "flex",
              justifyContent: "space-between",
              width: "50%",
            }}
          >
            <li className="nav-item active">
              <a className="nav-link" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
