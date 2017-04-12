import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
    state = {
        isOpen: false
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    };

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        const text = this.state.isOpen ? <p>{this.props.text}</p> : null;

        return (
            <div>
                <h1 onClick={this.handleClick}>{this.props.title}</h1>
                { text }
            </div>
        );
    }
}

export default Article;