import { ERROR_FORM_INVALID, ADD_ARTICLE } from '../constatns';

const defaultState = {
    field: '',
    message: '',
    isValid: true
};

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch(type) {
        case ERROR_FORM_INVALID:
            const { field, message } = payload;

            return {
                ...state,
                field,
                message,
                isValid: false
            };

        case ADD_ARTICLE:
            return defaultState;

        default:
            return state;
    }
}