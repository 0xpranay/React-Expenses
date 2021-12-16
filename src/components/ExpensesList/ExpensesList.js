
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import './ExpensesList.css'

function ExpensesList(props){
    const expenses = props.expensesArray;

    function newFilterHandler(newFilterEntered){
        alert("New filter year detected " + newFilterEntered);
    }
    
    return (
        <div className="expenses card">
            <ExpensesFilter onNewFilter = {newFilterHandler}/>

            <ExpenseItem
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
            ></ExpenseItem>
        </div>
    );
}

export default ExpensesList;