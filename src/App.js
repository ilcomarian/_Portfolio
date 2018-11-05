import React, { Component } from "react";

import "./App.css";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import Routes from "./components/routs";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect className="heder-color">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">
                <h4 style={{ color: "black" }}> MyPortfolio</h4>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="/resume">
                <h4 style={{ color: "black" }}>Resume</h4>
              </NavItem>
              <NavItem eventKey={2} href="/projects">
                <h4 style={{ color: "black" }}> Projects</h4>
              </NavItem>
              <NavItem eventKey={1} href="/contacts">
                <h4 style={{ color: "black" }}>Contacts</h4>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
