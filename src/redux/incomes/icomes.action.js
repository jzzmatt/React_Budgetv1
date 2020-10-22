import incomesActionTypes from "./incomes.types";

export const addItem = (item) => ({
  type: incomesActionTypes.ADD_INCOME,
  payload: item
});

export const expItem = (item) => ({
  type: incomesActionTypes.EXP_INCOME,
  payload: item
});

export const deleteItem = (item) => ({
  type: incomesActionTypes.DELETE_ITEM,
  payload: item
});
