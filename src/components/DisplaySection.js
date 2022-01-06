import React, { useState, useEffect } from "react";
import DisplayFooter from "./DisplayFooter";
import DisplayHeader from "./DisplayHeader";
import DisplayMain from "./DisplayMain";

const DisplaySection = (props) => {
  // State
  const [month, setMonth] = useState("ytd");
  const [filteredIncome, setFilteredIncome] = useState([]);
  const [filteredExpense, setFilteredExpense] = useState([]);

  // Effect
  // Header Dropdown to change Month
  useEffect(() => {
    // If YTD show all data
    if (month === "ytd") {
      setFilteredIncome(props.income);
      setFilteredExpense(props.expense);
    } else {
      // If header is set, filter Income for income in that month
      setFilteredIncome(
        props.income.filter((i) => {
          return i.month === month;
        })
      );

      // If header is set, filter Expense for expense in that month
      setFilteredExpense(
        props.expense.filter((e) => {
          return e.month === month;
        })
      );
    }
  }, [props.income, props.expense, month]);

  // Functions
  function updateMonth(e) {
    setMonth(e.target.value);
  }

  return (
    <section className="display-section">
      <DisplayHeader updateMonth={updateMonth} />
      <DisplayMain
        income={filteredIncome}
        expense={filteredExpense}
        removeIncome={props.removeIncome}
        removeExpense={props.removeExpense}
      />
      <DisplayFooter income={filteredIncome} expense={filteredExpense} />
    </section>
  );
};

export default DisplaySection;
