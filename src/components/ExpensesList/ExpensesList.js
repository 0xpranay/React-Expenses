import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";
import { useState } from "react";
import Card from "../Card/Card";

function ExpensesList(props) {
  const expenses = props.expensesArray;
  let yearExpenses = expenses;
  const [filterYear, setFilterYear] = useState("2021");

  function newFilterHandler(newFilterEntered) {
    setFilterYear(newFilterEntered);
  }
  yearExpenses = expenses.filter(function (item) {
    return item.date.getFullYear() == filterYear;
  });

  let filteredExpenses =
    yearExpenses.length === 0 ? (
      <div className = "message">No Expenses Found.</div>
    ) : (
      yearExpenses.map(function (expenseItem) {
        return (
          // Recall that returned items on each round are accumulated in an array by map
          <ExpenseItem
            key={expenseItem.id} // Used to help react differ between similar divs, improve performance. key prop is always used by react to differentiate, so don't use it for custom data
            title={expenseItem.title}
            amount={expenseItem.amount}
            date={expenseItem.date}
          />
        );
      })
    );

  return (
    <div className="expenses card">
      <ExpensesFilter onNewFilter={newFilterHandler} currentYear={filterYear} />

      {/* <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
            ></ExpenseItem>
            <ExpenseItem
            title={expenses[1].title}
            amount={expenses[1].amount}  
            date={expenses[1].date}
            ></ExpenseItem>
            <ExpenseItem
            title={expenses[2].title}
            amount={expenses[2].amount}
            date={expenses[2].date}
            ></ExpenseItem>
            <ExpenseItem
            title={expenses[3].title}
            amount={expenses[3].amount}
            date={expenses[3].date}
            ></ExpenseItem> */}

      {/* This way of hardcoding isn't good so iterate over expenses array */}
      {/* Curly braces in JSX code indicate a dynamic expression/JS code. */}
      {/* IMPORTANT. LEAVING AN ARRAY OF JSX ELEMENTS HERE MAKES REACT RENDER ALL THE CONTENTS OF THE ARRAY */}

      {/* The map function returns an array of JSX elements. React picks them up and renders */}

      {filteredExpenses}


    </div>
  );
}

export default ExpensesList;
