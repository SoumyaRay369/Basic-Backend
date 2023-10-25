const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();

const app = express();
const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, ()=> {
    console.log('Listening on port 3000')
})