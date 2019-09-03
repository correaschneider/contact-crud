const express = require('express')
const router = express.Router()
const app = express()

const Contact = require('./controller')

router.get('', Contact.find)
router.get('/:id', Contact.get)
router.post('', Contact.post)
router.put('/:id', Contact.put)
router.delete('/:id', Contact.delete)

app.use('/contact', router)

module.exports = app