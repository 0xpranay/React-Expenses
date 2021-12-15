// A component in react is just a JS function
// Write the functionality and export it
// Lowecase tags are built in HTML. UpperCase is custom components
import "./ExpenseItem.css";
import DatePanel from "./DatePanel";
import Card from "./Card";
// Import css file to make the bundler link them

// This function returns a component, other logic can still be done inside body
// The attributes in App.js become parameters(props) here
function ExpenseItem(props) {
  const currentDate = new Date();

  function clickHandler(){
    alert("Clicked");
  }
  return (
    <Card className="expense-item">
      <DatePanel
        month={currentDate.toLocaleString("en-US", { month: "long" })}
        date={currentDate.getDate()}
        year={currentDate.getFullYear()}
      ></DatePanel>
      <div className="expense-item__description">
        <h2 id = "title">{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>

      <button onClick = {clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;