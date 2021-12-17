import "./ExpenseCard.css"

function ExpenseCard(props){
    return (
        <div className="card expense-bg">
            <button onClick={props.changeSwitchMode} className="add-expense">
                Add New Expense
            </button>
        </div>
    )
}


export default ExpenseCard;