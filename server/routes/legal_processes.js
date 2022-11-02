const router = require('express').Router();
let LegalProcess = require('../models/legal_process.model');


//get all legal processes
router.route('/').get((req,res) => {
    LegalProcess.find()
    .then(process => res.json(process))
    .catch(err => res.status(400).json('Error: ' + err));
    //res.json('Welcome to ulo automation!');
});

//add legal process
router.route('/add').post((req,res) => {
    const name = req.body.name;
    const start_document = req.body.start_document;

    const newProcess = new LegalProcess({name, start_document});

    newProcess.save()
    .then(() => res.json('Process has been added'))
    .catch(err => res.status(400).json('Error: ' + err));
    
});

//delete legal process
router.route('/delete').delete((req,res) => {
    LegalProcess.findOneAndDelete({name: req.body.name})
    .then(() => res.json('Exercise Deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;