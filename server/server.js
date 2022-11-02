const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//routers
const usersRouter = require('./routes/users');
const legalProcessesRouter = require('./routes/legal_processes');

const app = express();
const port = process.env.PORT || 5000;

require("dotenv").config();


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established!");
})

app.use('/LegalProcesses', legalProcessesRouter);
app.use('/Users', usersRouter);

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "../build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../build", "index.html"));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})