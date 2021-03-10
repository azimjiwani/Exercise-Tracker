const express = require('express');
const cors = require('cors');
// used to connect to mongodb database
const mongoose = require('mongoose');

// can have environment variables in .env file
require('dotenv').config();

// creating express server
const app = express();
const port = process.env.PORT || 5000;

//used to parse json since it will be sending and receiving JSON
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//importing the files into the server
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// starts listening to the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});