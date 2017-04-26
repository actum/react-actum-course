import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import ToggledComponent from './hoc/ToggledComponent';

class CommentList extends Component {
    render() {
        const { comments, isOpen, handleToggle } = this.props;

        const commentList = comments.map((comment) => {
            const { user, text, id } = comment;
            return (
              <li key={id}>
                  <Comment user={user} text={text} />
              </li>
            );
        });

        return(
            <div>
                <button onClick={handleToggle} type="button">{isOpen ? 'Hide' : 'Show' } comments</button>
                <ul>
                    { isOpen ? commentList : null }
                </ul>
            </div>
        );
    }
}

export default ToggledComponent(CommentList);