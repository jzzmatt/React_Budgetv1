import React from "react";
import "./inputitem.styles.scss";
import { connect } from "react-redux";
import { deleteItem } from "../../../../redux/incomes/icomes.action";
import { deleteTotal } from "../../../../redux/total/total.action";
const InputItem = ({ deleteItem, deleteTotal, income, totalIncome }) => {
  const formatValue = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const onButtonClick = (item, percentage) => {
    //console.log(item.id);
    //dispatch an Action  with the item.id and the item type to reduce the list
    deleteItem(item);
    deleteTotal(item, percentage);
  };

  if (income) {
    return (
      <div className="income__list__item">
        <div className="income__list__item-desc">{income.description}</div>
        <div className="income__list__item-value">
          {`${income.type === "income" ? "+" : "-"} ${formatValue(
            income.value
          )}`}
        </div>
        {income.type === "expense" ? (
          <div className="income__list__item-percentage">
            % {Math.round((income.value / totalIncome) * 100)}
          </div>
        ) : null}
        <div className="income__list__item-delete">
          <button
            className={`income__list__item-delete-button ${income.type}`}
            onClick={() =>
              onButtonClick(
                income,
                Math.round((income.value / totalIncome) * 100)
              )
            }
          >
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
const mapDispatchTopProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteItem(item)),
  deleteTotal: (item, percentage) => dispatch(deleteTotal(item, percentage))
});
const mapStateToProps = (state) => ({
  totalIncome: state.totalBudget.totalincome
});

export default connect(mapStateToProps, mapDispatchTopProps)(InputItem);
