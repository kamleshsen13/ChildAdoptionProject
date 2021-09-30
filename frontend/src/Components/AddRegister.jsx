import React, { Component } from "react";
import RegisterService from "../Services/RegisterService";

class AddRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // step 2
      id: this.props.match.params.id,
      childid: this.props.location.state.chlID,
      martialStatus: "",
      gender: "",
      mparentName: "",
      fparentName: "",
      mAge: "",
      fAge: "",
      mOccupation: "",
      fOccupation: "",
      mIncome: "",
      fIncome: "",
      mwHours: "",
      fwHours: "",
      childrens: "",
      address: "",
      city: "",
      astate: "",
      district: "",
      pincode: "",
      mobile: "",
      email:'',
      aadharNo: "",
      regDate: "",
      isActive: "",
      document: "",
      selectedFilee: null,
      hsr: "",
    };
   
    this.changeMartialStatusHandler =this.changeMartialStatusHandler.bind(this);
    this.changegenderHandler = this.changegenderHandler.bind(this);
    this.changeMparentNameHandler = this.changeMparentNameHandler.bind(this);
    this.changeFparentNameHandler = this.changeFparentNameHandler.bind(this);
    this.changemAgeHandler = this.changemAgeHandler.bind(this);
    this.changefAgeHandler = this.changefAgeHandler.bind(this);
    this.changemOccupationHandler = this.changemOccupationHandler.bind(this);
    this.changefOccupationHandler = this.changefOccupationHandler.bind(this);
    this.changemIncomeHandler = this.changemIncomeHandler.bind(this);
    this.changefIncomeHandler = this.changefIncomeHandler.bind(this);
    this.changeMwHoursHandler = this.changeMwHoursHandler.bind(this);
    this.changeFwHoursHandler = this.changeFwHoursHandler.bind(this);
    this.changeChildrensHandler = this.changeChildrensHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changeCityHandler = this.changeCityHandler.bind(this);
    this.changeAstateHandler = this.changeAstateHandler.bind(this);
    this.changeDistrictHandler = this.changeDistrictHandler.bind(this);
    this.changePincodeHandler = this.changePincodeHandler.bind(this);
    this.changeMobileHandler = this.changeMobileHandler.bind(this);
    this.changeEmailHandler= this.changeEmailHandler.bind(this);
    this.changeAadharNoHandler = this.changeAadharNoHandler.bind(this);
    this.changeRegDateHandler = this.changeRegDateHandler.bind(this);
    this.changeIsActiveHandler = this.changeIsActiveHandler.bind(this);
    this.changeDocumentHandler = this.changeDocumentHandler.bind(this);
    this.changeHsrHandler = this.changeHsrHandler.bind(this);
    this.saveOrUpdateRegister = this.saveOrUpdateRegister.bind(this);
    
  }

  // step 3
  componentDidMount() {
    console.log(this.props.location.state.chlID)
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      RegisterService.getRegisterById(this.state.id).then((res) => {
        let register = res.data;
        this.setState({
          childid: register.childid,
          // parentsImg: register.parentsImg,
          martialStatus: register.martialStatus,
          gender: register.gender,
          mparentName: register.mparentName,
          fparentName: register.fparentName,
          mAge: register.mAge,
          fAge: register.fAge,
          mOccupation: register.mOccupation,
          fOccupation: register.fOccupation,
          mIncome: register.mIncome,
          fIncome: register.fIncome,
          mwHours: register.mwHours,
          fwHours: register.fwHours,
          childrens: register.childrens,
          address: register.address,
          city: register.city,
          astate: register.astate,
          district: register.district,
          pincode: register.pincode,
          mobile: register.mobile,
          email: register.email,
          aadharNo: register.aadharNo,
          regDate: register.regDate,
          isActive: register.isActive,
          document: register.document,
          hsr: register.hsr,
        });
      });
    }
  }
  saveOrUpdateRegister = (r) => {
    r.preventDefault();
    let register = {
      childid: this.state.childid,
      // parentsImg: this.state.selectedFile.name ,
      martialStatus: this.state.martialStatus,
      gender: this.state.gender,
      mparentName: this.state.mparentName,
      fparentName: this.state.fparentName,
      mAge: this.state.mAge,
      fAge: this.state.fAge,
      mOccupation: this.state.mOccupation,
      fOccupation: this.state.fOccupation,
      mIncome: this.state.mIncome,
      fIncome: this.state.fIncome,
      mwHours: this.state.mwHours,
      fwHours: this.state.fwHours,
      childrens: this.state.childrens,
      address: this.state.address,
      city: this.state.city,
      astate: this.state.astate,
      district: this.state.district,
      pincode: this.state.pincode,
      mobile: this.state.mobile,
      email: this.state.email,
      aadharNo: this.state.aadharNo,
      regDate: this.state.regDate,
      isActive: this.state.isActive,
      document: this.state.selectedFilee.name ,
      hsr: this.state.hsr,
    };
    console.log("register => " + JSON.stringify(register));
    alert("Your Registration Done!!!!!!!!!");

    // step 5
    if (this.state.id === "_add") {
      RegisterService.createRegister(register).then((res) => {
        this.props.history.push("/UserPage/childData");
      });
    } else {
      RegisterService.updateRegister(register, this.state.id).then((res) => {
        this.props.history.push("/userPage");
      });
    }
  };

  changeMartialStatusHandler = (event) => {
    this.setState({ martialStatus: event.target.value });
  };

  changegenderHandler = (event) => {
    this.setState({ gender: event.target.value });
  };

  changeMparentNameHandler = (event) => {
    this.setState({ mparentName: event.target.value });
  };

  changeFparentNameHandler = (event) => {
    this.setState({ fparentName: event.target.value });
  };

  changemAgeHandler = (event) => {
    this.setState({ mAge: event.target.value });
  };

  changefAgeHandler = (event) => {
    this.setState({ fAge: event.target.value });
  };
  changemOccupationHandler = (event) => {
    this.setState({ mOccupation: event.target.value });
  };
  changefOccupationHandler = (event) => {
    this.setState({ fOccupation: event.target.value });
  };
  changemIncomeHandler = (event) => {
    this.setState({ mIncome: event.target.value });
  };
  changefIncomeHandler = (event) => {
    this.setState({ fIncome: event.target.value });
  };
  changeMwHoursHandler = (event) => {
    this.setState({ mwHours: event.target.value });
  };
  changeFwHoursHandler = (event) => {
    this.setState({ fwHours: event.target.value });
  };
  changeChildrensHandler = (event) => {
    this.setState({ childrens: event.target.value });
  };
  changeAddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };
  changeCityHandler = (event) => {
    this.setState({ city: event.target.value });
  };

  changeAstateHandler = (event) => {
    this.setState({ astate: event.target.value });
  };
  changeDistrictHandler = (event) => {
    this.setState({ district: event.target.value });
  };
  changePincodeHandler = (event) => {
    this.setState({ pincode: event.target.value });
  };
  changeMobileHandler = (event) => {
    this.setState({ mobile: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changeAadharNoHandler = (event) => {
    this.setState({ aadharNo: event.target.value });
  };
  changeRegDateHandler = (event) => {
    this.setState({ regDate: event.target.value });
  };

  changeIsActiveHandler = (event) => {
    this.setState({ isActive: event.target.value });
  };
  changeDocumentHandler = (event) => {
    this.setState({ selectedFilee: event.target.files[0] });
  };
  changeHsrHandler = (event) => {
    this.setState({ hsr: event.target.value });
  };

  cancel() {
    this.props.history.push("/UserPage/childData");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Register</h3>;
    } else {
      return <h3 className="text-center">Update Registration</h3>;
    }
  }

  render() {
    return (
      <div className="container" style={{ width: "900px", height: "900px" }}>
        <br />
        <div className="bg-light">
          <div className="container mt-8">
            <div style={{ color: "green" }}>
              <h1>Register For Adopt Child</h1>
            </div>
            <hr className="divider col-8"></hr>
            <div className="col-10">
              <form>
                <div className="form-group row">
                  <label className="col-4 col-form-label">Child Id:-</label>
                  <div className="col-6">
                    <input
                      type="text"
                      placeholder="Child Id"
                      name="childid"
                      class="form-control"
                      value={this.state.childid}
                      
                    />
                  </div>
                </div>
                <b>
                  {" "}
                  <u className="col-form-label text-primary">Personal Info:-</u>
                </b>
                <br />
                <b>
                  {" "}
                  <u className="col-form-label text-primary">
                    Applicant Category:-
                  </u>
                </b>
                <div className="form-group row">
                  <label className="col-4 col-form-label">Status:-</label>
                  <div className="col-6" onChange={this.changegenderHandler}>
                    <input type="radio" name="gender" value="male" />
                    Male&emsp;&emsp;
                    <input type="radio" name="gender" value="female" />
                    Female&emsp;&emsp;
                    <input type="radio" name="gender" value="couple" />
                    Couple
                  </div>
                </div>
                <b>
                  {" "}
                  <u className="col-form-label text-primary">
                    Marital status:-
                  </u>
                </b>
                <div className="form-group row">
                  <label className="col-4 col-form-label">
                    Marital status:-
                  </label>
                  <div className="col-5">
                    <select
                      className="col-12"
                      name="martialStatus"
                      value={this.state.martialStatus}
                      onChange={this.changeMartialStatusHandler}
                    >
                      <option selected class="form-control">
                        Select
                      </option>
                      <option>Married</option>
                      <option>Single</option>
                      <option>Widow</option>
                      <option>Divorce</option>
                    </select>
                  </div>
                </div>
                <br />
                <b>
                  {" "}
                  <u className="col-form-label text-primary">Personal Info:-</u>
                </b>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;
                <label className="col-7 col-form-label text-danger">
                  Male:-&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;Female:-
                </label>
                <div className="form-group row">
                  <label className="col-4 col-form-label">Name:-</label>
                  <table className="col-8">
                    <tr>
                      <td>
                        {" "}
                        <input
                          type="text"
                          placeholder="Enter your name"
                          name="mparentName"
                          class="form-control"
                          value={this.state.mparentName}
                          onChange={this.changeMparentNameHandler}
                        />
                      </td>
                      <td>
                        <td>
                          <td>
                            <td>
                              <td>
                                <td>
                                  <td></td>
                                </td>
                              </td>
                            </td>
                          </td>
                        </td>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          name="fparentName"
                          class="form-control"
                          value={this.state.fparentName}
                          onChange={this.changeFparentNameHandler}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="form-group row">
                  <label className="col-4 col-form-label">Age:-</label>
                  <table className="col-8">
                    <tr>
                      <td>
                        {" "}
                        <input
                          type="text"
                          name="mAge"
                          class="form-control"
                          value={this.state.mAge}
                          onChange={this.changemAgeHandler}
                        />
                      </td>
                      <td>
                        <td>
                          <td>
                            <td>
                              <td>
                                <td>
                                  <td></td>
                                </td>
                              </td>
                            </td>
                          </td>
                        </td>
                      </td>
                      <td>
                        <input
                          type="text"
                          name="fAge"
                          class="form-control"
                          value={this.state.fAge}
                          onChange={this.changefAgeHandler}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <b>
                  {" "}
                  <u className="col-form-label text-primary">
                    Professional Info:-
                  </u>
                </b>
                <div className="form-group row">
                  <label className="col-4 col-form-label">Occupation:-</label>
                  <table className="col-5">
                    <tr>
                      <td>
                        <select
                          className="col-14"
                          name="fOccupation"
                          value={this.state.fOccupation}
                          onChange={this.changefOccupationHandler}
                        >
                          <option selected class="form-control">
                            Select
                          </option>
                          <option>Marketing</option>
                          <option>Service</option>
                          <option>Goverment Employee</option>
                          <option>Engineer</option>
                          <option>Other</option>
                        </select>
                      </td>

                      <td>
                        <td>
                          <td>
                            <td>
                              <td>
                                <td>
                                  <td>
                                    <td>
                                      <td>
                                        <td>
                                          <td>
                                            <td>
                                              <td>
                                                <td>
                                                  <td>
                                                    <td>
                                                      <td>
                                                        <td>
                                                          <td>
                                                            <td>
                                                              <td>
                                                                <td>
                                                                  <td>
                                                                    <td>
                                                                      <td>
                                                                        <td>
                                                                          <td>
                                                                            <td>
                                                                              <td>
                                                                                <td>
                                                                                  <td>
                                                                                    <td>
                                                                                      <td>
                                                                                        <td>
                                                                                          <td>
                                                                                            <td>
                                                                                              <td>
                                                                                                <td></td>
                                                                                              </td>
                                                                                            </td>
                                                                                          </td>
                                                                                        </td>
                                                                                      </td>
                                                                                    </td>
                                                                                  </td>
                                                                                </td>
                                                                              </td>
                                                                            </td>
                                                                          </td>
                                                                        </td>
                                                                      </td>
                                                                    </td>
                                                                  </td>
                                                                </td>
                                                              </td>
                                                            </td>
                                                          </td>
                                                        </td>
                                                      </td>
                                                    </td>
                                                  </td>
                                                </td>
                                              </td>
                                            </td>
                                          </td>
                                        </td>
                                      </td>
                                    </td>
                                  </td>
                                </td>
                              </td>
                            </td>
                          </td>
                        </td>
                      </td>

                      <td>
                        <select
                          className="col-14"
                          name="mOccupation"
                          value={this.state.mOccupation}
                          onChange={this.changemOccupationHandler}
                        >
                          <option selected class="form-control">
                            Select
                          </option>
                          <option>Marketing</option>
                          <option>Service</option>
                          <option>Goverment Employee</option>
                          <option>Engineer</option>
                          <option>House Wife</option>
                          <option>Other</option>
                        </select>
                      </td>
                    </tr>
                  </table>

                  <div className="form-group row">
                    <label className="col-4 col-form-label">
                      Annual Income:-
                    </label>
                    <table className="col-8">
                      <tr>
                        <td>
                          <td>
                            <td>
                              <td></td>
                            </td>
                          </td>
                        </td>
                        <td>
                          {" "}
                          <input
                            type="text"
                            name="mIncome"
                            class="form-control"
                            value={this.state.mIncome}
                            onChange={this.changemIncomeHandler}
                          />
                        </td>
                        <td>
                          <td>
                            <td>
                              <td>
                                <td>
                                  <td>
                                    <td>
                                      <td>
                                        <td>
                                          <td>
                                            <td>
                                              <td>
                                                <td>
                                                  <td>
                                                    <td></td>
                                                  </td>
                                                </td>
                                              </td>
                                            </td>
                                          </td>
                                        </td>
                                      </td>
                                    </td>
                                  </td>
                                </td>
                              </td>
                            </td>
                          </td>
                        </td>
                        <td>
                          <input
                            type="text"
                            name="fIncome"
                            class="form-control"
                            value={this.state.fIncome}
                            onChange={this.changefIncomeHandler}
                          />
                        </td>
                      </tr>
                    </table>
                  </div>
                  <br />
                  <br />

                  <div className="form-group row">
                    <label className="col-4 col-form-label">
                      no. of children do you have:-
                    </label>
                    <div className="col-4">
                      <input
                        type="text"
                        name="childrens"
                        class="form-control"
                        value={this.state.childrens}
                        onChange={this.changeChildrensHandler}
                      />
                    </div>
                  </div>
                  <br />
                  <br />

                  <b>
                    {" "}
                    <u className="col-form-label text-primary">
                      Contact Details:-
                    </u>
                  </b>

                  <div className="form-group row">
                    <label className="col-4 col-form-label">
                      Resident Address:-
                    </label>
                    <div className="col-4">
                      <textarea
                        maxlength="150"
                        rows="3"
                        cols="50"
                        name="address"
                        value={this.state.address}
                        onChange={this.changeAddressHandler}
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-4 col-form-label">City:-</label>
                    <div className="col-5">
                      <input
                        type="text"
                        name="city"
                        class="form-control"
                        value={this.state.city}
                        onChange={this.changeCityHandler}
                      />
                    </div>
                  </div>
                  <br />
                  <br />

                  <div className="form-group row">
                    <label className="col-4 col-form-label">State:-</label>
                    <div className="col-5">
                      <select
                        className="col-10"
                        name="astate"
                        value={this.state.astate}
                        onChange={this.changeAstateHandler}
                      >
                        <option selected class="form-control">
                          Please Select
                        </option>
                        <option>Maharashtra</option>
                        <option>MadhyaPradesh</option>
                        <option>Rajasthan</option>
                      </select>
                    </div>
                  </div>

                  <br />
                  <br />

                  <div className="form-group row">
                    <label className="col-4 col-form-label">District:-</label>
                    <div
                      className="col-5"
                      onChange={this.changeDistrictHandler}
                    >
                      <select
                        className="col-10"
                        name="district"
                        value={this.state.district}
                        onChange={this.changeDistrictHandler}
                      >
                        <option selected class="form-control">
                          Please Select
                        </option>
                        <option>Pune</option>
                        <option>Satara</option>
                        <option>Indore</option>
                        <option>Bhopal</option>
                        <option>Udaipur</option>
                        <option>Jaipur</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-4 col-form-label">Pincode:-</label>
                    <div className="col-5">
                      <input
                        type="text"
                        name="pincode"
                        class="form-control"
                        value={this.state.pincode}
                        onChange={this.changePincodeHandler}
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="form-group row">
                    <label className="col-4 col-form-label">
                      Mobile number:-
                    </label>
                    <div className="col-5">
                      <input
                        type="text"
                        name="mobile"
                        class="form-control"
                        value={this.state.mobile}
                        onChange={this.changeMobileHandler}
                        maxLength='12' minLength='10'
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="form-group row">
                    <label className="col-4 col-form-label">
                      Email-Id:-
                    </label>
                    <div className="col-5">
                      <input
                        type="text"
                        name="email"
                        class="form-control"
                        value={this.state.email}
                        onChange={this.changeEmailHandler}
                      />
                    </div>
                  </div>
                  <b>
                    {" "}
                    <u className="col-form-label text-primary">
                      Identifications details:-
                    </u>
                  </b>
                  <div className="form-group row">
                    <label className="col-4 col-form-label">
                      Adhaar Card Number:-
                    </label>
                    <div className="col-6">
                      <input
                        type="text"
                        name="aadharNo"
                        class="form-control"
                        value={this.state.aadharNo}
                        onChange={this.changeAadharNoHandler}
                        minLength="12" maxLength="12"
                      />
                    </div>
                  </div>

                  <b>
                    {" "}
                    <u className="col-form-label text-primary">
                      Select Agency for Home Study Report near by your
                      residence:-
                    </u>
                  </b>
                  <div className="form-group row">
                    <label className="col-5 col-form-label">
                      Name of the HSR Agency:-
                    </label>
                    <div className="col-5">
                      <select
                        className="col-10"
                        name="hsr"
                        value={this.state.hsr}
                        onChange={this.changeHsrHandler}
                      >
                        <option selected class="form-control">
                          Please Select
                        </option>
                        <option>HSR Pune</option>
                        <option>HSR Sta</option>
                        <option>HSR Indore</option>
                        <option>HSR Bhopal</option>
                        <option>HSR Udai</option>
                        <option>HSR Jai</option>
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="form-group row">
                    <label className="col-4 col-form-label">Documents to Upload:-</label>

                    <div className="col-6">
                      <input
                        type="file"
                        id="mydoc"
                        name="documents"
                        value={this.state.document}
                        onChange={this.changeDocumentHandler}
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <center>
                    <button
                      className="btn btn-primary col-6"
                      type="submit"
                      onClick={this.saveOrUpdateRegister}
                      disabled={
                        
                        this.state.gender.length === 0 ||
                        this.state.martialStatus.length === 0 ||
                        this.state.city.length === 0
                        ||
                        this.state.mobile.length === 0
                        ||
                        this.state.aadharNo.length === 0||
                        this.state.childrens.length === 0
                      }
                    >
                      Register
                    </button>

                    <button
                      className="btn btn-danger col-6"
                      type="reset"
                      onClick={this.cancel.bind(this)}
                    >
                      Cancel
                    </button>
                  </center>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddRegister;
