import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class GlobalNavigation extends Component {
  render() {
    return (
      <div>
        <header className="header d-flex flex-row">
          <div className="header_content d-flex flex-row align-items-center">
            {/* Logo */}
            <div className="logo_container">
                <div className="logo">
                    <img src="/images/logo.png" alt="" />
                    <span>course</span>
                </div>
            </div>
            {/* Main Navigation */}
            <nav className="main_nav_container">
                <div className="main_nav">
                    <ul className="main_nav_list">
                        <li className="main_nav_item">
                            <NavLink exact to="/">courses</NavLink>
                        </li>
                        <li className="main_nav_item">
                            <NavLink to="/courses-details">courses Details</NavLink>
                        </li>
                        <li className="main_nav_item">
                            <NavLink to="/courses-details">news</NavLink>
                        </li>
                        <li className="main_nav_item">
                            <NavLink to="/courses-details">about us</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
          </div>
          <div className="header_side d-flex flex-row justify-content-center align-items-center">
                <img src="/images/phone-call.svg" alt="" />
                <span>+43 4566 7788 2457</span>
          </div>
          {/* Hamburger */}
          <div className="hamburger_container">
                <i className="fas fa-bars trans_200" />
          </div>
        </header>
      </div>
    );
  }
}

export default GlobalNavigation;
