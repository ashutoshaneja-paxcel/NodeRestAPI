const express = require('express');

const app = express();

const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

//Importing Routes
const postsRoute = require('./routes/posts');

//Middleware
app.use('/posts', postsRoute);

//Default Route
app.get('/',(req,res) => {
    res.send('Welcome to restAPI Application with MongoDB');
});

const uri = process.env.DB_CONNECTION;
mongoose.connect(uri, 
    { useNewUrlParser: true, useUnifiedTopology: true  }, ()=>
    console.log('Connected to Mongo!')
);

//Listen to Server on Port 3000 
app.listen(3000);