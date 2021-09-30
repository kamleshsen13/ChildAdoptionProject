import React, { Component } from 'react'
import AgencyService from '../Services/AgencyService'

class UpdateAgency extends Component {
    constructor(props) {
        super(props)

        this.state = {
                agencies: []
        }
       
        this.editAgency = this.editAgency.bind(this);
        
    }

    editAgency(id){
        this.props.history.push(`/add-agency/${id}`);
    }

    componentDidMount(){
        AgencyService.getAgencies().then((res) => {
            this.setState({ agencies: res.data});
        });
    }

    addAgency(){
        this.props.history.push('/add-agency/_add');
    }

    render() {
        return (
            <div>
                 <a href="/AdminLogin/Admin" className="offset-md-11">Back</a>
                 <h2 className="text-center">Update Agency</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> &emsp;Agency Name</th>
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
                                                 <button onClick={ () => this.editAgency(agency.id)} className="btn btn-info">Update </button>
                    
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

export default UpdateAgency
