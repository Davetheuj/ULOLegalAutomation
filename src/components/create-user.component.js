import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
let sha256 = require('js-sha256');

export default class CreateUser extends Component {

   

    constructor(props){
        super(props);

        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePasswordConfirm = this.onChangePasswordConfirm.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);

        this.userInput = React.createRef();

        

        this.state = {
            username: "",
            password: "",
            passwordConfirm: "",
            email: "",
            role: "basic",
            //users:[],
        }
    }
    

    

    componentDidMount(){ //this is called before anything displays on the page
        // this.setState({
        // });
    }

  

    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
        
    }

    onChangePasswordConfirm(e){
       
      

        this.setState({
            passwordConfirm: e.target.value
        });

        if(this.state.password !== this.state.passwordConfirm){
            this.setState({passwordConfirmColor: 'red'});
            console.log('changing statecolor to red');
        
        }
        else{
            this.setState({passwordConfirmColor: 'green'})
            console.log('changing statecolor to green');
        }
        
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
        
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
        
    }

    onSubmit(e){
        e.preventDefault();

       

        const user = {
            username: this.state.username,
            password: sha256(this.state.password),
            role: this.state.role,
            email_address: this.state.email
        }

        console.log(user);

        axios.post(`http://localhost:5000/Users/add`, user)
        .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            
            <div align="center" className = "body">
                <br/>
            <h3>Create New User</h3>
            <form  onSubmit = {this.onSubmit}>
                <div className = "form-group" >
                    <label> Username: </label>
                    <input type = "text"
                        name = "username"
                        autoComplete="false"
                        required
                        className = "form-control"
                        value = {this.state.username}
                        onChange={this.onChangeUsername}
                    />
                </div>

                <div className = "form-group">
                    <label  style={{color: this.emailColor}} > Email: </label>
                    <input type = "text"
                        required
                        className = "form-control"
                        value = {this.state.email}
                        onChange={this.onChangeEmail}
                    />
                </div>
                
                <div className = "form-group">
                    <label> Password: </label>
                    <input type = "password"
                        name = "new-password"
                        autoComplete='false'
                        required
                        className = "form-control"
                        value = {this.state.password}
                        onChange={this.onChangePassword}
                    />
                </div>

                <div className = "form-group">
                    <label style={{color: this.state.passwordConfirmColor}}> Confirm Password: </label>
                    <input type = "password"
                        name = "new-password-confirm"
                        autoComplete='false'
                        required
                        className = "form-control"
                        value = {this.state.passwordConfirm}
                        onChange={this.onChangePasswordConfirm}
                    />
                </div>

                <div className = "form-group">
                    <input type="submit" value="Create User" className="btn btn-primary"/>
                </div>
            </form>
            </div>
        )
    }
}