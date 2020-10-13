import { incomesActionTypes } from "./incomes.types";

const INITIAL_STATE = {
  incomes: [],
  expenses: []
};

const incomesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case incomesActionTypes.ADD_INCOME:
      //console.log(action)
      return {
        ...state,
        incomes: [...state.incomes, action.payload]
      };

    case incomesActionTypes.EXP_INCOME:
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      };

    default:
      return state;
  }
};

export default incomesReducer;
