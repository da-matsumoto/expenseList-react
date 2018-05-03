import React, { Component } from 'react'
import './style.css'

class Input extends Component {
    constructor (props) {
        super(props)
        this.state = {
            item: ''
        }
    }
    doChange (e) {
        const newItem = e.target.item
        this.setState({item: newItem})
    }
    doSubmit (e) {
        window.alert('値を送信:' + this.state.item)
        e.preventDefault()
    }

    render () {
        const doSubmit = (e) => this.doSubmit(e)
        const doChange = (e) => this.doChange(e)

        return (
        <div class="inputarea">
        <h3>入力</h3>
        <form onSubmit={doSubmit}>
        <h4>項目</h4>
        <input type="text" value={this.state.item} onChange={doChange} />
        <button type="submit" value="追加">追加</button>
        </form>
        </div>
        )
    }
}

export default Input