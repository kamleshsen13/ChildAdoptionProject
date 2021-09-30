import React, { Component } from "react";

import { Link } from "react-router-dom";
export class UserPage extends Component {
  constructor() {
    super();

    this.state = {
      Email: localStorage.getItem("UserEmailID")      
    };
  }

  render() {
    let userEmail = this.state.Email
    return (
      <div id="userLogin">
      <div style={{ fontFamily: 'Fraktur',backgroundColor: "#85C1E9" }}>
        <center>
          <h1>Adoption Spot</h1></center>
      </div>

    <h4>&emsp;Welcome {userEmail},</h4>

      <div class="container mt-5">
          <div class="row" style={{position:'relative',left:'46px',top: '88px'}}>
            <div class="card col-3 border-primary" >
              <img
                src="https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/view-dashboard-128.png"
                height="200px" 
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Information</h5>

                <Link to="/Notification">
                  <button size="small" color="primary" style={{backgroundColor:'lightblue'}}>
                   Info
                  </button>
                </Link>
              </div>
            </div>

            <div class="card col-3 border-primary offset-1" >
              <img
                src="https://cdn0.iconfinder.com/data/icons/vpn-security-1-3/1024/file_view-128.png"
                height="200px"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">View Child</h5>

                <Link to="/UserPage/childData">
                  <button size="small" color="primary" style={{backgroundColor:'lightblue'}}>
                    View
                  </button>
                </Link>
              </div>
            </div>

           
            <div class="card col-3 border-primary offset-1" >
              <img
                src="https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-010_exit_logout-128.png"
                height="200px"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Sign Out</h5>

                <Link to="/Header">
                  <button size="small" color="primary" style={{backgroundColor:'lightblue'}}>
                  Logout
                  </button>
                </Link>
              </div>
            </div>

            
          </div>
        </div>


     
      </div>
    );
  }
}

export default UserPage;
