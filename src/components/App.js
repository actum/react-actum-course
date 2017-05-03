import React, { Component } from 'react';
import ArticleList from './ArticleList';
import ValidatedForm from './ValidatedForm';
import axios from 'axios';
import Main from './Main';

class App extends Component {
    state = {
        articles: []
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

    render() {
        return(
          <Main>
              <ValidatedForm addArticle={this.addArticle} />
              <ArticleList removeArticle={this.removeArticle}
                           articles={this.state.articles} />
          </Main>
        );
    }
}

export default App;