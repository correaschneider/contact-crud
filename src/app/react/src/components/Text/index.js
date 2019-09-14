import React, { Component } from 'react'
import './styles.scss'

class Text extends Component {
    render() {
        let {className = '', name = '', value = '', onChange = '', placeholder = ''} = this.props
     
        return <input className={`componentInput ${className}`} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    }
}

export default Text