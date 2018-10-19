const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');

require('dotenv').config();


massive(process.env.CONNECTION_STRING).then(database => {
    console.log('Database Conection is good')
    app.set('db', database);
}).catch(error => {
    console.log('error connection to database', error);
})



const app = express();
app.use(bodyParser.json())


const SERVER_PORT = 4000;
app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}`);
})



