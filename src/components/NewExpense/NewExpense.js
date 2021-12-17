import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseCard from "./ExpenseCard";
import { useState } from "react";

function NewExpense(props) {
  const [switchMode, setSwitchMode] = useState("Form");

  function switchModeHandler() {
    setSwitchMode(function (currentSwitchMode) {
      return currentSwitchMode === "Form" ? "New" : "Form";
    });
  }

  // Define a function to handle expense data submit in the form component
  // This function in the bridge between the child and parent
  // This gives this component i.e NewExpense access to data sent by child i.e ExpenseForm component

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
  }

  let newExpenseMode =
    switchMode === "Form" ? (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        changeSwitchMode={switchModeHandler}
      />
    ) : (
      <ExpenseCard
        changeSwitchMode={switchModeHandler}
      />
    );

  return <div className="new-expense">
      {newExpenseMode}
  </div>;
}

export default NewExpense;
