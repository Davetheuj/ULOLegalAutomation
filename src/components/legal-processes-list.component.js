import React, {Component} from 'react';
import '../App.css';
import SmallClaimProcess from '../processes/smallClaims';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default class LegalProcessView extends Component {
   

    constructor(props){
        super(props);
        
        this.onChangeResponse = this.onChangeResponse.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.legalProcess = new SmallClaimProcess();
        this.subprocess = this.legalProcess.subprocesses[0];

        console.log("creating" + this.legalProcess.processName + "process");
        
        this.state = {
            question: this.subprocess.questions[this.legalProcess.subprocessIterator].question,
            response: "",
            info: "",
        }
  
    }

    render() {
        return (
            <div className = 'body' >
                <br/>
                <br/>
                <form  onSubmit = {this.onSubmit}>
                    <div className = "form-group" >
                        <br/>
                        <label> {this.state.question} </label>
                        <input type = "text"
                            name = "userName"
                            autoComplete="false"
                            required = "false"
                            className = "form-control"
                            value = {this.state.response}
                            onChange={this.onChangeResponse}
                        />
                        <br/>
                    </div>
                    <div className = "form-group">
                        <input type="submit" value="Continue" className="btn btn-primary"/>
                        <br/>
                        <br/>
                        <ProgressBar striped animated variant="success" now={90} label="-Percent Complete-" />
                    </div>
                </form>
                <br/>


            </div>
        )
    }

    onSubmit(e){
        e.preventDefault();
        
        this.subprocess.questions[this.legalProcess.subprocessIterator].field.value = this.state.response;
        this.legalProcess.subprocessIterator +=1;
        try{this.setState({
            question: this.legalProcess.subprocesses[0].questions[this.legalProcess.subprocessIterator].question,
            response: ""
        })}catch{
            this.setState({
                response: ""
            }) 
        }
        console.log(this.legalProcess.plaintiffFirstName.value);
        console.log(this.legalProcess.plaintiffLastName.value);
        console.log(this.legalProcess.defendantFirstName.value);
        console.log(this.legalProcess.defendantLastName.value);
        
    }

    onChangeResponse(e){
        this.setState({
            response: e.target.value
        });
    }
    // onChangeQuestion(e){
    //     this.setState({
    //         question: e.target.value
    //     });  
    // }
    
    calculateLength(){

    }

    renderField(){

    }
  
}

