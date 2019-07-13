import React, { Component } from 'react'
import './cart-item.css'
export  class CartItem extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            value: props.item.amount
        }
    }
    onInputChange = (e, name)  => {
        this.setState({
            value: e.target.value
        })
        this.props.onChange(e.target.value, name)
    }
    render() {
        let {item} = this.props
        return (
            <>
            {
               
                  <div className="cart-amount-input">
                      <label htmlFor={item.name}>{item.name}</label> <br/>
                        <input 
                            value={this.state.value} 
                            type="text" 
                            onChange={(e) => this.onInputChange(e, this.props.item.name)} 
                        />
                  </div>
            
            }
            </>
        )
    }
}
