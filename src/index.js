const express = require('express')
const app = express()

require('dotenv').config()

const { API_NODE_PORT: port, API_NODE_HOST: host } = process.env

// const router = express.Router()

// router
//     .route('/contact')
//         .get((req, res) => res.json([{teste: 'teste'}]))

const routes = require('./modules')

app.use(routes)

app
    .get('/', (req, res) => res.status(404).json({status: 404, message: 'Route not found!'}))
    .listen(port, host, () => console.log(`Started in http://${host}:${port}`))