import React, { Component } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'

import './style.css'

export default class Main extends Component {
    state = {
        contacts: [],
        pageInfo: {}
    }

    componentDidMount () {
        this.loadContacts()
    }

    loadContacts = async (page = 1) => {
        let response = await api.get(`/contact?page=${page}`)
        
        let { docs, ...pageInfo } = response.data

        this.setState({ contacts: docs, pageInfo })
    }

    prevPage = () => {
        let { pageInfo: {page, pages} } = this.state

        if (page === 1) return

        page--

        this.loadContacts(page)
    }

    nextPage = () => {
        let { pageInfo: {page, pages} } = this.state

        if (page === pages) return

        page++

        this.loadContacts(page)
    }

    render () {
        let { contacts, pageInfo: {page, pages} } = this.state

        return (
            <div className="contact-list">
                {contacts.map(contact => (
                    <article key={contact._id}>
                        <strong>{contact.name}</strong>

                        <Link to={`/contacts/${contact._id}`}>Acessar</Link>
                    </article>
                ))}

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        )
    }
}