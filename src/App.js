import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import axios from 'axios';
import {Container, Row, Col, CardDeck } from 'react-bootstrap';
import { urlBuilder, arraysEqual } from './helpers/utils';
import VideoRecommendationPanel from './components/video-recommendations.component';
import ProductCard from "./components/ProductCard.component";
import PriorityButton from "./components/priority-button.component";

export default class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {products: [9, 1, 2,
                             3, 4, 5,
                             6, 7, 8],
                  combination: 0,
                  youtubeQuery: ["7DMDA5pde-0", "YPln3JP_gKs", "bK3GMtGeT_U"] };
  }

  componentDidUpdate(prevProps, prevState) {
    let currCombination = this.state.combination;
    let newState = this.state.products;

    switch (currCombination) {
      case 1:
        // battery priority
        newState = [1, 8, 9, 2, 5, 6, 4, 3, 7];
        if (!arraysEqual(prevState.products, newState))
          this.setState({products: newState});
        break;
      case 2:
        // price priority
        newState = [4, 7, 3, 5, 8, 2, 1, 6, 9];
        if (!arraysEqual(prevState.products, newState))
          this.setState({products: newState});
        break;
      case 3:
        // price + battery priority
        newState = [6, 9, 1, 2, 8, 5, 3, 7, 4];
        if (!arraysEqual(prevState.products, newState))
          this.setState({products: newState});
        break;
      case 5:
        // screen resolution priority
        newState = [5, 6, 7, 8, 9, 1, 2, 3, 4];
        if (!arraysEqual(prevState.products, newState))
          this.setState({products: newState});
        break;
      case 6:
        // screen resolution + battery priority
        newState = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        if (!arraysEqual(prevState.products, newState))
          this.setState({products: newState});
        break;
      case 7:
        // screen resolution + price priority
        newState = [5, 4, 3, 2, 1, 9, 8, 7, 6];
        if (!arraysEqual(prevState.products, newState))
          this.setState({products: newState});
        break;
      default:
        break;
    }

    try {
      if (prevState.combination !== this.state.combination) {
        const newQuery = this.youtubeQuery();
        if (newQuery.length !== 0) {
          console.log(this.state.combination);
          this.setState({youtubeQuery: newQuery});
        }
      }
    } catch (err) {
      console.log("error updating youtube query, do nothing")
    }
  }

  render() {
    return (
        <Container>
          <Row>
            <h1 className="title">
              Bestbuy Blue Assistant
            </h1>
          </Row>
          <Row>
          <h3 className="title">
              Recommendation Videos
            </h3>
            <VideoRecommendationPanel videos={this.state.youtubeQuery}/>
          </Row>
          <Row>
            <Col xs={30}>
              <Row>
                <CardDeck>
                  <ProductCard item={this.state.products[0]}/>
                  <ProductCard item={this.state.products[1]}/>
                  <ProductCard item={this.state.products[2]}/>
                </CardDeck>
              </Row>
              <Row>
              <CardDeck>
                  <ProductCard item={this.state.products[3]}/>
                  <ProductCard item={this.state.products[4]}/>
                  <ProductCard item={this.state.products[5]}/>
                </CardDeck>
              </Row>
              <Row>
              <CardDeck>
                  <ProductCard item={this.state.products[6]}/>
                  <ProductCard item={this.state.products[7]}/>
                  <ProductCard item={this.state.products[8]}/>
                </CardDeck>
              </Row>
            </Col>
            <Col style={{position: 'sticky'}} xs={2}>
            <table style={{paddingLeft: "40px"}}>
              <tbody>
                <tr>
                  <td>
                    <PriorityButton description='Screen Res' value={5} turnButtonOn={this.turnButtonOn} turnButtonOff={this.turnButtonOff} style={{paddingLeft: "0px"}}></PriorityButton>
                  </td>
                </tr>

                <tr>
                  <td>
                    <PriorityButton description='Battery' value={1} turnButtonOn={this.turnButtonOn} turnButtonOff={this.turnButtonOff} style={{paddingLeft: "20px"}}></PriorityButton>
                  </td>
                </tr>

                <tr>
                  <td>
                    <PriorityButton description='Price' value={2} turnButtonOn={this.turnButtonOn} turnButtonOff={this.turnButtonOff} style={{paddingLeft: "20px"}}></PriorityButton>
                  </td>
                </tr>
              </tbody>
            </table>
            </Col>
          </Row>
        </Container>
      );
  }
  turnButtonOn = val => {
    let state = this.state.combination
    let sum = state + val;
    this.setState({combination: sum})
  }
  
  turnButtonOff = val => {
    let diff = this.state.combination - val;
    this.setState({combination: diff})
  }

  combinationId() {
    let currCombination = this.state.combination;
  
    switch (currCombination) {
      case 1:
        return "smartphones with the best battery"
      case 2:
        return "best budget smartphones"
      case 3:
        return "budget smartphones with best battery"
      case 5:
        return "smartphones with the best screen resolution"
      case 6:
        return "smartphones with the best battery and screen resolution"
      case 7:
        return "budget smartphones with the best screen resolution"
      default:
        return 'Best Smartphones'
    }
  }
  
  youtubeQuery() {
  console.log(this.state.combination);
  let query = this.combinationId();
  let url = urlBuilder(query);
  let headers = {
        'Accept': 'application/json'
  }
  axios.get(url, {headers})
        .then(res => {
            console.log(res);
            let urls = [];
            if (res) {
                res.items.array.forEach(e => {
                    if (e.id.videoId) {
                        urls.push(e.id.videoId);
                    }  
                });
                if (urls.length === 0) {
                    throw new Error(`error reading res ${res.items}`);
                }
                return urls;
            }
        })
        .catch(err => {
            console.log(err);
            throw new Error(err);
        })
  }
}

 