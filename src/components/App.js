import React, { Component } from 'react';
import ArticleList from './ArticleList';
import ValidatedForm from './ValidatedForm';
import Main from './Main';
import Filter from './Filter';
import Counter from './Counter';
import defaultArticles from '../articles';
import { initArticles, removeArticle } from '../AC/articles';
import { changeFilterDate } from '../AC/filter';
import { connect } from 'react-redux';
import moment from 'moment';

class App extends Component {
    componentDidMount() {
        const { initArticles } = this.props;
        initArticles(defaultArticles);
    }

    removeArticle = (id) => {
        const { removeArticle } = this.props;
        removeArticle(id);
    };

    addArticle = (article) => {
        // copy articles
        const articles = [...this.state.articles];

        // add new article to articles array
        articles.push(article);

        // change state by articles array
        this.setState({
            articles
        });
    };

    render() {
        const { articles, filterDate, changeFilterDate } = this.props;

        return(
          <Main>
              <Counter/>
              <br />
              <ValidatedForm addArticle={this.addArticle} />
              <Filter date={filterDate} changeDate={changeFilterDate} />
              <ArticleList removeArticle={this.removeArticle}
                           articles={articles} />
          </Main>
        );
    }
}

export default connect((state) => {
    const { articles, filter } = state;
    const { filterDate } = filter;
    const { startDate, endDate } = filterDate;

    let filteredArticles = articles;

    if (startDate && endDate) {
        filteredArticles = articles.filter((article) => {
           return  moment(article.date).isBetween(startDate, endDate);
        });
    }

    return {
        articles: filteredArticles,
        filterDate
    };
}, {
    initArticles,
    removeArticle,
    changeFilterDate
})(App);