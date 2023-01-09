/* eslint-disable jsx-a11y/img-redundant-alt */
import "./Navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import logo1 from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/Asset 16@4x.png";
import cartImg from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/carts.png";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Menu from "./Menu";
import Reservation from "./Reservation";
import BookOnline from "./BookOnline";

class Navbar extends Component {
  render() {
    return (
      <Router>
        <>
          <nav className="navMenu">
            <img className="header__logo" src={logo1} alt="little lemon logo" />
            <ul>
              <li>
                <Link to={"/"} className="nav-link">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/menu"} className="nav-link">
                  Menu
                </Link>
              </li>
              <li>
                <Link to={"/reservation"} className="nav-link">
                  {" "}
                  Reservation{" "}
                </Link>
              </li>
              <li>
                <Link to={"/book-online"} className="nav-link">
                  Book Online
                </Link>
              </li>
              <li>
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
              <img
                className="header__cart-img"
                src={cartImg}
                alt="cart image"
              />
            </ul>
          </nav>
          <hr />
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/menu" component={Menu} />
            <Route path="/reservation" component={Reservation} />
            <Route path="/book-online" component={BookOnline} />
            <Route path="/login" component={Login} />
          </Routes>
        </>
      </Router>
    );
  }
}

export default Navbar;
