import React from "react";
import "./inputbudget.styles.scss";
import AddInput from "./addinput/addinput.component";
import ControlInput from "./controlinput/controlinput.component";

const InputBudget = () => (
  <div className="inputBudget">
    <AddInput />
    <ControlInput />
  </div>
);

export default InputBudget;
