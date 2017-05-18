import { INIT_ARTICLES, REMOVE_ARTICLE } from '../constatns';

export const initArticles = (articles) => {
    return {
        type: INIT_ARTICLES,
        payload: {
            articles
        }
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