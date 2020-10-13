import React from "react";
import "./controlinput.styles.scss";
import InputItem from "./inputitem/inputitem.component";
import { connect } from "react-redux";

const ControlInput = ({ incomes }) => (
  <div className="control">
    <div className="income">
      <h2 className="income__title">income</h2>

      {incomes.incomes.map((income) => (
        <div key={income.id} className="income__list">
          <InputItem income={income} />
        </div>
      ))}
    </div>
    <div className="expense">
      <h2 className="expense__title">expense</h2>
      {incomes.expenses.map((income) => (
        <div key={income.id} className="expense__list">
          <InputItem income={income} />
        </div>
      ))}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  incomes: state.incomes
});

//export default ControlInput

export default connect(mapStateToProps)(ControlInput);
