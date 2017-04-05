import React, { PropTypes, Component } from 'react';

class Article extends Component {
    state = {
        isOpen: false
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

Article.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Article;