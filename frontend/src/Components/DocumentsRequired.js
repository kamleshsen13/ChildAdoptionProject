import React, { Component } from "react";
import Navbar from "./Navbar";

export default class DocumentsRequired extends Component {
  render() {
    return (
      <div id='docRequired'>
      <Navbar/>
        <div className="container" style={{ width: "900px", height: "500px" }}>
          <br />
          <div className="bg-light">
            <div className="container mt-8">
              <div style={{ color: "tomato" }}>
                <h3>Documents Required:</h3>
              </div>
              <hr></hr>
              <div style={{ color: "blue" }}>
                <ul>
                  <li>
                    Current family photograph/ photograph of the couple or
                    person adopting a child
                  </li>
                  <li>PAN Card of the prospective adoptive parents</li>
                  <li>
                    Birth certificate/Proof of date of birth of the prospective
                    adoptive parents
                  </li>
                  <li>
                    Proof of residence (aadhar card/ voter card/
                    passport/current electricity bill/ telephone bill)
                  </li>

                  <li>
                    Proof of income of last year (salary slip/income certificate
                    issued by Govt. department/income tax return)
                  </li>
                  <li>
                    Certificate from a medical practitioner certifying that the
                    prospective adoptive parents do not suffer from any chronic,
                    contagious or fatal disease and they are fit to adopt (In
                    case of married couple, upload Medical Certificate of both
                    the applicants)
                  </li>
                  <li>Marriage certificate</li>
                  <li>
                    Divorce Decree/Declaration from the competent court or
                    affidavit on oath pertaining to divorce in case of divorce
                    governed by personal law where decree of divorce is not
                    mandatory/Death certificate of spouse in case of single
                    prospective adoptive parent (if applicable).
                  </li>
                  <li>
                    Two reference letters from acquaintances or relatives in
                    support of adoption.
                  </li>
                  <li>
                    Consent of the older child/children in the adoptive family
                    (if more than 5 years)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
