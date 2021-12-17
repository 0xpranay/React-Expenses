import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // For now I prefer the individual way
  const [enteredTitle, setEnteredTitle] = useState("");
  function titleChangeHandler(changeEvent) {
    setEnteredTitle(changeEvent.target.value);
  }

  const [enteredAmount, setEnteredAmount] = useState("");
  function amountChangeHandler(changeEvent) {
    setEnteredAmount(changeEvent.target.value);
  }

  const [enteredDate, setEnteredDate] = useState("");
  function dateChangeHandler(changeEvent) {
    setEnteredDate(changeEvent.target.value);
  }

  // This is way of updating 3 individual states, we can also put em all in an object
  // const [userState, setUserState] = useState({
  //   enteredTitle: "Title",
  //   enteredAmount: "Amount",
  //   enteredDate: "Date",
  // });

  // Simply update the whole object in the function. use the spread and override intended property
  // function titleChangeHandler(changeEvent) {
  //     setUserState({
  //         ...userState,
  //         enteredTitle : changeEvent.target.value,
  //     })
  // }

  // function amountChangeHandler(changeEvent) {
  //     setUserState({
  //         ...userState,
  //         enteredAmount : changeEvent.target.value,
  //     })
  // }

  // function dateChangeHandler(changeEvent) {
  //     setUserState({
  //         ...userState,
  //         enteredDate: changeEvent.target.value,
  //     })
  // }

  // Above is bad too, when we use current state to update next state, we should use a function inside the updater
  // React sends in pastState parameter by default when we use a function in updater
  // Previous manual way may contain inconistency becuase of internal scheduling. But passing function way, react guarantees that it is exactly previous state
  // function titleChangeHandler(changeEvent) {
  //     setUserState(function(pastState){
  //         return {
  //             ...pastState,
  //             enteredTitle : changeEvent.target.value,
  //         }
  //     })
  // }

  // function amountChangeHandler(changeEvent) {
  //     setUserState(function(pastState){
  //         return {
  //             ...pastState,
  //             enteredAmount : changeEvent.target.value,
  //         }
  //     })
  // }

  // function dateChangeHandler(changeEvent) {
  //     setUserState(function(pastState){
  //         return {
  //             ...pastState,
  //             enteredDate : changeEvent.target.value,
  //         }
  //     })
  // }

  function submitHandler(event) {
    event.preventDefault();

    // Make a wrapper for expense item props
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // Note that intention is to clear input fields after submit
    // This just changes the internal state variable.
    // To reflect in our input element, set value = {stateVariable}
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
    props.onSaveExpenseData(expenseData);
  }

  return (
    // The onChange listens and raises state handlers for every change i.e keystroke
    // value is set to a state variable so that onSubmit, the reset from submitHandler is reflected
    // Don't confuse and think it is an infinite loop. Only user changes raise onChange
    // The reflection/change due to react state update doesn't raise onChange

    // This concept is called two-way binding. Listen to user input and modify/decide what to show in HTML elements
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01-01-2019"
            max="31-12-2022"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>


      <div className="new-expense__actions">
        <button onClick={props.changeSwitchMode}>Cancel</button>
        <button type="submit">Add new expense</button>
      </div>

    </form>
  );
}

export default ExpenseForm;
