import axios from 'axios';
import { INIT_ARTICLES, REMOVE_ARTICLE, INIT_ARTICLES_SUCCESS, INIT_ARTICLES_FAILURE } from '../constatns';

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