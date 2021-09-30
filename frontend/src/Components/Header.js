import React, { Children, Component } from "react";
import { NavLink } from "react-router-dom";
import { carousel } from "react-responsive-carousel";
import { Dropdown } from 'react-bootstrap';

import classes from './Header.css';
import UserLogin from "./UserLogin";

export default class Header extends Component {

  render() {
    localStorage.clear();
    return (
      <>
    <div id='header' >

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
  </ul>
</nav>
<marquee direction="down" height="80px">
  <h1 id='mar' scrollmount = "1">
    Welcome To Adoption Spot
  </h1>
  <h1 id='mar1' scrollmount = "1">
    Welcome To Adoption Spot
  </h1>
  </marquee>

{/* <img src="./Images/1.jpg" width="400" height="455" alt="" />
<img src="./Images/3.jpg" width="825" height="455" alt="" /> */}
<div>
  <div id='info1'>
    <marquee direction="up" height="450px" scrolldelay="50">
      <b><pre id='pretag'>{`1. What is Adoption?
Adoption means the process through which the adopted child is 
permanently separated from his biological parents and becomes
the lawful child of the adoptive parents with all the rights, 
privileges and responsibilities that are attached to a 
biological child.
2. Who can be adopted?
An orphan, abandoned or surrendered (OAS) child who has 
been declared legally free for adoption by the Child Welfare 
Committee (CWC).
3. Who can adopt?
Prospective adoptive parents (PAP):- who are physically, 
mentally and emotionally stable, financially capable and 
who do not have any life threatening medical conditions 
are eligible to adopt.
4. What is the minimum age of parent to adopt?
The minimum age difference between the child and PAP/s 
shall not be less than twenty-five years.
Married
i)Married Couple with atleast two year of stable marital 
relationship.
ii)Both spouces must consent for adoption in case of a 
married couple.
iii)The composite age of the married couple does not exceed 
110years.
Single
i)Single person with or without biological or adoptive 
children can adopt provided they satisfy the following:
(a) A single female can adopt a child of any gender.
(b) A single male is not eligible to adopt a girl child.
(c)Age of a single parent does not exceed 55 years.
(d)Must have less than four children unless they are 
adopting a child with special needs, a hardto-place child, 
a relative's child or a step-child.
`}</pre></b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b><pre id='pretag'>{`1. What is Adoption?
Adoption means the process through which the adopted child is 
permanently separated from his biological parents and becomes
the lawful child of the adoptive parents with all the rights, 
privileges and responsibilities that are attached to a 
biological child.
2. Who can be adopted?
An orphan, abandoned or surrendered (OAS) child who has 
been declared legally free for adoption by the Child 
Welfare Committee (CWC).
3. Who can adopt?
Prospective adoptive parents (PAP):- who are physically, 
mentally and emotionally stable, financially capable and 
who do not have any life threatening medical conditions 
are eligible to adopt.
4. What is the minimum age of parent to adopt?
The minimum age difference between the child and PAP/s 
shall not be less than twenty-five years.
Married
i)Married Couple with atleast two year of stable marital 
relationship.
ii)Both spouces must consent for adoption in case of a 
married couple.
iii)The composite age of the married couple does not exceed 
110years.
Single
i)Single person with or without biological or adoptive 
children can adopt provided they satisfy the following:
(a) A single female can adopt a child of any gender.
(b) A single male is not eligible to adopt a girl child.
(c)Age of a single parent does not exceed 55 years.
(d)Must have less than four children unless they are 
adopting a child with special needs, a hardto-place child, 
a relative's child or a step-child.
`}</pre></b>
    </marquee>

  </div>
  <div id='child2'>
    <UserLogin/>
  </div>
</div>
</div>
    
      </>
    );
  }
}
