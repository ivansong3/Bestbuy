import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from './ProductCard.component'
import ProductCard1 from './ProductCard.component';

class CardDeck extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <CardDeck> 
                <ProductCard1> </ProductCard1>
            </CardDeck>
        )
            
        
    }
}

function helper() {
    return "Some quick example text to build on the card title and make up the bulk of the card's content."
}

export default ProductCard;