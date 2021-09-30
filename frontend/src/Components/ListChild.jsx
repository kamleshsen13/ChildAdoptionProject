import React, { Component } from "react";
import ChildService from "../Services/ChildService";

class ListChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      childes: [],
    };
    this.addChild = this.addChild.bind(this);
    this.editChild = this.editChild.bind(this);
    this.deleteChild = this.deleteChild.bind(this);
  }

  deleteChild(id) {
    ChildService.deleteChild(id).then((res) => {
      this.setState({
        childes: this.state.childes.filter((child) => child.id !== id),
      });
    });
  }
  viewChild(id) {
    this.props.history.push(`/view-child/${id}`);
  }
  editChild(id) {
    this.props.history.push(`/add-child/${id}`);
  }

  componentDidMount() {
    ChildService.getChildes().then((res) => {
      this.setState({ childes: res.data });
    });
  }

  addChild() {
    this.props.history.push("/add-child/_add");
  }

  render() {
    return (
      <div>
        <a href="/AdminLogin/Admin" className="offset-md-11">
          Back
        </a>
        <div style={{ fontFamily: "Fraktur", backgroundColor: "#85C1E9" }}>
          <center>
            <h1>Children List</h1>
          </center>
        </div>
 
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>&emsp; Child Name</th>
                <th> Gender</th>
                <th> Age</th>
                
                <th> Handicaped</th>
                <th> Agency Name</th>
                <th> Child Description</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.childes.map((child) => (
                <tr key={child.id}>
                  <td>&emsp; {child.childName} </td>
                  <td> {child.gender}</td>
                  <td> {child.age}</td>
                  
                  <td> {child.handicaped}</td>
                  <td> {child.agencyNamee}</td>
                  <td> {child.descChild}</td>
                  <td>
                    {/* <button
                      onClick={() => this.editChild(child.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button> */}
                    <button
                      onClick={() => this.deleteChild(child.id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                    {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewChild(child.id)} className="btn btn-info">View </button> */}
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

export default ListChild;
