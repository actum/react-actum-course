import { INIT_ARTICLES, REMOVE_ARTICLE } from '../constatns';

export const initArticles = () => {
    return {
        type: INIT_ARTICLES
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