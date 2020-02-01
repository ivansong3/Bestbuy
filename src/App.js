import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RemindersList from './components/reminders-list.component';
import EditReminder from './components/edit-reminder.component';
import CreateReminder from './components/create-reminder.component';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

import {Container, Row, Col} from 'react-bootstrap';
import ProductCard from './components/ProductCard.component';
 
class App extends Component {
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
              <ProductCard> </ProductCard>
            </Col>
            <Col></Col>
          </Row>

        </container>
      </Router>
    );
  }
}

export default App;