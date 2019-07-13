import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home component</h1>
                <Link to="/cart">Cart</Link>
            </div>
        )
    }
}
