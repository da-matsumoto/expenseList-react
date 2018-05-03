import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Footer from './footer'
import Main from './main'
import './style.css'

const dom = <div><Header /><Main /><Footer /></div>

ReactDOM.render(
    dom,document.getElementById('root')
)