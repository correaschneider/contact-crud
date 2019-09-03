const mongoose = require('mongoose')
const {DB_USER: user, DB_PASS: pass, DB_HOST: host, DB_PORT: port, DB_NAME: name} = process.env

mongoose.connect(`mongodb://${user}:${pass}@${host}:${port}/${name}`, {useNewUrlParser: true});