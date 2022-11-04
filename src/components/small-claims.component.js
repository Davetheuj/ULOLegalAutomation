import React, {Component} from 'react';
import '../App.css';
import SmallClaimProcess from '../processes/smallClaims';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default class SmallClaims extends Component {
   

    constructor(props){
        super(props);
        
        this.onChangeResponse = this.onChangeResponse.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onBackClicked = this.onBackClicked.bind(this);
        
        this.legalProcess = new SmallClaimProcess();

        console.log("creating" + this.legalProcess.processName + "process");
        
        this.state = {
            processComplete: false,
            question: this.legalProcess.subprocesses[this.legalProcess.subprocessIterator].questions[this.legalProcess.questionIterator].question,
            response: "",
            info: "",
        }
  
    }

    render() {
        if(this.state.processComplete){
            return(<div className = 'body' >
            <br/>
            <br/>
            <form  >
                <div className = "form-group" >
                    <br/>
                    <label> Process Completed! Please review the information below to make sure it is correct. </label>
                    <br/>
                        <br/>
                        <br/>
                        <br/>
                    <div className = "form-group">
                        <input type="submit" value="Generate PDFs" className="btn btn-primary"/>
                        <br/>
                        <br/>
                       
                        <ProgressBar striped animated variant="success" now={100} label="100%" />
                    </div>
                </div>
            </form>
            <br/>


        </div>)
        }
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
                            required
                            className = "form-control"
                            value = {this.state.response}
                            onChange={this.onChangeResponse}
                        />
                        <br/>
                    </div>
                    <div className = "form-group">
                    <div className="btn-group">
                        <input type= "reset" onClick = {this.onBackClicked} value="Back" className="btn btn-secondary hpad"/>
                        <br/>
                        <br/>
                        <input type="submit" value="Continue" className="btn btn-primary hpad "/>
                        </div>
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
        
        //set the field's value to the user's response (input)
        this.legalProcess.subprocesses[this.legalProcess.subprocessIterator].questions[this.legalProcess.questionIterator].field.value = this.state.response;
        //increment the question iterator
        this.legalProcess.questionIterator += 1;

        if(this.legalProcess.questionIterator > this.legalProcess.subprocesses[this.legalProcess.subprocessIterator].questions.length - 1){
            
            this.legalProcess.subprocessIterator += 1;

            if(this.legalProcess.subprocessIterator > this.legalProcess.subprocesses.length - 1){
                this.setState({
                    processComplete : true
                })
            }
            else{
                this.legalProcess.questionIterator = 0;
                this.setState({
                    question: this.legalProcess.subprocesses[this.legalProcess.subprocessIterator].questions[this.legalProcess.questionIterator].question,
                    response: ""
                })
            }
  
        }

        try{this.setState({
            question: this.legalProcess.subprocesses[this.legalProcess.subprocessIterator].questions[this.legalProcess.questionIterator].question,
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

    onBackClicked(){
        console.log('back clicked!');
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
