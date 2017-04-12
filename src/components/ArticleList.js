import React, { Component } from 'react';
import Article from './Article';

class ArticleList extends Component {
    render() {
        const { articles } = this.props;

        const articleList = articles.map((article) => {
            return (
                <li key={article.id}>
                    <Article title={article.title} text={article.text} />
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