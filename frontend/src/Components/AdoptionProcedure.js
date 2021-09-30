import React, { Component } from 'react'
import Navbar from './Navbar'

export default class AdoptionProcedure extends Component {
    render() {
        return (

<div id='adoptionpr'>
<Navbar/>
        <div className="container" style={{ width: "900px", height: "500px" }}>
            <br />
            <div className="bg-light">
              <div className="container mt-5">

              <div className="bg-secondary">
                <div style={{ color: "orange"}}>
                <h3>Adoption Procedure</h3>
                </div>
                </div>
                <div style={{ color:"blue"}}>
            <ul>
<li>Check your eligibility</li>
<li>If you are eligiable then signup to see the avability of children</li>
<li>See the agency belongs to the child you want, then register to adopt the child</li>
<li>You need to fill registration form successfully.
</li>

<li>You will get registration number for particular child to adopt after verification of your registration by our admin.</li>
<li>With this registration number you can contact the agency to declare your adoptation by submitting documents. </li>
<li>Home study report is important to take regular report from you after the adoption .So select HSR near to your residence.
</li>


</ul>

</div>
</div>




                </div>
            </div>
        </div>
        )
    }
}
