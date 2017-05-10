import React, { Component } from 'react';
import ArticleList from './ArticleList';
import ValidatedForm from './ValidatedForm';
import axios from 'axios';
import Main from './Main';
import Filter from './Filter';
import Counter from './Counter';

class App extends Component {
    state = {
        articles: [],
        date : {
            startDate: '',
            endDate: ''
        }
    };

    componentDidMount() {
        axios.get('http://localhost:3000/articles')
            .then((response) => {
                this.setState({
                    articles: response.data
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    removeArticle = (id) => {
        const articles = this.state.articles.filter((article) => {
            return article.id !== id
        });

        this.setState({
            articles
        });
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

    changeDate = (field, value) => {
        this.setState((prevState) => {
            return {
                date: {
                    ...prevState.date,
                    [field]: value
                }
            }
        });

    };

    render() {
        const { date } = this.state;

        return(
          <Main>
              <Counter/>
              <br />
              <ValidatedForm addArticle={this.addArticle} />
              <Filter date={date} changeDate={this.changeDate} />
              <ArticleList date={date} removeArticle={this.removeArticle}
                           articles={this.state.articles} />
          </Main>
        );
    }
}

export default App;