import React, { Component } from 'react'
import api from './../../services/api'

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: {}
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async componentDidMount () {
        let { id } = this.props.match.params
        let response = await api.get(`/contact/${id}`)

        this.setState({ contact: response.data })
    }

    handleChange (event) {
        let {name, value} = event.target

        this.setState(prevState => ({ contact: {...prevState.contact, [name]: value}}))
    }

    handleSubmit () {}

    render () {
        let { contact } = this.state
        let { handleChange } = this

        return (
            <form className="contactInfo" key={contact._id}>
                <input name="name" value={contact.name} onChange={handleChange} placeholder="Nome" />
            </form>
        )
    }
}