import React, { Component } from 'react';
import ArticleList from './ArticleList';
import Form from './Form';
import axios from 'axios';

class App extends Component {
    state = {
        articles: []
    };

    componentWillMount() {
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
          <div>
              <Form addArticle={this.addArticle} />
              <ArticleList removeArticle={this.removeArticle}
                           articles={this.state.articles} />
          </div>
        );
    }
}

export default App;