import React, { Component } from 'react'
import './style.css'

class Header extends Component {
    render () {
        return <header id="header" className="clearfix">
        <img src="img/logo.png" alt="expenseList" />
        <h1>expenseList</h1>
        </header>
    }
}

export default Header