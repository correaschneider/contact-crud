const ContactModel = require('./model')

const Contact = {
    find: async (req, res, next) => {
        let filter = req.query.name ? {name: new RegExp(req.query.name, 'ig') } : {}
        let page = parseInt(req.query.page || 1)
        let limit = parseInt(req.query.limit || 10)
        
        let data = await ContactModel.find(filter, null, {skip: (limit * page) - limit, limit}, (err, data) => {
            if (err) console.log(err)

            return data
        })

        let total = await ContactModel.count(filter)
        let pages = Math.ceil(total / limit)
        let count = data.length

        return res.send({ total, page, limit, pages, count, data })
    },

    get: async (req, res, next) => {
        let contact = await ContactModel.findOne({_id: req.params.id}, (err, contact) => {
            if (err) console.log(err)

            return contact
        })

        return res.json(contact)
    },

    post: async (req, res, next) => {
        let contact = new ContactModel(req.body)

        contact = await contact.save()
        return res.json(contact)
    },

    put: async (req, res, next) => {
        let contact = await ContactModel.findOne({_id: req.params.id}, async (err, contact) => {
            if (err) console.log(err)

            return contact
        })

        contact = await Object.assign(contact, req.body)

        contact = await contact.save()
        return res.json(contact)
    },

    delete: async (req, res, next) => {
        let contact = await ContactModel.findOneAndDelete({_id: req.params.id}, (err, contact) => {
            if (err) console.log(err)

            return contact
        })

        return res.json(contact)
    }
}

module.exports = Contact