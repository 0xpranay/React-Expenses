// A component in react is just a JS function
// Write the functionality and export it
// Lowecase tags are built in HTML. UpperCase is custom components
import "./ExpenseItem.css";
import DatePanel from "../DatePanel/DatePanel";
import Card from "../Card/Card";
import React, { useState } from 'react';
// Import css file to make the bundler link them

// This function returns a component, other logic can still be done inside body
// The attributes in App.js become parameters(props) here
function ExpenseItem(props) {
  const currentDate = new Date();

  const [title, setTitle] = useState(props.title); // Use and define what useState should watch
   // So for changing/updation use the callable. To read the current state/value use the title/returned var, not props.title
  function clickHandler(){
    const newTitle = prompt("Enter the title") // Update the value using updater
    if(newTitle !== ""){
      setTitle(newTitle);
    }
  }
  return (
    <Card className="expense-item">
      <DatePanel
        month={currentDate.toLocaleString("en-US", { month: "long" })}
        date={currentDate.getDate()}
        year={currentDate.getFullYear()}
      ></DatePanel>
      <div className="expense-item__description">
        <h2 id = "title">{title}</h2> 
        {/* Note how we are using the title var i.e what's returned by the hook, not what we asked it to watch */}
        <div className="expense-item__price">{props.amount}</div>
      </div>

      <button onClick = {clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;