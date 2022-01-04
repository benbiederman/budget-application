import React, { useState, useEffect } from 'react';
import AddSection from './components/AddSection';
import DisplaySection from './components/DisplaySection';
import './styles/app.css';

function App() {
  // State
  const[income, setIncome] = useState([{name: "interest", amount: 12, month: "january", id:1521}, {name: "rental", amount: 1234, month: "february", id: 123452345}, {name: "paycheck", amount: 1233, month: "february", id: 1324234}, {name: "paycheck", amount: 12345, month: "april", id: 1232534243}]);
  const[expense, setExpense] = useState([{name: "rent", amount: 123, month: "january", category: "housing", id: 12}, {name: "car", amount: 12, month: "january", category: "transportation", id: 14}, {name: "rent", amount: 123, month: "february", category: "housing", id: 112341232}, {name: "car", amount: 12, month: "february", category: "transportation", id: 23424356453}]);

  // Functions
  function removeIncome(id){
    setIncome(
        income.filter(i => {
            return i.id !== id;
        })
    )
  }

  function removeExpense(id){
     setExpense(
        expense.filter(e => {
            return e.id !== id;
        })
    )
  }

  return (
    <div className="app">
        <AddSection />
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
