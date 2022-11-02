import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './ulo-automation-high-resolution-logo-white-on-transparent-background.png';
export default class Navbar extends Component {

    render(){
        return(
            <nav className = "navbar navbar-dark bg-dark navbar-expand-lg header">


<a className="navbar-brand" href="/">
<img src={logo}  alt="logo" height="50px" />
</a>


          
                {/* <Link to ="/" className="navbar-brand">Home</Link> */}

                <div className="collapse navbar-collapse">
                    <ul className = "navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to = "/signup" className ="nav-link">Sign-Up</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to = "/processes" className ="nav-link">Processes</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        );
    }
}