import { combineReducers } from "redux";
import incomesReducer from "./incomes/incomes.reducer";
import { totalBudget } from "./total/total.reducer";

export default combineReducers({
  incomes: incomesReducer,
  totalBudget
});
