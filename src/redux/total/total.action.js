import { totalActionTypes } from "./total.types";

export const totalItem = (item) => ({
  type: totalActionTypes.TOTAL_INCOME,
  payload: parseInt(item.value)
});

export const totalExpense = (item) => ({
  type: totalActionTypes.TOTAL_EXPENSE,
  payload: parseInt(item.value)
});

export const totalBudget = () => ({
  type: totalActionTypes.TOTAL_BUDGET
});

export const totalPercentage = () => ({
  type: totalActionTypes.TOTAL_PERCENTAGE
});

export const deleteTotal = (item, percentage) => ({
  type: totalActionTypes.DELETE_TOTAL,
  payload: { item, percentage }
});
