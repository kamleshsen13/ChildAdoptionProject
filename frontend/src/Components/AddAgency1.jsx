import React, { Component } from 'react'
import AgencyService from '../Services/AgencyService';

class AddAgency1 extends Component {
  constructor(props) {
      super(props)

      this.state = {
          // step 2
          id: this.props.match.params.id,
          agencyName: '',
          astate: '',
          district: '',
          address: '',
          contactInfo: '',
          totalChilds: '',
          adoptableChilds: ''
      }
      this.changeAgencyNameHandler = this.changeAgencyNameHandler.bind(this);
      this.changeAstateHandler = this.changeAstateHandler.bind(this);
      this.changeDistrictHandler = this.changeDistrictHandler.bind(this);
      this.changeAddressHandler = this.changeAddressHandler.bind(this);
      this.changeContactInfoHandler = this.changeContactInfoHandler.bind(this);
      this.changeTotalChildsHandler = this.changeTotalChildsHandler.bind(this);
      this.changeAdoptableChildsHandler = this.changeAdoptableChildsHandler.bind(this);
      this.saveOrUpdateAgency = this.saveOrUpdateAgency.bind(this);
  }

  // step 3
  componentDidMount(){

      // step 4
      if(this.state.id === '_add'){
          return
      }else{
          AgencyService.getAgencyById(this.state.id).then( (res) =>{
              let agency = res.data;
              this.setState({agencyName: agency.agencyName,
                  astate: agency.astate,
                  district : agency.district,
                  address : agency.address,
                  contactInfo : agency.contactInfo,
                  totalChilds : agency.totalChilds,
                  adoptableChilds : agency.adoptableChilds
              });
          });
      }        
  }
  saveOrUpdateAgency = (e) => {
      e.preventDefault();
      let agency = {agencyName: this.state.agencyName, astate: this.state.astate, district: this.state.district, address: this.state.address,
          contactInfo: this.state.contactInfo, totalChilds: this.state.totalChilds, adoptableChilds: this.state.adoptableChilds};
      console.log('agency => ' + JSON.stringify(agency));

      // step 5
      if(this.state.id === '_add'){
          AgencyService.createAgency(agency).then(res =>{
              this.props.history.push('/AdminLogin/Admin');
          });
      }else{
          AgencyService.updateAgency(agency, this.state.id).then( res => {
              this.props.history.push('/agencies');
          });
      }
  }
  
  changeAgencyNameHandler= (event) => {
      this.setState({agencyName: event.target.value});
  }

  changeAstateHandler= (event) => {
      this.setState({astate: event.target.value});
  }

  changeDistrictHandler= (event) => {
      this.setState({district: event.target.value});
  }

  changeAddressHandler= (event) => {
      this.setState({address: event.target.value});
  }

  changeContactInfoHandler= (event) => {
      this.setState({contactInfo: event.target.value});
  }

  changeTotalChildsHandler= (event) => {
      this.setState({totalChilds: event.target.value});
  }

  changeAdoptableChildsHandler= (event) => {
      this.setState({adoptableChilds: event.target.value});
  }

  cancel(){
      this.props.history.push('/AdminLogin/Admin');
  }

 
    render() {
        return (
 <div
        className="container card"
       
      ><br/>
        <div className="bg-color bg-light">
          <div className="container mt-5">
            <div style={{ color: "green" }}>
        
             <center> <b>Fill Info Of NEW AGENCY</b></center>
            </div>
            <hr className="divider col-12"></hr>
            <div className="col-10">
              <form>
        
                <div className="form-group row">
                  <label className="col-2 col-form-label">Agency Name:-</label>
                  <div className="col-6">
                    <input type="text" placeholder="Agency Name" name="agencyName" 
                    value={this.state.agencyName} onChange={this.changeAgencyNameHandler} class="form-control" />
                  </div>
                </div>
                <br />
                <div className="form-group row">
                  <label className="col-2 col-form-label">State:-</label>
                  <div className="col-5">
                    <select className="col-10" placeholder="State" name="astate"
                    value={this.state.astate} onChange={this.changeAstateHandler}>
                      <option selected  class="form-control">
                        Please Select
                      </option>
                      <option>Maharashtra</option>
                      <option>MadhyaPradesh</option>
                      <option>Rajasthan</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="form-group row">
                  <label className="col-2 col-form-label">District:-</label>
                  <div className="col-5">
                    <select className="col-10" name="district"
                      value={this.state.district} onChange={this.changeDistrictHandler}
                      >
                      <option selected class="form-control" >
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
                <br />
                <div className="form-group row">
                  <label className="col-2 col-form-label">Address:-</label>
                  <div className="col-6">
                    <input type="text" placeholder="Address" name="address"
                     value={this.state.address} onChange={this.changeAddressHandler} class="form-control" />
                  </div>
                </div>
                <br />
                <div className="form-group row">
                  <label className="col-2 col-form-label">
                    Contact Information:-
                  </label>
                  <div className="col-6">
                    <input type="text" placeholder="ContactInfo" name="contactInfo"
                    value={this.state.contactInfo} onChange={this.changeContactInfoHandler} 
                    class="form-control" />
                  
                  </div>
                </div><br/>
                <div className="form-group row">
                  <label className="col-2 col-form-label">
                    Total no. of Child:-
                  </label>
                  <div className="col-6">
                    <input type="text" placeholder="Total Childs" name="totalChilds"
                    value={this.state.totalChilds} onChange={this.changeTotalChildsHandler} class="form-control" />
                  </div>
                </div><br/>
                <div className="form-group row">
                  <label className="col-2 col-form-label">
                   No. of adoptable child:-
                  </label><br/>
                  <div className="col-6">
                    <input type="text" placeholder="Adoptable Childs" name="adoptableChilds"
                     value={this.state.adoptableChilds} onChange={this.changeAdoptableChildsHandler} class="form-control" />
                  </div>
                </div>
                <br />
                {/* <button className="btn btn-danger col-4" onClick={this.saveOrUpdateAgency} type="submit">
                  Save
                </button> */}
                <button className="btn btn-success" onClick={this.saveOrUpdateAgency}>Save</button>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
              </form>
            </div>

            </div>
          </div>
        </div>
        )
    }
}

export default AddAgency1
