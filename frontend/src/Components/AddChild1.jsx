import React, { Component } from "react";
import ChildService from "../Services/ChildService";

class AddChild1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      childName: "",
      gender: "",
      age: "",
      img: "",  
      selectedFile: null,
      handicaped: "",
      agencyNamee: "",
      descChild: "",
      getAgncyData:"",
    };
    this.changeChildNameHandler = this.changeChildNameHandler.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.changeAgeHandler = this.changeAgeHandler.bind(this);
    this.changeImgHandler = this.changeImgHandler.bind(this);
    this.changeHandicapedHandler = this.changeHandicapedHandler.bind(this);
    this.changeAgencyNameeHandler = this.changeAgencyNameeHandler.bind(this);
    this.changeDescChildHandler = this.changeDescChildHandler.bind(this);
    this.saveOrUpdateChild = this.saveOrUpdateChild.bind(this);
  }

  // step 3
  async componentDidMount() {
    // step 4
    debugger
    var result;
    await fetch("http://localhost:8080/api/v1/agencies")
      .then((response) => response.json())
      .then((data) => (result = data))
      .then(() => console.log(result));
    console.log(result);
    let getDBAgencyName = result.map(function (element) {
      return `${element.agencyName}`;
    });  

    this.setState({
      getAgncyData: result
     
    });
    console.log(this.state.agencyNamee)
    if (this.state.id === "_add") {
      return;
    } else {
      ChildService.getChildById(this.state.id).then((res) => {
        let child = res.data;
        this.setState({
          childName: child.childName,
          gender: child.gender,
          age: child.age,
          img: child.img,
          handicaped: child.handicaped,
          agencyNamee: child.agencyNamee,
          descChild: child.descChild,
        });
      });
     }
    
    
  }
  saveOrUpdateChild = (e) => {
    e.preventDefault();
    const formData = new FormData(); 
     formData.append( 
      "myFile", 
      this.state.selectedFile, 
      this.state.selectedFile.name 
    ); 
    let child = {
      childName: this.state.childName,
      gender: this.state.gender,
      age: this.state.age,
      img:  this.state.selectedFile.name ,
      handicaped: this.state.handicaped,
      agencyNamee: this.state.agencyNamee,
      descChild: this.state.descChild,
    };
    console.log("child => " + JSON.stringify(child));

    // step 5
    if (this.state.id === "_add") {
      ChildService.createChild(child).then((res) => {
        alert("Successfully Added")
        this.props.history.push("/AdminLogin/Admin");
      });
    } else {
      ChildService.updateChild(child, this.state.id).then((res) => {
        this.props.history.push("/childes");
      });
    }
  };

  changeChildNameHandler = (event) => {
    this.setState({ childName: event.target.value });
  };

  changeGenderHandler = (event) => {
    this.setState({ gender: event.target.value });
  };

  changeAgeHandler = (event) => {
    this.setState({ age: event.target.value });
  };

  changeImgHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] }); 

  };

  changeHandicapedHandler = (event) => {
    this.setState({ handicaped: event.target.value });
  };

  changeAgencyNameeHandler = (event) => {
    this.setState({ agencyNamee: event.target.value });
  };

  changeDescChildHandler = (event) => {
    this.setState({ descChild: event.target.value });
  };

  cancel() {
    this.props.history.push("/AdminLogin/Admin");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Child</h3>;
    } else {
      return <h3 className="text-center">Update Child</h3>;
    }
  }

  render() {
    const { getAgncyData } = this.state;

	let agencyNameList = getAgncyData.length > 0
		&& getAgncyData.map((item,i ) => {
		return (
			<option  key={i} value={item.agencyName}>{item.agencyName}</option>
		)
	}, this);

    return (
      <div className="container" style={{ width: "900px", height: "900px" }}>
        <br />
        <div className="bg-light">
          <div className="container mt-8">
            <div style={{ color: "green" }}>
              <h1>Add/Update child to agency</h1>
            </div>
            <hr className="divider col-8"></hr>
            <div className="col-10">
              <form>
                <div className="form-group row">
                  <label className="col-3 col-form-label">Child Name:-</label>
                  <div className="col-5">
                    <input
                      type="text"
                      placeholder="Child Name"
                      name="childName"
                      class="form-control"
                      value={this.state.childName}
                      onChange={this.changeChildNameHandler}
                    />
                  </div>
                </div>
                <br />
                <div className="form-group row">
                  <label className="col-3 col-form-label radio">Gender:-</label>
                  <div className="col-5" onChange={this.changeGenderHandler}>
                    <input type="radio" name="gender" value="Male" />
                    Male&emsp;&emsp;
                    <input type="radio" name="gender" value="Female" />
                    Female
                  </div>
                </div>
                <br />
          
                <div className="form-group row">
                  <label className="col-3 col-form-label">Age:-</label>
                  <div className="col-5">
                    <input
                      type="text"
                      placeholder="Age"
                      name="age"
                      class="form-control"
                      value={this.state.age}
                      onChange={this.changeAgeHandler}
                    />
                  </div>
                </div>
                <br />
                <div className="form-group row">
                  <label className="col-3 col-form-label">Upload Image:-</label>
                  <div className="col-5">
                    <input
                      type="file"
                      id="myFile"
                      name="img"
                      value={this.state.img}
                      onChange={this.changeImgHandler}
                    />
                  </div>
                </div>
                <br />
                <div className="form-group row">
                  <label className="col-3 col-form-label">
                    Physically handicapped:-
                  </label>
                  <div
                    className="col-5"
                    onChange={this.changeHandicapedHandler}
                  >
                    <br />
                    <input type="radio" name="yes" value="Yes" />
                    Yes&emsp;&emsp;
                    <input type="radio" name="yes" value="No" />
                    No
                  </div>
                </div>
                <br />
              
                <div className="form-group row">
                  <label className="col-3 col-form-label">
                    {" "}
                    Belong to the agency:-:-
                  </label>
                  <div className="col-5">
                    <select
                      className="col-10"
                      placeholder="agency"
                      name="agencyNamee"
                      value={this.state.agencyNamee}
                      onChange={this.changeAgencyNameeHandler}
                    >
                      <option selected className="form-control">
                        Please Select
                      </option>
                      {/* for(i=0; i<5; i++){
                      <option>{this.state.agencyNamee[i]}</option>} */}
                      {agencyNameList}
                      
                    </select>
                  </div>
                </div>
                <br />
                <div className="form-group row">
                  <label className="col-3 col-form-label">
                    Discription about the child:-
                  </label>
                  <div className="col-5">
                    <input
                      type="text"
                      placeholder="DescChild"
                      name="descChild"
                      class="form-control"
                      value={this.state.descChild}
                      onChange={this.changeDescChildHandler}
                    />
                  </div>
                </div>
                <br />
                <br />
               
                <button
                  className="btn btn-success"
                  disabled={this.state.childName.length===0 ||this.state.age.length===0 ||this.state.agencyNamee.length===0
                    ||this.state.descChild.length===0} 
                  onClick={this.saveOrUpdateChild}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.cancel.bind(this)}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddChild1;