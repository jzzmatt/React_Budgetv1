import React from "react";
import "./inputitem.styles.scss";
import { connect } from "react-redux";
const InputItem = ({ income, totalpercentage }) => {
  const formatValue = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
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
            % {totalpercentage}
          </div>
        ) : null}
        <div className="income__list__item-delete">
          <button className={`income__list__item-delete-button ${income.type}`}>
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => ({
  totalpercentage: state.totalBudget.totalpercentage
});

export default connect(mapStateToProps)(InputItem);
