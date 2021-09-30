import React, { Component } from 'react'
import AgencyService from '../Services/AgencyService'

class RemoveAgency extends Component {
    constructor(props) {
        super(props)

        this.state = {
                agencies: []
        }
        
        this.deleteAgency = this.deleteAgency.bind(this);
    }

    deleteAgency(id){
        AgencyService.deleteAgency(id).then( res => {
            this.setState({agencies: this.state.agencies.filter(agency => agency.id !== id)});
        });
    }
  
    componentDidMount(){
        AgencyService.getAgencies().then((res) => {
            this.setState({ agencies: res.data});
        });
    }

    render() {
        return (
            <div>
                <a href="/AdminLogin/Admin" className="offset-md-11">Back</a>
                 <h2 className="text-center">Remove Agency</h2>
               
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>&emsp; Agency Name</th>
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
                                {
                                    this.state.agencies.map(
                                        agency => 
                                        <tr key = {agency.id}>
                                             <td> &emsp;{ agency.agencyName} </td>   
                                             <td> {agency.astate}</td>
                                             <td> {agency.district}</td>
                                             <td> {agency.address} </td>   
                                             <td> {agency.contactInfo}</td>
                                             <td> {agency.totalChilds}</td>
                                             <td> {agency.adoptableChilds}</td>
                                             <td>
                                                
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteAgency(agency.id)} className="btn btn-danger">Delete </button>
                                                
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default RemoveAgency
