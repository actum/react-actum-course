import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    state = {
        title: '',
        text: ''
    };

    static propTypes = {
        addArticle: PropTypes.func.isRequired
    };

    handleChange = (field, value) => {
          this.setState({
              [field]: value
          });
    };

    handleClick = () => {
        const id = +new Date;
        const { addArticle } = this.props;

        addArticle({
            ...this.state,
            id
        });

        this.setState({
            title: '',
            text: ''
        });
    };

    render() {
        const { title, text } = this.state;

        return (
            <form>
                <label htmlFor="title">Title</label>
                <input type="text"
                       id="title"
                       value={title}
                       onChange={(e) => this.handleChange('title', e.target.value)} />

                <br />

                <label htmlFor="text">Text</label>
                <input type="text"
                       id="text"
                       value={text}
                       onChange={(e) => this.handleChange('text', e.target.value)} />

                <br />

                <button onClick={this.handleClick} type="button">Add article</button>
            </form>
        );
    }
}

export default Form;