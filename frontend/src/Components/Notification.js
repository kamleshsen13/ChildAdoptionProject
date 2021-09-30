import React, { Component } from "react";

export default class Notification extends Component {
  render() {
    return (
      <div>
        <div className="container" style={{ width: "900px", height: "900px" }}>
          <br />
          <a href="/UserPage" className="offset-md-11">Back</a>
          <div className="bg-light">
            <div className="container mt-8">

            <div className="bg-info">
              <div style={{ color: "tomato" }}>
                <h3> Notifications from Adoption Portal:</h3>
              </div>
              </div>
              <hr></hr>
              <div style={{ color: "maroon" }}>
                <ol>
                  <li>
                  Dear Applicant,<br/> 
            We will send you an email for your application, whether it is accepted or rejected by adoption portal.
                  </li> <br/>
                  <li>We will send you an email on your registered email-id.</li> <br/>
                  <li> 
                  If you have not received any acceptance or rejection mail within 7 days from your application date 
           then you can contact us on our official email.
                  </li> <br/>
                  <li>
                  Please find our email-id below.
                <br/>

                 
                  Contact US:<br/>
                  Email : adoptionspot@gmail.com
                  </li>
                
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
