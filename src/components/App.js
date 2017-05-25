import React, { Component } from 'react';
import ArticleList from './ArticleList';
import Form from './Form';
import Main from './Main';
import Filter from './Filter';
import Counter from './Counter';
import { initArticles, removeArticle, addArticle } from '../AC/articles';
import { changeFilterDate } from '../AC/filter';
import { connect } from 'react-redux';
import moment from 'moment';

class App extends Component {
    componentDidMount() {
        const { initArticles } = this.props;
        initArticles();
    }

    removeArticle = (id) => {
        const { removeArticle } = this.props;
        removeArticle(id);
    };

    addArticle = (article) => {
        this.props.addArticle(article);
    };

    render() {
        const { articles, filterDate, changeFilterDate, validation } = this.props;

        return(
          <Main>
              <Counter/>
              <br />
              <Form validation={validation} addArticle={this.addArticle} />
              <Filter date={filterDate} changeDate={changeFilterDate} />
              <ArticleList removeArticle={this.removeArticle}
                           articles={articles} />
          </Main>
        );
    }
}

export default connect((state) => {
    const { articles, filter, validation } = state;
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
        filterDate,
        validation
    };
}, {
    initArticles,
    removeArticle,
    changeFilterDate,
    addArticle
})(App);