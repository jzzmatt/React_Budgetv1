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

    case incomesActionTypes.DELETE_ITEM:
      if (action.payload.type === "income") {
        return {
          ...state,
          incomes: state.incomes.filter(
            (income) => income.id !== action.payload.id
          )
        };
      } else if (action.payload.type === "expense") {
        return {
          ...state,
          expenses: state.expenses.filter(
            (expense) => expense.id !== action.payload.id
          )
        };
      }
      break;

    default:
      return state;
  }
};

export default incomesReducer;
