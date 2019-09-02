const express = require('express')
const app = express()

require('dotenv').config()

const { API_NODE_PORT: port, API_NODE_HOST: host } = process.env

app
    .get('/', (req, res) => res.json({status: 200, message: 'Opsss!'}))
    .listen(port, host, () => console.log(`Startet in http://${host}:${port}`))