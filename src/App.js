import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import Routes from "./components/routs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect className="heder-color">
          <Navbar.Header>
            <Navbar.Brand>
              <Link Link to="/">
                <h4 style={{ color: "black" }}> MyPortfolio</h4>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1}>
                <Link to="/resume" style={{ color: "black" }}>
                  <h4>Resume</h4>
                </Link>
              </NavItem>
              <NavItem eventKey={2}>
                <Link to="/projects" style={{ color: "black" }}>
                  <h4>Projects</h4>
                </Link>
              </NavItem>
              <NavItem eventKey={3}>
                <Link to="/contacts" style={{ color: "black" }}>
                  <h4>Contacts</h4>
                </Link>
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
