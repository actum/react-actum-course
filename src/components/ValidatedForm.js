import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

class ValidatedForm extends Component {
    state = {
        title: '',
        text: '',
        comments: []
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
        const { addArticle } = this.props;


       return (
            <Form
                title={title}
                text={text}
                onChange={this.handleChange}
                onValid={this.handleClick}
                addArticle={addArticle}
            />
        )
    }
}

export default ValidatedForm;