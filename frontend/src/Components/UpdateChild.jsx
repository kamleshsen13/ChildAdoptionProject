import React, { Component } from 'react'
import ChildService from '../Services/ChildService';

class UpdateChild extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            childName: '',
            gender: '',
            age: '',
            img: '',
            handicaped: '',
            agencyNamee: '',
            descChild: ''
        }
        this.changeChildNameHandler = this.changeChildNameHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeImgHandler = this.changeImgHandler.bind(this);
        this.changeHandicapedHandler = this.changeHandicapedHandler.bind(this);
        this.changeAgencyNameeHandler = this.changeAgencyNameeHandler.bind(this);
        this.changeDescChildHandler = this.changeDescChildHandler.bind(this);
        this.updateChild = this.updateChild.bind(this);
    }

    componentDidMount(){
        ChildService.getChildById(this.state.id).then( (res) =>{
            let child = res.data;
            this.setState({childName: child.childName,
                gender: child.gender,
                age : child.age,
                img : child.img,
                handicaped : child.handicaped,
                agencyNamee : child.agencyNamee,
                descChild : child.descChild
            });
        });
    }

    saveOrupdateChild = (e) => {
        e.preventDefault();
        let child = {childName: this.state.childName, gender: this.state.gender, age: this.state.age, img: this.state.img,
            handicaped: this.state.handicaped, agencyNamee: this.state.agencyNamee, descChild: this.state.descChild};
        console.log('child => ' + JSON.stringify(child));
        console.log('id => ' + JSON.stringify(this.state.id));
        ChildService.updateChild(child, this.state.id).then( res => {
            this.props.history.push('/childes');
        });
    }
    
    changeChildNameHandler= (event) => {
        this.setState({childName: event.target.value});
    }

    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }

    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }

    changeImgHandler= (event) => {
        this.setState({img: event.target.value});
    }

    changeHandicapedHandler= (event) => {
        this.setState({handicaped: event.target.value});
    }

    changeAgencyNameeHandler= (event) => {
        this.setState({agencyNamee: event.target.value});
    }

    changeDescChildHandler= (event) => {
        this.setState({descChild: event.target.value});
    }


    cancel(){
        this.props.history.push('/childes');
    }

    render() {
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
                      <input type="text" placeholder="Child Name" name="childName" class="form-control"
                       value={this.state.childName} onChange={this.changeChildNameHandler} />
                    </div>
                  </div>
                  <br />
                  <div className="form-group row">
                    <label className="col-3 col-form-label">Gender:-</label>
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
                      <input type="text" placeholder="Age" name="age" class="form-control"
                      value={this.state.age} onChange={this.changeAgeHandler} />
                    </div>
                  </div>
                  <br />
                  <div className="form-group row">
                    <label className="col-3 col-form-label">Upload Image:-</label>
                    <div className="col-5">
                      <input type="file" id="myFile" name="img"
                       value={this.state.img} onChange={this.changeImgHandler} />
                    </div>
                  </div>
                  <br />
                  <div className="form-group row">
                    <label className="col-3 col-form-label">
                      Physically handicapped:-
                    </label>
                    <div className="col-5" onChange={this.changeHandicapedHandler}>
                      <br />
                      <input type="radio" name="yes" value="Yes" />
                      Yes&emsp;&emsp;
                      <input type="radio" name="yes" value="No" />
                      No
                    </div>
                  </div>
                  <br />
                  <div className="form-group row">
                <label className="col-3 col-form-label"> Belong to the agency:-:-</label>
                <div className="col-5">
                  <select className="col-10" placeholder="agency" name="agencyNamee"
                 value={this.state.agencyNamee} onChange={this.changeAgencyNameeHandler}>
                    <option selected className="form-control" >
                      Please Select
                    </option>
                    <option>100-Women & Child Development Agency</option>
                        <option>101-Shishu Greh</option>
                        <option>103-Vaishu</option>
                        <option>104-ShishuKendra</option>
                  </select>
                </div>
              </div>
              <br />
                  <div className="form-group row">
                    <label className="col-3 col-form-label">
                      Discription about the child:-
                    </label>
                    <div className="col-5">
                      <input type="text" placeholder="DescChild" name="descChild" class="form-control"
                      value={this.state.descChild} onChange={this.changeDescChildHandler} />
                    </div>
                  </div>
                  <br />
                  <br />
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
   
export default UpdateChild
