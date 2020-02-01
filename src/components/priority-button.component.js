import React, { Component } from 'react';
import {Button} from 'react-bootstrap';



class PriorityButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
                    value: 0,
                    turnedOn: false}
    }

    onClick() {
        
    }

    componentDidMount() {
        let val = this.props.value;
        if (val)
            this.setState({value: val})
    }


    render() {
        return (
            <Button size='lg' onClick={this.state.turnedOn ? () => {this.props.turnButtonOff(this.state.value)} : () => {this.props.turnButtonOn(this.state.value)}}>{this.props.description}</Button>
        )
    }
}

export default PriorityButton;