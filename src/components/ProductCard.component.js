import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

const itemInfo = {
    "0": "default; default; default",
    "1": "iPhone XR; latest iPhone $500; ../iPhoneXR.png",
    "2": "Samsung Phone; Cool Samsung Phone; sample",
    "3": "Huawei Phone; Can't use Huawei Phone; sample",
    "4": "Google Pixel; Good Camera; sample",
    "5": "Blackberry; can't find white background; sample",
    "6": "OtherphoneA; sample; sample",
    "7": "OtherphoneB; sample; sample",
    "8": "OtherphoneC; sample; sample",
    "9": "OtherphoneD; sample; sample"
}

class ProductCard extends Component {

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Header>{getProductName(itemInfo[this.props.item])}</Card.Header>
                <Card.Body>
                <Card.Text classname="cardDescription"> {getProductDescription(itemInfo[this.props.item])}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

const getProductName = (string) => {
    if (string !== undefined) {
        return string.split(";")[0];
    }
}

const getProductDescription = (string) => {
    if (string !== undefined) {
        return string.split(";")[1];
    }
}

const getImage = (string) => {
    if (string !== undefined) {
        return string.split(";")[3];
    }
}

export default ProductCard;