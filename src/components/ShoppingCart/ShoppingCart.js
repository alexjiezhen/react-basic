import React, { Component } from 'react'

export default class ShoppingCart extends Component {
    state = {
        productList: [],
        totalPrice: 0,
        itemCount: 0
    };

    // Binding  function to class context
    constructor() {
        super();
        // Binding 'this' to addToCart
        // #1 method
        this.addToCart = this.addToCart.bind(this);
    }

    incrementCount() {
        this.setState({
            itemCount: this.state.itemCount + 1,
        });
    }

    // typical function
    addToCart() {
        console.log('adding to cart');
        // 'this' in this context is referring to addToCart()
        this.incrementCount();
    }

    // with arrow function
    // #2 method
    addToCartWithClassFieldSyntax = () => {
        console.log(this);
        this.incrementCount();
    }

    render () {
        // 'this' in this context is referring to ShoppingCart
        // #3 method using Inner Function
        return (
            <div>
                <p>Shopping Cart Items {this.state.itemCount}</p>
                <button type='button' onClick={this.addToCart}>Add to Cart</button>
                <br/>
                <button type='button' onClick={this.addToCartWithClassField}>Add to Cart with Class Syntax</button>
                <br/>
                <button type='button' onClick={()=>{this.addToCart()}}>Add to Cart with Inner Function</button>
            </div>
        )
    }
}