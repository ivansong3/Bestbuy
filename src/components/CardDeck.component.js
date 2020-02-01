import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { CardDeck, Row, Col, Button } from 'react-bootstrap';

const itemInfo = {
    "0": "default0; dedault; default",
    "1": "iPhone XR; latest iPhone $500; ../iPhoneXR.png",
    "2": "sample2; sample; sample",
    "3": "sample3; sample; sample",
    "4": "sample4; sample; sample",
    "5": "sample5; sample; sample",
    "6": "sample6; sample; sample",
    "7": "sample7; sample; sample",
    "8": "sample8; sample; sample",
    "9": "sample9; sample; sample"
}


class CardDeckCustom extends Component {

    render() {
        return (
            <CardDeck>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title classname="cardTitle"> {getProductName(itemInfo[this.props.items[0]])} </Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title classname="cardTitle"> {getProductName(itemInfo[this.props.items[1]])} </Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title classname="cardTitle"> {getProductName(itemInfo[this.props.items[2]])} </Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>
        )
    }
}

const getProductName = (string) => {
    if (string !== undefined) {
        return string.split(";")[0];
    }
}

const getImage = (string) => {
    if (string !== undefined) {
        return string.split(";")[3];
    }
}

export default CardDeckCustom;