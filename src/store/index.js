import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const enhancer = applyMiddleware(
    thunk,
    logger
);

export default createStore(reducer, {}, enhancer);