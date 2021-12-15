import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {

    const [enteredTitle, setEnteredTitle] = useState("Title");
    function titleChangeHandler(changeEvent) {
      if(changeEvent.target.value === "") setEnteredTitle("Title");
      else setEnteredTitle(changeEvent.target.value);
    }

    const [enteredAmount, setEnteredAmount] = useState("Amount");
    function amountChangeHandler(changeEvent) {
      if(changeEvent.target.value === "") setEnteredAmount("Amount");
      else setEnteredAmount(changeEvent.target.value);
    }

    const [enteredDate, setEnteredDate] = useState("Date");
    function dateChangeHandler(changeEvent) {
      if(changeEvent.target.value === "") setEnteredDate("Date ");
      else setEnteredDate(changeEvent.target.value);
    }





    // This is way of updating 3 individual states, we can also put em all in an object
  const [userState, setUserState] = useState({
    enteredTitle: "Title",
    enteredAmount: "Amount",
    enteredDate: "Date",
  });



    // Simply update the whole object in the function. use the spread and override intended property
    function titleChangeHandler(changeEvent) {
        setUserState({
            ...userState,
            enteredTitle : changeEvent.target.value,
        })
    }

    function amountChangeHandler(changeEvent) {
        setUserState({
            ...userState,
            enteredAmount : changeEvent.target.value,
        })
    }

    function dateChangeHandler(changeEvent) {
        setUserState({
            ...userState,
            enteredDate: changeEvent.target.value,
        })
    }








    // Above is bad too, when we use current state to update next state, we should use a function inside the updater
    // React sends in pastState parameter by default when we use a function in updater
    // Previous manual way may contain inconistency becuase of internal scheduling. But passing function way, react guarantees that it is exactly previous state
    function titleChangeHandler(changeEvent) {
        setUserState(function(pastState){
            return {
                ...pastState,
                enteredTitle : changeEvent.target.value,
            }
        })
    }

    function amountChangeHandler(changeEvent) {
        setUserState(function(pastState){
            return {
                ...pastState,
                enteredAmount : changeEvent.target.value,
            }
        })
    }

    function dateChangeHandler(changeEvent) {
        setUserState(function(pastState){
            return {
                ...pastState,
                enteredDate : changeEvent.target.value,
            }
        })
    }




    function submitHandler(event){
        event.preventDefault();
    }

  return (
    <form onSubmit = {submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>{userState.enteredTitle}</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>{userState.enteredAmount}</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>{userState.enteredDate}</label>
          <input
            type="date"
            min="01-01-2019"
            max="31-12-2022"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add new expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
