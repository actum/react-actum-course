import axios from 'axios';
import { INIT_ARTICLES, REMOVE_ARTICLE, INIT_ARTICLES_SUCCESS, INIT_ARTICLES_FAILURE, ADD_ARTICLE, ERROR_FORM_INVALID } from '../constatns';
import { minLength, maxLength } from '../validationRules';

export const initArticles = () => {
    return (dispatch) => {
        dispatch({
            type: INIT_ARTICLES
        });

        axios.get('http://localhost:3000/articles')
            .then((response) => {
                dispatch({
                    type: INIT_ARTICLES_SUCCESS,
                    payload: {
                        articles: response.data
                    }
                })
            })
            .catch(() => {
                dispatch({
                    type: INIT_ARTICLES_FAILURE
                })
            });
    }
};

export const removeArticle = (id) => {
    return {
        type: REMOVE_ARTICLE,
        payload: {
            id
        }
    }
};

export const addArticle = (article) => {
    return (dispatch) => {

        if (minLength(article.title, 5)) {
            dispatch({
                type: ERROR_FORM_INVALID,
                payload: {
                    field: 'title',
                    message: minLength(article.title, 5)
                }
            });

            return;
        }

        if (minLength(article.text, 5)) {
            dispatch({
                type: ERROR_FORM_INVALID,
                payload: {
                    field: 'text',
                    message: minLength(article.text, 5)
                }
            });

            return;
        }

        if (maxLength(article.title, 10)) {
            dispatch({
                type: ERROR_FORM_INVALID,
                payload: {
                    field: 'title',
                    message: maxLength(article.title, 10)
                }
            });

            return;
        }

        article.id = +new Date;

        dispatch({
            type: ADD_ARTICLE,
            payload: {
                article
            }
        });
    }
};