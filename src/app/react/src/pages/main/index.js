import React, { Component } from 'react'

import api from '../../services/api'

export default class Main extends Component {
    componentDidMount () {
        this.loadContacts()
    }

    loadContacts = async () => {
        console.log(await api.get('/contact'))
    }

    render () {
        return <h1>Testae</h1>
    }
}