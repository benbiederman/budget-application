import React, { useState, useEffect } from "react";
import AddSection from "./components/AddSection";
import DisplaySection from "./components/DisplaySection";
import "./styles/app.css";

function App() {
  // State
  const [income, setIncome] = useState(loadLocalData("income"));
  const [expense, setExpense] = useState(loadLocalData("expense"));

  // Functions
  // Add item to Income
  function addIncome(data) {
    setIncome([...income, data]);
  }

  //Add item to Expense
  function addExpense(data) {
    setExpense([...expense, data]);
  }

  // Remove items from Income Data
  function removeIncome(id) {
    setIncome(
      income.filter((i) => {
        return i.id !== id;
      })
    );
  }

  // Remove items from Expense Data
  function removeExpense(id) {
    setExpense(
      expense.filter((e) => {
        return e.id !== id;
      })
    );
  }

  // Load data from local storage
  function loadLocalData(data) {
    const localData = localStorage.getItem(data);
    return localData ? JSON.parse(localData) : [];
  }

  // Save data to local storage
  // Income
  useEffect(() => {
    localStorage.setItem("income", JSON.stringify(income));
  }, [income]);

  // Expense
  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(expense));
  }, [expense]);

  return (
    <div className="app">
      <AddSection addIncome={addIncome} addExpense={addExpense} />
      <DisplaySection
        income={income}
        expense={expense}
        removeIncome={removeIncome}
        removeExpense={removeExpense}
      />
    </div>
  );
}

export default App;
