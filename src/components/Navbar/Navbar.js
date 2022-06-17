import React, {Component} from 'react';
import logo from '../Navbar/Logo.png';
import { HashLink as Link } from "react-router-hash-link";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link smooth to="#">
              <img src={logo} width="170px" alt="The Krusty Krab" />
            </Link>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link smooth to="#">Home</Link>
            </li>
            <li>
              <Link smooth to="#Menu">Menu</Link>
            </li>
            <li>
              <Link smooth to="#Reserve">Reserve</Link>
            </li>
            <li>
              <Link smooth to="#Gallery">Gallery</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}