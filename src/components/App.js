import React from "react";
import "./App.scss";
import TotalBudget from "./totalbudget/totalbuget.component";
import InputBudget from "./inputbudget/inputbudget.component";

export default function App() {
  return (
    <div className="App">
      <TotalBudget />
      <InputBudget />
    </div>
  );
}
