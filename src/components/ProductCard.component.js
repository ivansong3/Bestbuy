import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class ProductCard extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HN002_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1559870271538" />
                <Card.Body>
                <Card.Title classname="cardTitle"> {helper()} </Card.Title>
                </Card.Body>
            </Card>
        )
            
        
    }
}

function helper() {
    return "Some quick example text to build on the card title and make up the bulk of the card's content."
}

export default ProductCard;