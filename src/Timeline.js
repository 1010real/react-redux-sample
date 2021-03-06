import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mapStateToProps } from './action.js';

class Timeline extends Component {
    render() {
        let tweets = [];

        for (let i in this.props.timeline) {
            tweets.push(<li key={i}>{this.props.timeline[i]}</li>);
        }

        return <ul>{tweets}</ul>;
    }
}

Timeline.PropTypes =  {
    timeline: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default connect(mapStateToProps)(Timeline);
