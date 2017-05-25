import { combineReducers } from 'redux';
import counter from './counter';
import articles from './articles';
import filter from './filter';
import validation from './validation';

export default combineReducers({
    counter,
    articles,
    filter,
    validation
});