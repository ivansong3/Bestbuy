import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import YouTube from 'react-youtube';

const stylingCenter = {
    center: {
      marginLeft: "auto",
      marginRight: "auto"
    }
  }

const opts = {
    height: '169',
    width: '300',
    playerVars: {
      autoplay: 0
    }
};

const testState = ["7DMDA5pde-0", "YPln3JP_gKs", "bK3GMtGeT_U"]

class ProductCard extends Component {
    render() {
        return (
            <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                <Card style={{ width: '30 rem', flex: 1 }}>
                    <Card.Body>
                        <Video videoId={testState[0]}/>
                    </Card.Body>
                </Card>
                <Card style={{ width: '30 rem' }}>
                    <Card.Body>
                        <Video videoId={testState[1]}/>
                    </Card.Body>
                </Card>
                <Card style={{ width: '30 rem' }}>
                    <Card.Body>
                        <Video videoId={testState[2]}/>
                    </Card.Body>
                </Card>
            </CardDeck>
        )
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

const Video = (props) => {
    return <div>
        <YouTube className="video" videoId={props.videoId} opts={opts} onReady={event => {event.target.pauseVideo();}}/>
    </div>
}

export default ProductCard;