const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name: {type: String, required: true},
    phones: [{number: {type: String, required: true}, label: String}],
    emails: [{email: {type: String, required: true},  label: String}],
    address: [{
        street: {type: String, required: true},
        number: {type: Number, required: true},
        complement: String,
        district: String,
        city: {type: String, required: true},
        state: String,
        zip_code: Number,
        country: String
    }],
    status: {type: Boolean, default: true}
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at', }})

module.exports = mongoose.model('contact', contactSchema)