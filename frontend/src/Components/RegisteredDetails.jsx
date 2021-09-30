import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import RegisterService from "../Services/RegisterService";

class registeredDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      registers: [],
   
    };
    this.addRegister = this.addRegister.bind(this); 
  }

  async componentDidMount() {   

    RegisterService.getRegisters().then((res) => {
      this.setState({ registers: res.data });
    }); 
   
  }

  addRegister() {
    this.props.history.push("/add-register/_add");
  }

  viewRegister(id){
    this.props.history.push(`/view-register/${id}`);
}
  render() {
    return (
      <div>
         
<a href="/AdminLogin/Admin" className="offset-md-11">Back</a>
  
        <div  style={{ fontFamily: 'Fraktur',backgroundColor: "#85C1E9" }}>
          <center>
            <h1>User Registered List</h1>
          </center>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
              <th>&emsp;RegistrationNo</th>
                <th> Child Id</th>
                
                <th> martial Status</th>
                {/* <th> Status</th> */}
               <th>maleName</th>
                <th> femaleName</th>
               
                <th> mobile</th>
                <th> email</th>
                <th> aadharNo</th>
                
                <th> Actions</th>
                <th>Status</th>
              </tr>
            </thead>
          
            <tbody 
         
              >
              {this.state.registers.map((register) => (
                <tr key={register.id} >
                  <th>&emsp;{register.id}</th>
                  
                  <td> {register.childid} </td>
                 
                  <td> {register.martialStatus}</td>
                  
                  <td> {register.mparentName}</td>
                  <td> {register.fparentName}</td>

                  <td> {register.mobile}</td>
                  <td> {register.email}</td>
                  <td> {register.aadharNo} </td>
                 
                  <td>
                    
                  <button onClick={ () => this.viewRegister(register.id)} 
                   className="btn btn-info col-7">More Info</button>
                   
                    {/* <Link to= {{ pathname :"/AcceptMail", state:{email : register.email } }}> */}
                    <Link to= {{ pathname :"/MailCheck", state:{email : register.email, id : register.id,
                     mparentName : register.mparentName, fparentName : register.fparentName }}}>
                       {register.status != 'Accepted' && register.status != 'Rejected' &&
                    <button type="button" className="btn btn-success col-7">
                    Approved
                   </button>}
                   </Link>
                    <Link to={{ pathname : "/MailReject", state:{email : register.email,id : register.id,
                    mparentName : register.mparentName, fparentName : register.fparentName  } }}>
                    {register.status != 'Rejected' && register.status != 'Accepted' &&
                    <button type="button" className="btn btn-danger col-7">
                    Reject
                   </button>}
                   </Link>
                  </td>
                  {register.status != 'Accepted' &&
                  <td style={{color:"red"}}>{register.status}</td>}
             {register.status != 'Rejected' &&
                  <td style={{color:"green"}}>{register.status}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default registeredDetails;
