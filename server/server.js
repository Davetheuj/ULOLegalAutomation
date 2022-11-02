const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const environment = require('./environment');
//routers
const usersRouter = require('./routes/users');
const legalProcessesRouter = require('./routes/legal_processes');

const app = express();
const port = environment.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(environment.ATLAS_URI, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established!");
})

app.use('/LegalProcesses', legalProcessesRouter);
app.use('/Users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})