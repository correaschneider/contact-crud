const express = require('express')
const app = express()

require('dotenv').config()
require('./config')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

const routes = require('./modules')
app.use(routes)

const { API_NODE_PORT: port, API_NODE_HOST: host } = process.env
app
    .get('/', (req, res) => res.status(404).json({status: 404, message: 'Route not found!'}))
    .listen(port, host, () => console.log(`Started in http://${host}:${port}`))