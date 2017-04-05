import React from 'react';
import articles from '../articles';
import Article from './Article';

function ArticleList() {
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

export default ArticleList;