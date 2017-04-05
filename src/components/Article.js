import React, { PropTypes } from 'react';

function Article(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <p>{props.category}</p>
        </div>
    );
}

Article.defaultProps = {
    category: 'auto'
};

Article.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
};

export default Article;