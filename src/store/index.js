import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import logger from 'redux-logger';
import initArticles from '../middlewares/initArticles';

const enhancer = applyMiddleware(
    initArticles,
    logger
);

export default createStore(reducer, {}, enhancer);