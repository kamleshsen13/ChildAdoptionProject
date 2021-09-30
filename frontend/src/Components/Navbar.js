import React, { Component } from 'react'
import classes from './Header.css';
import { NavLink } from "react-router-dom";
import { carousel } from "react-responsive-carousel";
import { Dropdown } from 'react-bootstrap';


class Navbar extends Component {
    render() {
        return (
            <>
       
       <nav className="navbar navbar-expand navbar-dark">
            <ul className="navbar navbar-nav ">
              <li className="nav-item">
                <NavLink
                  to="/EligibilityCrieteria"
                  className="nav-link"
                  activeClassName="text-info bg-primary"
                  className="btn btn-danger"
                >
                  Eligibility Criteria
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/documentsrequired"
                  className="nav-link"
                  activeClassName="text-info bg-primary"
                  className="btn btn-secondary"
                >
                  Documents required
                </NavLink>
              </li>

              <li className="nav-item">
                <Dropdown>
                  <Dropdown.Toggle activeClassName="text-info bg-primary" className="btn btn-success" >
                    Login to View Child
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="btn btn-primary" style={{ backgroundColor: "lightblue" }}>
                    <Dropdown.Item href="/AdminLogin"
                    >Admin</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="/Header">User</Dropdown.Item>
                    
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/view"
                  className="nav-link"
                  activeClassName="text-info bg-primary"
                  className="btn btn-primary"
                >
                  View Agencies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/AdoptionProcedure"
                  className="nav-link"
                  activeClassName="text-info bg-primary"
                  className="btn btn-warning"
                >
                  Adoption Procedure
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/aboutus"
                  className="nav-link"
                  activeClassName="text-info bg-primary"
                  className="btn btn-info"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/faq"
                  className="nav-link"
                  activeClassName="text-info bg-primary"
                  className="btn btn-dark"
                >
                  FAQs
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                to="/Header"
                className="nav-link"
                activeClassName="text-info bg-primary"
                className="btn btn-danger"
              >
                Home
              </NavLink>
            </li>
            </ul>
          </nav>
            </>
        )
    }
}

export default Navbar;
