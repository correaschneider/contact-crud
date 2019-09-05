const express = require('express')
const app = express()

const contact = require('./contact/route')

app.use(contact)

module.exports = app