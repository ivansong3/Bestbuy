import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

import {Container, Row, Col} from 'react-bootstrap';
import CardDeck from './components/ProductCard.component';
 
class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {products: []};
}

  render() {
    return (
      <Router>
        <container>
          <Row>
            <h1 className="title">
              Bestbuy Blue Assitant
            </h1>
          </Row>
      
          <Row></Row>

          <Row>
            <Col xs={9}>
              <CardDeck>
                 <Card item={this.state.products[0]}/>
                 <Card item >
                </CardDeck>
            </Col>
            <Col></Col>
          </Row>

        </container>
      </Router>
    );
  }
}

export default App;