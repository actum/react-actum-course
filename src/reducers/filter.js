import { CHANGE_FILTER_DATE } from '../constatns';

const defaultState = {
    filterDate: {
        startDate: '',
        endDate: ''
    }
};

 export default (state = defaultState, action) => {
      const { type, payload } = action;

      switch (type) {
          case CHANGE_FILTER_DATE:
              const { dateType, dateValue } = payload;

              return {
                  ...state,
                  filterDate: {
                      ...state.filterDate,
                      [dateType]: dateValue
                  }
              };

          default:
              return state;
      }
  }