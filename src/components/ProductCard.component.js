import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

const itemInfo = {
    "1": "iPhone X;$619.82$;iphoneX.jpeg",
    "2": "iPhone 8;$388.90$;iphone8plus.jpg",
    "3": "Samsung Galaxy S8;$298.98$;sss8.jpg",
    "4": "Google Pixel 3;$485.87$;googlepixel3.jpg",
    "5": "Blackberry KEY2 LE;$579.99$;blackberrykey2.jpg",
    "6": "Samsung Galaxy Note 10+;$899.99$;ssnote10plus.jpg",
    "7": "Motorola Moto G7+;$255.62$;motorolamotog7plus.jpeg",
    "8": "Huawei P30 Lite;$598.88$;huaweip30lite.jpg",
    "9": "Samsung A20s;$222.89$;ssa20s.jpg"
}

const imgStyling = {
    width: "50%",
    height: "10vw",
    objectFit: "cover",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
}

class ProductCard extends Component {

    render() {
        return (
            <Card className="card text-center" style={{ width: '22rem', height: '25rem' }}>
                <Card.Header>{getProductName(itemInfo[this.props.item])}</Card.Header>
                    <Card.Body>
                        <img src={require(`../assets/${getImage(itemInfo[this.props.item])}`)} style={{imgStyling}} alt=''/>
                        <Card.Text> {getProductDescription(itemInfo[this.props.item])}</Card.Text>
                    </Card.Body>
            </Card>
        )
    }
}

const getProductName = (string) => {
    if (string !== undefined) {
        return string.trim().split(";")[0];
    }
}

const getProductDescription = (string) => {
    if (string !== undefined) {
        return string.trim().split(";")[1];
    }
}

const getImage = (string) => {
    if (string !== undefined) {
        return string.trim().split(";")[2];
    }
}

export default ProductCard;