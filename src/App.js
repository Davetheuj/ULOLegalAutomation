import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from "./components/navbar.component";
import LegalProcessView from "./components/legal-processes-list.component";
import EditLegalProcess from "./components/edit-legal-process.component.js";
import UserView from "./components/user-view.component";
import CreateUser from "./components/create-user.component.js"
import Home from "./components/home.component";
import SmallClaims from "./components/small-claims.component"

export default class App extends Component {

  constructor(props){

      super(props);
      this.state = {
       
      }
  }

  render(){
    return(
    <Router>
    <Navbar />
    <Routes>
    <Route path = "/" exact element={<Home/>} />
    <Route path = "/Signup" exact element={<CreateUser/>} />
    <Route path = "/Users/:username"  element={<UserView/>} />
    <Route path = "/edit/:id"  element={<EditLegalProcess/>} />
    <Route path = "/processes" exact element={<LegalProcessView/>} />
    <Route path = "/smallclaims" exact element={<SmallClaims/>} />
    </Routes>
    </Router>
    )
    
  }

}


