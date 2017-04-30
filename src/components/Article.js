import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import ToggledComponent from './hoc/ToggledComponent';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Article extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        removeArticle: PropTypes.func
    };

    render() {
        const { title, id, text, removeArticle, comments, handleToggle, isOpen } = this.props;

        const articleText = isOpen ? <p>{text}</p> : null;
        const buttonRemoveArticle = removeArticle
            ? <button onClick={() => removeArticle(id)} type="button">Remove</button>
            : null;

        return (
            <CSSTransitionGroup
                    transitionName="article"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                <h1 onClick={handleToggle}>{title}</h1>
                { buttonRemoveArticle }
                { articleText }
                <CommentList comments={comments} />
            </CSSTransitionGroup>
        );
    }
}
export default ToggledComponent(Article);