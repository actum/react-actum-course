import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

class ValidatedForm extends Component {
    state = {
        title: '',
        text: '',
        comments: []
    };

    componentWillReceiveProps(nextProps) {
        const { isValid } = nextProps.validation;
        if (isValid) {
            this.setState({
                title: '',
                text: ''
            });
        }
    }

    static propTypes = {
        addArticle: PropTypes.func.isRequired
    };

    handleChange = (field, value) => {
        this.setState({
            [field]: value
        });
    };

    handleClick = () => {
        const { addArticle } = this.props;

        addArticle({
            ...this.state
        });
    };

    getError = (type) => {
        const { field, message } = this.props.validation;
        if (type === field) return message;
    };

    render() {
        const { title, text } = this.state;

       return (

            <form>
                <label htmlFor="title">Title</label>
                {this.getError('title')}
                <input id="title" type="text" value={title} onChange={(e) => this.handleChange('title', e.target.value)} />

                <br />

                <label htmlFor="text">Text</label>
                {this.getError('text')}
                <input id="text" type="text" value={text} onChange={(e) => this.handleChange('text', e.target.value)} />

                <br />

                <button onClick={this.handleClick} type="button">Add article</button>
            </form>
        )
    }
}

export default ValidatedForm;