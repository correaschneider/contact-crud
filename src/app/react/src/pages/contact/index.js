import React, { Component } from 'react'
import api from './../../services/api'

import './style.scss'

import Text from '../../components/Text'

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: {
                _id: '',
                nome: '',
                phones: [ {_id: '', number: '', label: ''} ],
                emails: [ {_id: '', email: '', label: ''} ],
                address: [ {_id: '', street: '', number: '', complement: '', district: '', city: '', state: '', country: ''} ]
            }
        }
    }

    async componentDidMount () {
        let { id } = this.props.match.params
        let response = await api.get(`/contact/${id}`)

        this.setState({ contact: response.data })
    }

    handleChange = event => {
        let {name, value} = event.target
        
        this.setState(prevState => {
            let [nodeName, _id, fieldName] = name.split('.')
    
            if (_id && fieldName) {
                prevState.contact[nodeName].map(node => {
                    if (node._id == _id)
                        node[fieldName] = value
                })

                return { contact: prevState.contact }
            }
            
            return { contact: { ...prevState.contact, [name]: value } }
        })
    }

    handleSubmit () {}

    addPhone = () => {
        this.setState(prevState => {
            prevState.contact.phones.push({_id: Math.floor(Date.now() / 1000), number: '', label: ''})

            return { contact: prevState.contact }
        })
    }

    addEmail = () => {
        this.setState(prevState => {
            prevState.contact.emails.push({_id: Math.floor(Date.now() / 1000), email: '', label: ''})

            return { contact: prevState.contact }
        })
    }

    addAddress = () => {
        this.setState(prevState => {
            prevState.contact.address.push({_id: Math.floor(Date.now() / 1000), street: '', number: '', complement: '', district: '', city: '', state: '', country: ''})

            return { contact: prevState.contact }
        })
    }

    render () {
        let { contact } = this.state
        let { handleChange } = this

        return (
            <form className="contactInfo" key={contact._id}>
                <Text name="name" value={contact.name} onChange={handleChange} placeholder="Nome" />

                <div className="contacts--list">
                    <legend>Telefone{contact.phones.length > 1 ? 's' : ''}</legend>
                    {contact.phones.map(phone => (
                        <div className="box" key={phone._id}>
                            <Text name={`phones.${phone._id}.label`} value={phone.label} onChange={handleChange} placeholder="Label" className="w25" />
                            <Text name={`phones.${phone._id}.number`} value={phone.number} onChange={handleChange} placeholder="Telefone" className="w75" />
                        </div>
                    ))}

                    <div className="actions">
                        <button type="button" onClick={this.addPhone}>Mais Telefone</button>
                    </div>
                </div>

                <div className="contacts--list">
                    <legend>Email{contact.emails.length > 1 ? 's' : ''}</legend>
                    {contact.emails.map(email => (
                        <div className="box" key={email._id}>
                            <Text name={`emails.${email._id}.label`} value={email.label} onChange={handleChange} placeholder="Label" className="w25" />
                            <Text name={`emails.${email._id}.email`} value={email.email} onChange={handleChange} placeholder="Email" className="w75" />
                        </div>
                    ))}

                    <div className="actions">
                        <button type="button" onClick={this.addEmail}>Mais Email</button>
                    </div>
                </div>

                <div className="contacts--list">
                    <legend>Endereço{contact.address.length > 1 ? 's' : ''}</legend>
                    {contact.address.map(address => (
                        <div className="box" key={address._id}>
                            <Text name={`address.${address._id}.street`} value={address.street} onChange={handleChange} placeholder="Logradouro" />
                            <Text name={`address.${address._id}.number`} value={address.number} onChange={handleChange} placeholder="Numero" />
                            <Text name={`address.${address._id}.complement`} value={address.complement} onChange={handleChange} placeholder="Complemento" />
                            <Text name={`address.${address._id}.district`} value={address.district} onChange={handleChange} placeholder="Bairro" />
                            <Text name={`address.${address._id}.city`} value={address.city} onChange={handleChange} placeholder="Cidade" />
                            <Text name={`address.${address._id}.state`} value={address.state} onChange={handleChange} placeholder="Estado" />
                            <Text name={`address.${address._id}.country`} value={address.country} onChange={handleChange} placeholder="País" />
                        </div>
                    ))}

                    <div className="actions">
                        <button type="button" onClick={this.addAddress}>Mais Endereço</button>
                    </div>
                </div>
            </form>
        )
    }
}