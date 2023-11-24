import React, { Component } from 'react';
import draw from './vis';
import   './style.css';

export default class LineChart extends Component {

    componentDidMount() {
        draw(this.props);
    }

    componentDidUpdate(preProps) {
        draw(this.props);
    }

    render() {
        return (
            <div className='vis-linechart'/>
        )
    }
}
