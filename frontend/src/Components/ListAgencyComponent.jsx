import React, { Component } from "react";
import AgencyService from "../Services/AgencyService";

class ListAgencyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      agencies: [],
    };
    this.addAgency = this.addAgency.bind(this);
    this.editAgency = this.editAgency.bind(this);
    this.deleteAgency = this.deleteAgency.bind(this);
  }

  deleteAgency(id) {
    AgencyService.deleteAgency(id).then((res) => {
      this.setState({
        agencies: this.state.agencies.filter((agency) => agency.id !== id),
      });
    });
  }
  viewAgency(id) {
    this.props.history.push(`/view-agency/${id}`);
  }
  editAgency(id) {
    this.props.history.push(`/add-agency/${id}`);
  }

 async componentDidMount() {
    AgencyService.getAgencies().then((res) => {
      this.setState({ agencies: res.data });
    });

    let result;
    await fetch("http://localhost:8080/api/v1/agencies")
      .then((response) => response.json())
      .then((data) => (result = data))
      .then(() => console.log(result));
    console.log(result);
    let getDBAgencyName = result.map(function (element) {
      return `${element.agency_name}`;
    });
    let dbPass = result.map(function (element) {
      return `${element.password}`;
    });
 }

  addAgency() {
    this.props.history.push("/add-agency/_add");
  }

  render() {
    return (
      <div>
          <a href="/AdminLogin/Admin" className="offset-md-11">
          Back
        </a>
        <div  style={{ fontFamily: 'Fraktur',backgroundColor: "#85C1E9" }}>
          <center>
            <h1>Agencies List</h1>
          </center>
        </div>
      
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>&emsp;Agency Name</th>
                <th> Agency State</th>
                <th> Agency District</th>
                <th> Agency Address</th>
                <th> Contact Info</th>
                <th> Total Childs</th>
                <th> Adoptable Childs</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.agencies.map((agency) => (
                <tr key={agency.id}>
                  <td> &emsp;{agency.agencyName} </td>
                  <td> {agency.astate}</td>
                  <td> {agency.district}</td>
                  <td> {agency.address} </td>
                  <td> {agency.contactInfo}</td>
                  <td> {agency.totalChilds}</td>
                  <td> {agency.adoptableChilds}</td>
                  <td>
                    <button
                      onClick={() => this.editAgency(agency.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "px" }}
                      onClick={() => this.deleteAgency(agency.id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListAgencyComponent;
