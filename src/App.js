import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

import {Row, Col, CardDeck } from 'react-bootstrap';
import CardDeckCustom from './components/CardDeck.component';
import VideoRecommendationPanel from './components/video-recommendations.component';
import ProductCard from "./components/ProductCard.component";
 
export default class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {products: [9, 1, 2,
                             3, 4, 5,
                             6, 7, 8],
                  combination: 0 };
}
  render() {
    return (
        <container>
          <Row>
            <h1 className="title">
              Bestbuy Blue Assistant
            </h1>
          </Row>
          <Row style={{marginLeft: '250px'}}>
            <VideoRecommendationPanel/>
          </Row>
          <Row>
            <Col style={{marginLeft: '200px'}} xs={9}>
              <CardDeck>
                <ProductCard item={this.state.products[0]}/>
                <ProductCard item={this.state.products[1]}/>
                <ProductCard item={this.state.products[2]}/>
              </CardDeck>
            </Col>
            <Col style={{marginLeft: '200px'}} xs={9}>
            <CardDeck>
                <ProductCard item={this.state.products[3]}/>
                <ProductCard item={this.state.products[4]}/>
                <ProductCard item={this.state.products[5]}/>
              </CardDeck>
            </Col>
            <Col style={{marginLeft: '200px'}} xs={9}>
            <CardDeck>
                <ProductCard item={this.state.products[6]}/>
                <ProductCard item={this.state.products[7]}/>
                <ProductCard item={this.state.products[8]}/>
              </CardDeck>
            </Col>
          </Row>
        </container>
    );
  }
}

const onButtonClick = (val) => {
  let sum = this.state.combination + val;
  this.setState({combination: sum})
}
