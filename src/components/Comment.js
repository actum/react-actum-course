import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
    static propTypes = {
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }

    render() {
        const { user, text } = this.props;
        return (
            <div>
                { text } <strong>by { user }</strong>
            </div>
        )
    }
}

export default Comment;