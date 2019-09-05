const ContactModel = require('./model')

const Contact = {
    find: async (req, res, next) => {
        let contacts = await ContactModel.find((err, contacts) => {
            if (err) console.log(err)

            return contacts
        })

        res.json(contacts)
    },

    get: async (req, res, next) => {
        let contact = await ContactModel.findOne({_id: req.params.id}, (err, contact) => {
            if (err) console.log(err)

            return contact
        })

        res.json(contact)
    },

    post: async (req, res, next) => {
        let contact = new ContactModel(req.body)

        res.json(await contact.save())
    },

    put: async (req, res, next) => {
        let contact = await ContactModel.findOne({_id: req.params.id}, async (err, contact) => {
            if (err) console.log(err)

            return contact
        })

        contact = await Object.assign(contact, req.body)
            
        res.json(await contact.save())
    },

    delete: async (req, res, next) => {
        let contact = await ContactModel.findOneAndDelete({_id: req.params.id}, (err, contact) => {
            if (err) console.log(err)

            return contact
        })

        res.json(contact)
    }
}

module.exports = Contact