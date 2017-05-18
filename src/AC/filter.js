import { CHANGE_FILTER_DATE } from '../constatns';

export const changeFilterDate = (dateType, dateValue) => {
    return {
        type: CHANGE_FILTER_DATE,
        payload: {
            dateType,
            dateValue
        }
    }
};