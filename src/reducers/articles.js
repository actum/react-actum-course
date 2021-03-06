import { INIT_ARTICLES_SUCCESS, REMOVE_ARTICLE, ADD_ARTICLE } from '../constatns';

export default (state = [], action) => {
    const { type, payload} = action;
    switch (type) {
        case INIT_ARTICLES_SUCCESS:
            const { articles } = payload;
            return Array.prototype.concat(state, articles);

        case ADD_ARTICLE:
            const { article } = payload;
            return [...state, article];

        case REMOVE_ARTICLE:
            const { id } = payload;
            return state.filter((article) => article.id !== id);

        default:
            return state;
    }
}