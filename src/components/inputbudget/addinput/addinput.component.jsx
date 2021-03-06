import React from "react";
import "./addinput.styles.scss";
import { connect } from "react-redux";
import { addItem, expItem } from "../../../redux/incomes/icomes.action";
import {
  totalItem,
  totalExpense,
  totalBudget,
  totalPercentage
} from "../../../redux/total/total.action";

import { v4 as uuidv4 } from "uuid";

class AddInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "income",
      incomeItem: { id: "", description: "", value: 0, type: "" },
      expenseItem: {
        id: "",
        description: "",
        value: 0,
        type: ""
      }
    };
  }
  onSelectChange = (event) => {
    const typeState = event.target.value;
    const copyState = { ...this.state };
    copyState.type = typeState;
    this.setState({ ...copyState });
  };

  onDescriptionChange = (event) => {
    let copyState;
    switch (this.state.type) {
      case "income":
        copyState = { ...this.state.incomeItem };
        copyState.description = event.target.value;
        this.setState({ incomeItem: copyState });
        break;

      case "expense":
        copyState = { ...this.state.expenseItem };
        copyState.description = event.target.value;
        this.setState({ expenseItem: copyState });
        break;

      default:
        return;
    }
  };

  onValueChange = (event) => {
    let copyState;
    switch (this.state.type) {
      case "income":
        copyState = { ...this.state.incomeItem };
        copyState.value = event.target.value;
        copyState.type = this.state.type;
        this.setState({ incomeItem: copyState });

        break;

      case "expense":
        copyState = { ...this.state.expenseItem };
        copyState.value = event.target.value;
        copyState.type = this.state.type;
        this.setState({ expenseItem: copyState });

        break;

      default:
        return;
    }
  };

  sendAction = (types) => {
    const copystate = { ...this.state };
    switch (types) {
      //const copystat = {...this.state, {id: uuidv4()}}

      case "income":
        //Dispatch the Action for Add the Income

        //Set UUID
        copystate.incomeItem.id = uuidv4();
        this.setState({ incomeItem: copystate });

        this.props.addIncome(copystate.incomeItem);

        //Dispatch the Action for Set the total Income
        this.props.setTotalItem(this.state.incomeItem);

        //Dispatch the Action for Set the Global or total Budget
        this.props.setTotalBudget();

        //Dispatch the Action for the Set the percentage
        this.props.setTotalPercentage();

        //Erase all the Local State
        this.setState({
          incomeItem: { id: "", description: "", value: 0, type: "" }
        });

        break;

      case "expense":
        console.log(copystate.expenseItem.value);
        console.log(copystate.incomeItem.value);
        const percentage = Math.round(
          (copystate.expenseItem.value / copystate.incomeItem.value) * 100
        );
        console.log(`*****>>> ${percentage}`);
        //Set UUID
        copystate.expenseItem.id = uuidv4();
        copystate.expenseItem.percentage = percentage;
        this.setState({ expenseItem: copystate });

        //Dispatch the Action for Add the Expense
        this.props.addExpense(copystate.expenseItem);
        //Dispatch the Action for set the total Expense
        this.props.setTotalExpense(this.state.expenseItem);
        //Dispatch the Axction for set the Global or total Budget
        this.props.setTotalBudget();

        //Dispatch the Action for the Set the percentage
        this.props.setTotalPercentage();

        //Erase all the Local State
        this.setState({
          expenseItem: {
            id: "",
            description: "",
            value: 0,
            type: ""
          }
        });

        break;
      default:
        return;
    }
  };

  onButtonClick = () => {
    //check if  field are Empty, Null or less than 0
    const isEmpty = Object.values(this.state).some(
      // (item) => item === null || item === "" || item <= 0
      (item) => item === null || item === "" || item <= 0
    );
    //console.log(isEmpty);
    if (isEmpty) {
      return;
    }

    //console.log(this.props);
    this.sendAction(this.state.type);
  };

  handleKeyDown = (event) => {
    const isEmpty = Object.values(this.state).some(
      (item) => item === null || item === "" || item <= 0
    );
    if (isEmpty) return;

    if (event.key === "Enter") {
      this.sendAction(this.state.type);
    }
  };

  render() {
    //console.log(this.state);
    return (
      <div className="add">
        <select
          className={`add__type ${
            this.state.type === "income" ? "green" : "red"
          }`}
          onChange={this.onSelectChange}
          defaultChecked={this.state.type}
        >
          <option className="add__type-inc" value="income">
            +
          </option>

          <option className="add__type-exp" value="expense">
            -
          </option>
        </select>
        <div className="add__description">
          <input
            className={`${this.state.type === "income" ? "green" : "red"}`}
            type="text"
            value={`${
              this.state.type === "income"
                ? this.state.incomeItem.description
                : this.state.expenseItem.description
            }`}
            placeholder="Add description"
            onChange={this.onDescriptionChange}
          />
        </div>
        <div className="add__value">
          <input
            className={`${this.state.type === "income" ? "green" : "red"}`}
            type="number"
            value={`${
              this.state.type === "income"
                ? this.state.incomeItem.value
                : this.state.expenseItem.value
            }`}
            placeholder="Value"
            onChange={this.onValueChange}
            onKeyDown={this.handleKeyDown}
          />
        </div>
        <button className="add__button" onClick={this.onButtonClick}>
          <i
            className={`ion-ios-checkmark-outline ${
              this.state.type === "income" ? "green" : "red"
            }`}
          ></i>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addIncome: (item) => dispatch(addItem(item)),
  addExpense: (item) => dispatch(expItem(item)),
  setTotalItem: (item) => dispatch(totalItem(item)),
  setTotalExpense: (item) => dispatch(totalExpense(item)),
  setTotalBudget: () => dispatch(totalBudget()),
  setTotalPercentage: () => dispatch(totalPercentage())
});

export default connect(null, mapDispatchToProps)(AddInput);
