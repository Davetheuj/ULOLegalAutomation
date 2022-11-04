import React, { Component } from 'react';

import logo from './ulo-automation-high-resolution-logo-white-on-transparent-background.png';
export default class Footer extends Component {

    render(){
        return(
            <nav className = "centered-header navbar navbar-dark bg-dark navbar-expand-lg ">


<a className="navbar-brand" href="/">
<img src={logo}  alt="logo" height="50px" />
</a>
            </nav>
        );
    }
}