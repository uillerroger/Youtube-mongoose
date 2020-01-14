const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

const postRoute = require('./routes/post.js')

app.use('/posts',postRoute);

app.get('/',(req, res) =>{
    res.send("você esta em casa")
});



mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },
    ()=>{console.log('conectado ao DB')
});

app.listen(3000);   