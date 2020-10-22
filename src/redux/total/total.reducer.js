import { totalActionTypes } from "./total.types";

const TOTAL_STATE = {
  totalincome: 0,
  totalexpense: 0,
  totalbudget: 0,
  totalpercentage: 0
};

export const totalBudget = (state = TOTAL_STATE, action) => {
  switch (action.type) {
    case totalActionTypes.TOTAL_INCOME:
      //console.log(action)
      return {
        ...state,
        totalincome: state.totalincome + action.payload
      };
    case totalActionTypes.TOTAL_EXPENSE:
      return {
        ...state,
        totalexpense: state.totalexpense + action.payload
      };

    case totalActionTypes.TOTAL_BUDGET:
      return {
        ...state,
        totalbudget: state.totalincome - state.totalexpense
      };

    case totalActionTypes.TOTAL_PERCENTAGE:
      return {
        ...state,
        totalpercentage: Math.round(
          (state.totalexpense / state.totalincome) * 100
        )
      };

    case totalActionTypes.DELETE_TOTAL:
      const { item, percentage } = action.payload;
      if (item.type === "income") {
        return {
          ...state,
          totalincome: state.totalincome - item.value,
          totalbudget: state.totalbudget - item.value
        };
      } else if (item.type === "expense") {
        return {
          ...state,
          totalexpense: state.totalexpense - item.value,
          totalbudget: state.totalbudget + parseInt(item.value),
          totalpercentage: state.totalpercentage - percentage
        };
      }
      break;

    default:
      return state;
  }
};

export default totalBudget;
