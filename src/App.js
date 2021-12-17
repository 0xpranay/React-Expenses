// Import custom components
import { useState } from "react";
import ExpensesList from "./components/ExpensesList/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

    const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  function addExpenseHandler(newExpense) {

    setExpenses(function(pastExpenses){
      // Mistake here, note that the function needs to RETURN the new value. I missed RETURN often
      return [
        newExpense,
        ...pastExpenses
      ]
    });
  }


  return (
    <div>
      <div>
        {/* Now we can use it as a normal HTML element*/}
        {/* The attributes passed are received by function/component as parameters */}
        <NewExpense onNewExpense={addExpenseHandler}></NewExpense>
        <ExpensesList expensesArray={expenses}></ExpensesList>
      </div>
    </div>
  );
}

export default App;
