const express = require('express');
const app = express();
const mongose = require('mongoose');
const fetch = require('node-fetch');


//now...

app.get('/', async (req, res) => {

    res.send('Hello, world!');
})



app.listen(1000, () => {
    console.log('Server 1000 running!');
})