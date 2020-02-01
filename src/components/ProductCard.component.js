import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

const itemInfo = {
    "0": "default; dedault; default",
    "1": "iPhone XR; latest iPhone $500; ../iPhoneXR.png",
}


class ProductCard extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HN002_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1559870271538" />
                <Card.Body>
                <Card.Title classname="cardTitle"> {getTitle(itemInfo[this.props.item])} </Card.Title>
                </Card.Body>
            </Card>
        )
            
        
    }
}

const getTitle = (string) => {
   return string.split(";")[0];
}

export default ProductCard;