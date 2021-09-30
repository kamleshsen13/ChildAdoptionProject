import React, { Component } from "react";
import Navbar from'./Navbar';

class EligibilityCrieteria extends Component {
  render() {
    return (
      <div id='elig'>
       <Navbar/>
        <br />
        <div className="bg-light">
          <div className="container mt-8">
            <div style={{ color: "violet" }}>
              <h3>Eligibility Crieteria for Prospective Adoptive Parents</h3>
            </div>
            <hr></hr>
           
            <div style={{ color: "initial" }}>
              <h6>
                1.The prospective adoptive parents shall be physically, mentally
                and emotionally stable, financially capable and shall not have
                any life threatening medical condition.<br></br>
                <br></br>
                2.Any prospective adoptive parents, irrespective of his marital
                status and whether or not he has biological son or daughter, can
                adopt a child subject to following, namely:-<br></br>
                <br></br>
                a.the consent of both the spouses for the adoption shall be
                required, in case of a married couple;<br></br>
                b.single female can adopt a child of any gender;<br></br>
                c.single male shall not be eligible to adopt a girl child;
                <br></br>
                <br></br>
                3.No child shall be given in adoption to a couple unless they
                have at least two years of stable marital relationship.<br></br>
                <br></br>
                4.The age of prospective adoptive parents, as on the date of
                registration, shall be counted for deciding the eligibility and
                the eligibility of prospective adoptive parents to apply for
                children of different age groups shall be as under:-
              </h6>
            </div>
            <br></br>
            <table id='eligtable'>
              <thead>
                <tr style={{ background: "" }}>
                  <td style={{ background: "lightblue" }}>Age of the child</td>
                  <td style={{ background: "lightgreen" }}>
                    Maximum composite age of prospective adoptive parents
                    (couple
                  </td>
                  <td style={{ background: "pink" }}>
                    Maximum age of single prospective adoptive parent
                  </td>
                </tr>

                <tr>
                  <td style={{ background: "pink" }}>Upto 4 years</td>
                  <td style={{ background: "lightblue" }}> 90 years</td>
                  <td style={{ background: "lightgreen" }}> 45 years</td>
                </tr>

                <tr>
                  <td style={{ background: "lightblue" }}>
                    Above 4 and upto 8 years
                  </td>
                  <td style={{ background: "lightgreen" }}> 100 years</td>
                  <td style={{ background: "pink" }}> 50 years</td>
                </tr>

                <tr>
                  <td style={{ background: "pink" }}>
                    Above 8 and upto 18 years
                  </td>
                  <td style={{ background: "lightblue" }}> 110 years</td>
                  <td style={{ background: "lightgreen" }}> 55 years</td>
                </tr>
              </thead>
            </table>
            <br></br>


           
            <h6>
              5.In case of couple, the composite age of the prospective adoptive
              parents shall be counted.<br></br>
              <br></br>
              6.The minimum age difference between the child and either of the
              prospective adoptive parents shall not be less than twenty-five
              years.<br></br>
              <br></br>
              7.The age criteria for prospective adoptive parents shall not be
              applicable in case of relative adoptions and adoption by
              step-parent.<br></br>
              <br></br>
              8.Couples with three or more children shall not be considered for
              adoption except in case of special need children as defined in
              sub-regulation (21) of regulation 2, hard to place children as
              mentioned in regulation 50 and in case of relative adoption and
              adoption by step-parent.
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
export default EligibilityCrieteria;
