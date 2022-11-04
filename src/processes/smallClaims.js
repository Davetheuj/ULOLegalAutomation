
export default class SmallClaimProcess {
    
    constructor(){
    this.subprocessIterator = 0;
    this.questionIterator = 0;
    this.processName = "Small Claim Plaintiff";
    this.plaintiffFirstName = {value: "", required: true};
    this.plaintiffLastName = {value: "", required: true};
    this.defendantFirstName = {value: "", required: true};
    this.defendantLastName= {value: "", required: true};
    this.subprocesses =
    [
        {
            document: "SC-100", 
            dependencies: "", 
            questions: [
                {
                 question: "What is your first name?", field: this.plaintiffFirstName, dependants: ""
                },
                {
                 question: "What is your last name?", field: this.plaintiffLastName, dependants: ""
                },
                {
                question: "What is the defendant's first name?", field: this.defendantFirstName, dependants: ""
                },
                {
                question: "What is the defendant's last name?", field: this.defendantLastName, dependants: ""
                },
        ]

        },

        {
            document: "SC-500", 
            dependencies: "", 
            questions: [
                {
                 question: "Moved on to the second subprocess?", field: this.plaintiffFirstName, dependants: ""
                },
                {
                 question: "What is your last name?", field: this.plaintiffLastName, dependants: ""
                },
                {
                question: "What is the defendant's first name?", field: this.defendantFirstName, dependants: ""
                },
                {
                question: "What is the defendant's last name?", field: this.defendantLastName, dependants: ""
                },
        ]

        },

   
    ]
    


    }

}





