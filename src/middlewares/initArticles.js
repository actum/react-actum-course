import { INIT_ARTICLES, INIT_ARTICLES_SUCCESS, INIT_ARTICLES_FAILURE } from '../constatns';
import axios from 'axios';

export default store => next => action => {
    const { type } = action;

    if (type !== INIT_ARTICLES) return next(action);

    axios.get('http://localhost:3000/articles')
        .then((response) => {
            next({
                ...action,
                type: INIT_ARTICLES_SUCCESS,
                payload: {
                    articles: response.data
                }
            })
        })
        .catch(() => {
            next({
                ...action,
                type: INIT_ARTICLES_FAILURE
            })
        });
}