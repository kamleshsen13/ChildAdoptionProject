import React, { Component } from "react";
import RegisterService from "../Services/RegisterService";
import emailjs from "emailjs-com";

class MailCheck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      //id: 210543121001,
      status: "",
      result: false,
      sentEmail:false,
      email: props.location.state.email,
      id: props.location.state.id,
      mparentName: props.location.state.mparentName,
      fparentName: props.location.state.fparentName,
    };
  
  }

  // step 3
  async componentDidMount() {

    RegisterService.getRegisterById(this.state.id).then((res) => {        
      let regDtl = res.data;
        this.setState({
          regId: regDtl.id,
        
        });
     console.log(this.state.regId);
    });

    
  }
   
     Result = () => {
      return (
          <p>Your Mail has been sucessfully sent. I will contact you soon</p>
      )
  }
  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_af7amwd",
        "template_xoo7swc",
        e.target,
        "user_27fga30L5gvzvZ7xNAuhU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    this.setState({
      result: true,
      sentEmail:true,
      email:'',
      fparentName:'',
      mparentName:''
    });
     // debugger;
     RegisterService.getRegisterById(this.state.id).then((res) => {
        
        let register = res.data;
    let registerDtl = {
        //regId: regDtl.id,
        status: "Accepted",
        childid: register.childid,
        parentsImg: register.parentsImg,
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

      };
      console.log("registerDtl => " + JSON.stringify(registerDtl));
      RegisterService.updateRegister(registerDtl, this.state.id).then((res) => {
       
        console.log("registerDtl => " + JSON.stringify(registerDtl));
      });
  })
}

  render() {
      let notify;
      if(this.state.sentEmail){
          notify = <span>Mail has been sucessfully sent.</span>
      }
    return (
      <div>       
        <div
          className="container border"
          style={{
            marginTop: "25px",
            width: "50%",
         
            backgroundColor: "salmon",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <form
            className="row"
            style={{ margin: "25px 85px 75px 100px" }}
            action=""
            onSubmit={this.sendEmail}
          >
            <div className="formWord">
              <h1 style={{ marginTop: "25px" }}>Contact Form</h1>
              <span>Full Name</span>
              <br />
              <input
                className="form-control"
                type="text"
                name="mparentName"
                name="fparentName"
                value={this.state.mparentName || this.state.fparentName}
                required
              />
              <br />
          
              <span>Enter Email</span>
              <br />
              <input
                className="form-control"
                type="text"
                name="email"
                 value={this.state.email}
                required
              />
              <br />
            </div>
            <div className="formWord">
              <span>Message</span>
              <br />
            
              <textarea
                name="message"
                className="form-control"
                rows="4"
              ></textarea>
              <br />
              <button
              
                className="form-control btn btn-primary"
              >
                {" "}
                SUBMIT
              </button>

              <div className="row">
                {/* {
                    result ? {this.Result}: null
            } */}
            {notify}
             <a href="/registeredDetails" style ={{color : 'purple'}} className="offset-md-8">
          Return to User List
        </a>
                
              </div>
            </div>
          </form>
        </div>
      </div>
      //</div>
    );
  }
}

export default MailCheck;
