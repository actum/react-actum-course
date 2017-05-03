import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import moment from 'moment';

class ArticleList extends Component {
    state = {
        filters: []
    };

    static propTypes = {
        articles: PropTypes.array.isRequired,
        removeArticle: PropTypes.func
    };

    componentWillReceiveProps(nextProps) {
        const { date, articles } = nextProps;
        const { startDate, endDate } = date;

        if (!startDate || !endDate) {
            this.setState({
                filters: articles
            });
        } else {
            const filters = articles.filter((article) => {
                return moment(article.date).isBetween(startDate, endDate);
            });

            this.setState({
                filters
            });
        }
    }

    render() {
        const { removeArticle } = this.props;
        const { filters } = this.state;

        const articleList = filters.map((article) => {
            const { id, title, text, comments } = article;

            return (
                <li key={article.id}>
                    <Article removeArticle={removeArticle}
                             id={id}
                             title={title}
                             text={text}
                             comments={comments} />
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