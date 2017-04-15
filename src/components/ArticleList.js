import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        removeArticle: PropTypes.func
    };

    render() {
        const { articles, removeArticle } = this.props;

        const articleList = articles.map((article) => {
            const { id, title, text } = article;

            return (
                <li key={article.id}>
                    <Article removeArticle={removeArticle}
                             id={id}
                             title={title}
                             text={text} />
                </li>
            );
        });

        return (
            <ul>
                { articleList }
            </ul>
        );
    }
}

export default ArticleList;