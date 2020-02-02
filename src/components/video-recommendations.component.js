import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import YouTube from 'react-youtube';

const opts = {
    height: '169',
    width: '300',
    playerVars: {
      autoplay: 0
    }
};

export default class VideoRecommendationPanel extends Component {
    render() {
        return (
            <div>
                <body className="subtitle">Recommendation Videos</body>
                <CardDeck style={{marginLeft: "90px", display: 'flex', flexDirection: 'row'}}>
                    <Card style={{ width: '30 rem', flex: 1 }}>
                        <Card.Body>
                            <Video videoId={this.props.videos[0]}/>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '30 rem' }}>
                        <Card.Body>
                            <Video videoId={this.props.videos[1]}/>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '30 rem' }}>
                        <Card.Body>
                            <Video videoId={this.props.videos[2]}/>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
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