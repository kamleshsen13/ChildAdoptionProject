import React, { Component } from 'react'
import RegisterService from '../Services/RegisterService'

class ViewRegister extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            register: {}
        }
    }

    componentDidMount(){
        RegisterService.getRegisterById(this.state.id).then( res => {
            this.setState({register: res.data});
        })
    }

    render() {
        return (
            <div>
                <a href="/registeredDetails" className="offset-md-11">Back</a>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Registration Details</h3>
                    <div className = "card-body">
                    
                        <div className = "row">
                            <label><b>gender:</b>&emsp; { this.state.register.gender } </label>
                          
                        </div>
                        <div className = "row">
                            <label><b>mparentName:</b> &emsp; { this.state.register.mparentName }</label>
                           
                        </div>
                        <div className = "row">
                            <label><b>fparentName:</b>&emsp; { this.state.register.fparentName } </label>
                           
                        </div>
                        <div className = "row">
                            <label><b>mAge:</b>&emsp; { this.state.register.mAge } </label>
                         
                        </div>

                        <div className = "row">
                            <label><b>fAge:</b>&emsp; { this.state.register.fAge } </label>
                           
                        </div>
                        
                        <div className = "row">
                            <label><b>fOccupation:</b>&emsp;  { this.state.register.fOccupation } </label>
                     
                        </div>
                        <div className = "row">
                            <label><b>mIncome:</b>&emsp; { this.state.register.mIncome } </label>
                        
                        </div>
                        <div className = "row">
                            <label><b>fIncome:</b>&emsp; { this.state.register.fIncome } </label>
                         
                        </div>
                       
                        <div className = "row">
                            <label><b>childrens:</b> &emsp;  { this.state.register.childrens }</label>
                           
                        </div>
                        <div className = "row">
                            <label><b>address: </b>&emsp;   { this.state.register.address }</label>
                       
                        </div>
                        <div className = "row">
                            <label><b>city:</b>&emsp;  { this.state.register.city } </label>
                          
                        </div>
                        <div className = "row">
                            <label><b>state:</b>&emsp;{ this.state.register.astate } </label>
                            
                        </div>
                        <div className = "row">
                            <label><b>district: </b>&emsp; { this.state.register.district }</label>
                           
                        </div>
                        <div className = "row">
                            <label><b>pincode:</b>&emsp;{ this.state.register.pincode } </label>
                            
                        </div>
         
                        <div className = "row">
                            <label><b>document:</b> &emsp; { this.state.register.document }</label>
                          
                        </div>
                        <div className = "row">
                            <label><b>hsr:</b>&emsp; { this.state.register.hsr } </label>
                           
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewRegister
