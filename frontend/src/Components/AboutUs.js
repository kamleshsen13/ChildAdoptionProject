import React, { Component } from 'react'
import Navbar from './Navbar'

class AboutUs extends Component {
    render() {
        return (
       <div id='aboutus'>
         <Navbar/>
        <div className="container" style={{ width: "900px", height: "500px" }}>
        <br />
        <div className="bg-light">
        <div className="container mt-8">
        <div style={{ color: "green" }}>
        <h3>About Adoption Spot</h3>
        </div>  
<h6>A place where adoption of child can be easier for the parents who wants to 
    adopt child and this will be done accordingly to laws of adoption in India.
    Each and every rule specified in law of adoption in India is Verified and this
     is very useful interface between child adoption agencies and parents who wants 
     to adopt child. </h6>
<div style={{color:"blueviolet"}}>
<h5>Contact US:</h5>
</div>
<div style={{color:"chocolate"}}>
<h6>Email:adoptionspot@google.com</h6>
</div>

</div>
            </div>
            </div>
        </div>
      
        );
    }
}
export default AboutUs;