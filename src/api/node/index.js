const express = require('express')
const app = express()

require('dotenv').config()
require('./config')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const routes = require('./modules')
app.use(routes)

const { API_NODE_PORT: port, API_NODE_HOST: host } = process.env
app
    .get('/', (req, res) => res.status(404).json({status: 404, message: 'Route not found!'}))
    .listen(port, host, () => console.log(`Started in http://${host}:${port}`))