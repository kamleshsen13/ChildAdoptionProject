
import React, { Component } from "react";
import UserService from '../Services/UserService';

class UserSignUp extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            // step 2
            id: this.props.match.params.id,
            userName: '',
            email: '',
            password: '',
            cpassword: '',
            sequrityQue: '',
            answer:'',
            error:false,
            emailError:false
      
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeCpasswordHandler = this.changeCpasswordHandler.bind(this);
        this.changeSequrityQueHandler = this.changeSequrityQueHandler.bind(this);
        this.changeAnswerHandler = this.changeAnswerHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            UserService.getUserById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({userName: user.userName,
                    email : user.email,
                    password : user.password,
                    cpassword : user.cpassword,
                    sequrityQue : user.sequrityQue,
                    answer : user.answer
                });
            });
        }        
    }
    saveOrUpdateUser = (e) => {
      
      debugger
        e.preventDefault();
        var userEnteredEmail = this.state.email
        if ((userEnteredEmail.includes("@")) && (userEnteredEmail.includes(".")) &&  (userEnteredEmail.indexOf("@") < userEnteredEmail.indexOf(".")) && (userEnteredEmail.charAt(userEnteredEmail.length - 1) !== '.')){
          
        if(this.state.password === this.state.cpassword) {
        let user = {userName: this.state.userName, email: this.state.email,
            password: this.state.password, cpassword: this.state.cpassword, sequrityQue: this.state.sequrityQue, answer: this.state.answer };
        console.log('user => ' + JSON.stringify(user));
        alert("Your signup Successfull. Now proceed to login")

        // step 5
        if(this.state.id === '_add'){
            UserService.createUser(user).then(res =>{
                this.props.history.push('/Header');
            });
        }else{
            UserService.updateUser(user, this.state.id).then( res => {
                this.props.history.push('/UserLogin');
            });
        }}
        else {
          this.setState({error : true})
        }
      }
      else {
        this.setState({emailError : true})
      }

    
  }

    changeUserNameHandler= (event) => {
        this.setState({userName: event.target.value});
    }

    changeEmailHandler= (event) => {
      this.setState({email: event.target.value,
      emailError:false})
    
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value,
        error:false});
    }

    changeCpasswordHandler= (event) => {
        this.setState({cpassword: event.target.value});
    }

    changeSequrityQueHandler= (event) => {
        this.setState({sequrityQue: event.target.value});
    }

    changeAnswerHandler= (event) => {
        this.setState({answer: event.target.value});
    }

    cancel(){
        this.props.history.push('/Header');
    }

    login(){
      this.props.history.push('/Header');
  }
    
  render() {
    return (
      
      <div
        className="container mt-4"
        style={{ backgroundColor: "gray", width: "700px", height: "750px" }}>
        <br />
        <center>
          <button className="btn btn-primary col-4" type="submit"  onClick={this.login.bind(this)}>
            Login
          </button>

          <button className="btn btn-warning col-4" type="submit">
            sign up
          </button>
          <b>
            {" "}
            <hr className="divider col-12" style={{ color: "darkblue" }}></hr>
          </b>
          <u>
            <h1 style={{ color: "darkgreen" }}>Sign in</h1>
          </u>
          <br />
          <div className="col-6">
            <form>
              <center>
                {" "}
                <div className="col-12">
                  <input  type="text"  name="userName"  className="form-control" placeholder="Enter UserName"
                   value={this.state.userName} onChange={this.changeUserNameHandler}
                  required minLength="2" maxLength="20"
                  />{" "}
                </div>
                
              </center>
              <br />

              <center>
                {" "}
                <div className="col-12">
                  <input
                    type="email"
                    name="email"
                    className="form-control" required
                    placeholder="Enter your email id"    
                  required
                    value={this.state.email} onChange={this.changeEmailHandler}                
                  />{" "}
                </div>
                {this.state.emailError &&
                <span style={{color:'red'}}>Enter valid Email Id</span>}
               
              </center>
              <br />

              <center>
                <div className="col-12">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={this.state.password} onChange={this.changePasswordHandler}
                  required
                  />
                </div>
               
                <br />

                <div className="col-12">
                  <input
                    type="password"
                    name="cpassword"
                    className="form-control"
                    placeholder="Re-enter your password"
                    value={this.state.cpassword} onChange={this.changeCpasswordHandler}
                    required
                  />
                </div>
                {this.state.error &&
                <span style={{color:'red'}}>Password does not match</span>}
              
                <br />

                <div className="">
                  <select style={{ width: "328px" }} name="sequrityQue"
                  value={this.state.sequrityQue} onChange={this.changeSequrityQueHandler}>
                    <option defaultValue class="form-control">
                      Select a Security Question
                    </option>
                    <option>What is your pet name?</option>
                    <option>What is your nick name?</option>
                    <option>What is your favourite color?</option>
                    <option>What is your Childhood School name?</option>
                  </select>
                </div>
                <br />
                <div className="col-12">
                  <input
                    type="text"
                    name="answer"
                    className="form-control"
                    placeholder="Type answer for security question"
                    value={this.state.answer} onChange={this.changeAnswerHandler}
                    required minLength="2" maxLength= "20"
                  />
                </div>
              </center>
              <br />
              <br />
              <center>
                <button className="btn btn-primary col-6" type="submit" 
                disabled={
                    this.state.userName.length === 0 ||
                    this.state.email.length===0  ||
                    this.state.password.length === 0 ||
                    this.state.cpassword.length === 0 ||
                    this.state.sequrityQue.length === 0 ||
                    this.state.answer.length === 0
                  }
                  onClick={this.saveOrUpdateUser} 
                >
                  SignUp
                </button>

                <button className="btn btn-success col-6" type="reset"  onClick={this.cancel.bind(this)}>
                  Cancel
                </button>
              </center>
            </form>
          </div>
        </center>
      </div>
    );
  }
}
export default UserSignUp;