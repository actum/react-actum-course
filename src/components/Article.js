import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
    state = {
        isOpen: false
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        removeArticle: PropTypes.func
    };

    handleClick = () => {
        this.setState((prevState) => {
            return { isOpen: !prevState.isOpen };
        });
    };

    render() {
        const { isOpen } = this.state;
        const { title, id, text, removeArticle } = this.props;

        const articleText = isOpen ? <p>{text}</p> : null;
        const buttonRemoveArticle = removeArticle
            ? <button onClick={() => removeArticle(id)} type="button">Remove</button>
            : null;

        return (
            <div>
                <h1 onClick={this.handleClick}>{title}</h1>
                { buttonRemoveArticle }
                { articleText }
            </div>
        );
    }
}

export default Article;