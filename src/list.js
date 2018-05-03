import React, { Component } from 'react'
import './style.css'

class List extends Component {
    render () {
        return <div class="listarea">
        <h3>一覧</h3>
        <div class="listarea_box">
            <h4 class="listarea_box_date">2018/05/01</h4>
            <table>
                <tr>
                    <th>朝食</th>
                    <td>250円</td>
                </tr>
                <tr>
                    <th>昼食</th>
                    <td>1,000円</td>
                </tr>
                <tr>
                    <th>夕食</th>
                    <td>1,000円</td>
                </tr>
            </table>
            <h4 class="listarea_box_date">2018/05/02</h4>
            <table>
                <tr>
                    <th>朝食</th>
                    <td>250円</td>
                </tr>
                <tr>
                    <th>昼食</th>
                    <td>1,000円</td>
                </tr>
            </table>
        </div>
    </div>
    }
}

export default List