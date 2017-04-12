import React, { Component } from 'react';
import ArticleList from './ArticleList';
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

    render() {
        return(
          <div>
              <ArticleList articles={this.state.articles} />
          </div>
        );
    }
}

export default App;