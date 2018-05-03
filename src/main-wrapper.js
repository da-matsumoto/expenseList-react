import React, { Component } from 'react'
import Input from './input'
import List from './list'
import './style.css'

class MainWrapper extends Component {
    render () {
        return <div className="main_wrapper">
        <Input />
        <List />
        </div>
    }
}

export default MainWrapper