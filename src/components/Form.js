import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validationConfig from '../validationConfig';
import { validated } from 'react-custom-validation';

class Form extends Component {


    static propTypes = {
        addArticle: PropTypes.func.isRequired
    };

    componentWillReceiveProps(nextProps) {
        const { $fieldEvent, title, text } = nextProps;
        if (!title && !text) $fieldEvent('reset');
    }

    render() {
        const { title, text, onChange, onValid, $field, $validation, $submit, $fieldEvent } = this.props;

        return (
            <form>
                <label htmlFor="title">Title</label>
                {$validation.title.show && <span className="validation__message">{$validation.title.error.reason}</span>}
                <input id="title" type="text" value={title}
                       {...$field('title', (e) => onChange('title', e.target.value))}/>

                <br />

                <label htmlFor="text">Text</label>
                {$validation.text.show && <span className="validation__message">{$validation.text.error.reason}</span>}
                <input id="text" type="text" value={text}
                       {...$field('text', (e) => onChange('text', e.target.value))}/>

                <br />

                <button
                    onClick= {
                        () => { $submit(onValid); }
                    }
                    type="button">Add article</button>
            </form>
        );
    }
}

export default validated(validationConfig)(Form);