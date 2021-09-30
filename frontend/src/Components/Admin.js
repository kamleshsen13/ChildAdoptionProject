
import React, { Component } from "react";

import { Link } from "react-router-dom";


export class Admin extends Component {
  render() {
    return (
      <div className="adminTopDiv">
        <div  style={{ fontFamily: 'Fraktur',backgroundColor: "#85C1E9" }}>
          <center>
            <h1>Admin Services</h1>
          </center>
        </div>

        <div class="container mt-5">
          <div class="row">
            <div class="card col-3 border-primary">
              <img
                src="https://cdn4.iconfinder.com/data/icons/eldorado-user/40/registered_user-128.png"
                height="200px"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Registered Parents</h5>

                <Link to="/registeredDetails">
                  <button size="small" color="primary" style={{backgroundColor:'lightblue'}}>
                    Details
                  </button>
                </Link>
              </div>
            </div>

            <div class="card col-3 border-primary offset-1">
              <img
                src="https://cdn1.iconfinder.com/data/icons/complete-version-1/1024/add_user4-2-128.png"
                height="200px"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Add New Agency</h5>

                <Link to="/add-agency/_add">
                  <button size="small" color="primary" style={{backgroundColor:'lightblue'}}>
                    Add
                  </button>
                </Link>
              </div>
            </div>

            <div class="card col-3 border-primary offset-1">
              <img
                src="https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-133_rotate_sync-128.png"
                height="200px"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">View Agency</h5>

                <Link to="/agencies">
                  <button size="small" color="primary" style={{backgroundColor:'lightblue'}}>
                    View
                  </button>
                </Link>
              </div>
            </div>
            </div></div>

            <div class="container mt-5">
          <div class="row">
            <div class="card col-3 border-primary ">
              <img
                src="https://cdn2.iconfinder.com/data/icons/legal-law-justice/128/CHILD_CUSTODY-128.png"
                height="200px"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Add Child</h5>

                <Link to="/add-child/_add">
                  <button size="small" color="primary" style={{backgroundColor:'lightblue'}}>
                  Add
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

                <Link to="/childes">
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

                <Link to="/AdminLogin">
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

export default Admin;
