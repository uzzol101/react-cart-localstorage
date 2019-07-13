import React, { Component } from 'react'
import { CartItem } from '../component/CartItem';
const carts = [
    {
        name: 'fabric',
        amount: 1
    },
    {
        name: 'cloth',
        amount: 3
    },
    {
        name: 'metal',
        amount: 1
    },
]

export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.carts = []
        this.state = {
            amount: 1,
            cart:  {}
        }
        this.handleChange = this.handleChange.bind(this)
    }
    saveToLocalStorage =() => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart))
    }
    componentDidMount () {
        // retrive from localstorage
        if  (localStorage.cart){
            let cart = JSON.parse(localStorage.getItem('cart'))
            this.carts = Object.keys(cart).map((name => cart[name]))
            this.setState({
                cart
            })
        } else {
            let cartObj = {}
            carts.forEach(item => {
                cartObj[item.name] = item
            })
            this.setState({
                cart: cartObj
            })
        }
        window.addEventListener('beforeunload',  this.saveToLocalStorage)
    }
    componentWillUnmount () {
        window.removeEventListener('beforeunload', this.saveToLocalStorage)
    }
    
    handleChange(value, name ){
        let cart = this.state.cart
        let  currentItem = cart[name]
        currentItem.amount = Number(value)
        cart[name] = currentItem
        this.setState({
            amount: value,
            cart
        })
    }
   
    render() {

        return (
           <>
           {
               this.carts.map(item => (
                   <CartItem 
                    key={item.name}
                    onChange={this.handleChange}
                    item={item}
                   />
               ))
           }
           </>
        )
    }
}
