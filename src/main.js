import React, { Component } from 'react'
import MainWrapper from './main-wrapper'
import './style.css'

class Main extends Component {
    render () {
        return <div id="main">
        <h2>今月の出費<br />80,000円</h2>
        <MainWrapper />
        </div>
    }
}

export default Main