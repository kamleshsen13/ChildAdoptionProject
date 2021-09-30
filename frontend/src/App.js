import "./App.css";
import React, { Component } from "react";
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import UserSignUp from "./Components/UserSignUp";

import AboutUs from "./Components/AboutUs";
import DocumentsRequired from "./Components/DocumentsRequired";
import EligibilityCrieteria from "./Components/EligibilityCrieteria";
import FAQ from "./Components/FAQ";
import AdoptionProcedure from "./Components/AdoptionProcedure";
import Admin from "./Components/Admin";
import AddAgency1 from "./Components/AddAgency1";
import ListAgencyComponent from "./Components/ListAgencyComponent";

import ViewAgency from "./Components/ViewAgency";
import UpdateAgency from "./Components/UpdateAgency";
import RemoveAgency from "./Components/RemoveAgency";

import AddChild1 from "./Components/AddChild1";
import ListChild from "./Components/ListChild";
import ViewChild from "./Components/ViewChild";
import UpdateChild from "./Components/UpdateChild";
import UserPage from "./Components/UserPage";

import Notification from "./Components/Notification";

import AddRegister from "./Components/AddRegister";

import ViewRegister from "./Components/ViewRegister";
import registeredDetails from "./Components/RegisteredDetails";
import ChildData from "./Components/ChildData";

import MailCheck from "./Components/MailChck";
import MailReject from "./Components/MailReject";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Header}></Route>
          <Route exact path="/Header" component={Header}></Route>
          <Route
            exact
            path="/documentsrequired"
            component={DocumentsRequired}
          ></Route>
          <Route exact path="/aboutus" component={AboutUs}></Route>
          <Route exact path="/faq" component={FAQ}></Route>
          <Route exact path="/AdminLogin" component={AdminLogin}></Route>
          <Route exact path="/AdminLogin/Admin" component={Admin}></Route>
          <Route exact path="/UserLogin" component={UserLogin}></Route>

        
          {/* <Route exact path="/AcceptMail" component={AcceptMail}></Route> */}
          <Route exact path="/MailCheck" component={MailCheck}></Route>
          <Route exact path="/MailReject" component={MailReject}></Route>
          {/* <Route exact path="/RejectMail" component={RejectMail}></Route> */}

          <Route
            exact
            path="/EligibilityCrieteria"
            component={EligibilityCrieteria}
          ></Route>
          <Route
            exact
            path="/documentsRequired"
            component={DocumentsRequired}
          ></Route>
          <Route
            exact
            path="/AdoptionProcedure"
            component={AdoptionProcedure}
          ></Route>
          <Route path="/agencies" component={ListAgencyComponent}></Route>
          <Route path="/add-agency/:id" component={AddAgency1}></Route>
          {/* <Route
            path="/view-agency/:id"
            component={ViewAgencyComponent}
          ></Route> */}
          <Route path="/view" component={ViewAgency}></Route>
          <Route path="/update" component={UpdateAgency}></Route>
          <Route path="/remove" component={RemoveAgency}></Route>
          {/* <Route path="/UserLogin/UserSignUp" component={UserSignUp}></Route> */}

          <Route path="/childes" component={ListChild}></Route>
          <Route path="/add-child/:id" component={AddChild1}></Route>
          <Route path="/view-child/:id" component={ViewChild}></Route>

          <Route path="/add-user/:id" component={UserSignUp}></Route>
          <Route path="/add-user/_add" component={UserSignUp}></Route>

          <Route exact path="/UserPage" component={UserPage}></Route>
          <Route exact path="/UserPage/ViewChild" component={ViewChild}></Route>

          <Route exact path="/Notification" component={Notification}></Route>

          {/* <Route path="/registers" component={ListRegister}></Route> */}
          <Route path="/add-register/:id" component={AddRegister}></Route>
          <Route path="/add-register/_add" component={AddRegister}></Route>
          <Route path="/view-register/:id" component={ViewRegister}></Route>

          <Route
            path="/registeredDetails"
            component={registeredDetails}
          ></Route>

          <Route path="/UserPage/childData" component={ChildData}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
