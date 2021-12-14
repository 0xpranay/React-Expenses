// A component in react is just a JS function
// Write the functionality and export it
// Lowecase tags are built in HTML. UpperCase is custom components
import "./ExpenseItem.css";
import DatePanel from "./DatePanel";
// Import css file to make the bundler link them

// This function returns a component, other logic can still be done inside body
// The attributes in App.js become parameters(props) here
function ExpenseItem(props) {
    const currentDate = new Date(); 
  return (
    <div className="expense-item">
      {/*Note not class, but className, different in JSX*/}
        <DatePanel month = {currentDate.toLocaleString('en-US', {month : 'long'})} date = {currentDate.getDate()} year = {currentDate.getFullYear()}></DatePanel>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
