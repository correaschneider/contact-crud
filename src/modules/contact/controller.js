const Contact = {
    contacts: [
        {
            nome: 'Fulano',
            email: 'fulano@localhost.com'
        },
        {
            nome: 'Fulano 2',
            email: 'fulano2@localhost.com'
        }
    ],
        
    find: (req, res, next) => {
        res.json(Contact.contacts)
    },

    get: (req, res, next) => {
        res.json(Contact.contacts[req.params.id])
    },

    post: (req, res, next) => {
        res.json(Contact.contacts[req.params.id])
    },

    put: (req, res, next) => {
        res.json(Contact.contacts[req.params.id])
    },

    delete: (req, res, next) => {
        res.json(Contact.contacts[req.params.id])
    }
}

module.exports = Contact