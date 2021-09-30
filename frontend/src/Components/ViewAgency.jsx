import React, { Component } from 'react'
import AgencyService from '../Services/AgencyService'
import Navbar from './Navbar'

class viewAgency extends Component {
    constructor(props) {
        super(props)

        this.state = {
                agencies: []
        }
       
    }


    componentDidMount(){
        AgencyService.getAgencies().then((res) => {
            this.setState({ agencies: res.data});
        });
    }

    render() {
        return (
            <div>
                
         <Navbar/>
                 <h2 className="text-center" style={{color:'black'}}>Agency Info</h2>
                 <br></br>
                 <div className = "row"  style={{color:'blue'}}>
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    {/* <th>Agency Id</th> */}
                                    <th>&emsp; Agency Name</th>
                                    <th> Agency State</th>
                                    <th> Agency District</th>
                                    <th> Agency Address</th>
                                    <th> Contact Info</th>
                                    <th> Total Childs</th>
                                    <th> Adoptable Childs</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.agencies.map(
                                        agency => 
                                        <tr key = {agency.id} style={{color:'black'}}>
                                            {/* <td> { agency.id} </td> */}
                                             <td> &emsp;{ agency.agencyName} </td>   
                                             <td> {agency.astate}</td>
                                             <td> {agency.district}</td>
                                             <td> { agency.address} </td>   
                                             <td> {agency.contactInfo}</td>
                                             <td> {agency.totalChilds}</td>
                                             <td> {agency.adoptableChilds}</td>
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

export default viewAgency
