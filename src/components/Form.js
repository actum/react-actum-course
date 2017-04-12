import React, { Component } from 'react';

class Form extends Component {
    state = {
        title: '',
        text: ''
    };

    handleChange = (field, value) => {
          this.setState({
              [field]: value
          });
    };

    handleClick = () => {
        const id = +new Date;
        this.props.addArticle({
            ...this.state,
            id
        });

        this.setState({
            title: '',
            text: ''
        });

        console.log(this.form);

    };

    render() {
        const { title, text } = this.state;

        return (
            <form ref={(input) => this.form = input}>
                <label htmlFor="title">Title</label>
                <input onChange={(e) => this.handleChange('title', e.target.value)} type="text" id="title" value={title}/>

                <br />

                <label htmlFor="text">Text</label>
                <input onChange={(e) => this.handleChange('text', e.target.value)} type="text" id="text" value={text}/>

                <br />

                <button onClick={this.handleClick} type="button">Add article</button>
            </form>
        );
    }
}

export default Form;