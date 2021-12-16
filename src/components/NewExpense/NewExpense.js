import './NewExpense.css'
import ExpenseForm from './ExpenseForm';


function NewExpense(props){

    // Define a function to handle expense data submit in the form component
    // This function in the bridge between the child and parent
    // This gives this component i.e NewExpense access to data sent by child i.e ExpenseForm component
    
    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString(),
        }
        console.log(expenseData);
        props.onNewExpense(expenseData);
    }


    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;