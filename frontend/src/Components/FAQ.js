import React, { Component } from 'react'
import Navbar from './Navbar'

class FAQ extends Component {
    render() {
        return (
           
            <div id='faq'>
         <Navbar/>
        
            <br />
            <div id='faqdiv'className="bg-light">
              <div className="container mt-5">
            
                <div style={{ color: "orangered" }}>
                <h3>Frequently Asked Questions about Adoption</h3>
                </div>
<hr></hr>
<div className="bg-secondary">
                <div style={{ color: "white" }}>
                <h4>1. What is Adoption?</h4>
                </div>
                </div>
                <div style={{ color: "blue"}}>
<h6>Adoption means the process through which the adopted child is permanently separated from his
biological parents and becomes the lawful child of the adoptive parents with all the rights, privileges
and responsibilities that are attached to a biological child.</h6>
                </div>
<hr></hr>
<div className="bg-secondary">
                <div style={{ color: "white" }}>
                <h4>2. Who can be adopted?</h4>
                </div>
                </div>
                <div style={{ color: "blue"}}>
<h6>An orphan, abandoned or surrendered (OAS) child who has been declared legally free for adoption by
the Child Welfare Committee (CWC).</h6>
                </div>

<hr></hr>
<div className="bg-secondary">
<div style={{ color: "white" }}>
                <h4>3. Who can adopt?</h4>
                </div>
                </div>
                <div style={{ color: "blue"}}>
<h6>Prospective adoptive parents (PAP):- who are physically, mentally and emotionally stable, financially
capable and who do not have any life threatening medical conditions are eligible to adopt.</h6>
                </div>

<hr></hr>
<div className="bg-secondary">
<div style={{ color: "white" }}>
                <h4>4. What is the minimum age of parent to adopt?</h4>
                </div>
                </div>
                <div style={{ color: "blue"}}>
<h6>The minimum age difference between the child and PAP/s shall not be less than twenty-five years.</h6>
                </div>

                <hr></hr>
<div className="bg-secondary">
<div style={{ color: "black" }}>
                <h4>Married</h4>
                </div>
                </div>
                <div style={{ color: "blue"}}>
<h6>i)Married Couple with atleast two year of stable marital relationship.<br/>
ii)Both spouces must consent for adoption in case of a married couple.<br/>
iii)The composite age of the married couple does not exceed 110years.</h6>
                </div>



                <hr></hr>
<div className="bg-secondary">
<div style={{ color: "black" }}>
                <h4>Single</h4>
                </div>
                </div>
                <div style={{ color: "blue"}}>
<h6>i)Single person with or without biological or adoptive children can adopt provided they
    satisfy the following:(a) A single female can adopt a child of any gender.(b)
    A single male is not eligible to adopt a girl child.(c)Age of a single parent does not exceed
    55 years.(d)Must have less than four children unless they are adopting a child with special needs,
    a hardto-place child, a relative's child or a step-child.</h6>
                </div>
                </div>
            </div>
        </div>
      
        );
        
    }
}
export default FAQ;