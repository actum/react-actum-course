import { INCREMENT_BY_VALUE, INCREMENT_COUNTER } from '../constants';

export const increment = () => {
    return {
        type: INCREMENT_COUNTER
    }
};

export const incrementByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: {
            value
        }
    }
};