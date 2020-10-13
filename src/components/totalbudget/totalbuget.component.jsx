import React from "react";
import "./totalbudget.styles.scss";
import { connect } from "react-redux";

const TotalBudget = ({
  totalincome,
  totalexpense,
  totalbudget,
  totalpercentage
}) => {
  const displayDate = () => {
    const now = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const month = now.getMonth();
    const year = now.getFullYear();
    return months[month] + " " + year;
  };

  const formatValue = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  console.log(totalincome);
  return (
    <div className="budget">
      <div className="budget__date">{displayDate()}</div>
      <div className="budget__value">{formatValue(totalbudget)}</div>
      <div className="budget__income">
        <div className="budget__income-text">income</div>
        <div className="budget__income-value">+ {formatValue(totalincome)}</div>
      </div>
      <div className="budget__expense">
        <div className="budget__expense-text">expenses</div>
        <div className="budget__expense-value">
          - {formatValue(totalexpense)}
        </div>
        <div className="budget__expense-percentage">% {totalpercentage}</div>
      </div>
    </div>
  );
};
/*
const TOTAL_STATE = {
  totalincome: 0,
  totalexpense: 0,
  totalbudget: 0,
  totalpercentage: 0
};
 */

const mapStateToProps = (state) => ({
  totalincome: state.totalBudget.totalincome,
  totalexpense: state.totalBudget.totalexpense,
  totalbudget: state.totalBudget.totalbudget,
  totalpercentage: state.totalBudget.totalpercentage
});

export default connect(mapStateToProps)(TotalBudget);
