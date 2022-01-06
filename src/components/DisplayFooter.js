import React, { useState, useEffect } from "react";
import FooterColumn from "./FooterColumn";

const DisplayFooter = (props) => {
  // State
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  // Effect
  useEffect(() => {
    setTotalIncome(0);
    setTotalExpense(0);

    // Total Income
    props.income.map((i) => {
      setTotalIncome((prevState) => prevState + i.amount);
    });

    // Total Expense
    props.expense.map((e) => {
      setTotalExpense((prevState) => prevState + e.amount);
    });
  }, [props.income, props.expense]);

  // Style Total Income amount if over $0
  function incomeStyling() {
    return totalIncome > 0 ? "footer-column positive" : "footer-column neutral";
  }

  // Style Total Expense amount if over $0
  function expenseStyling() {
    return totalExpense > 0
      ? "footer-column negative"
      : "footer-column neutral";
  }

  // Determines if balance is positive or negative, colors accordingly.
  function balanceStyling() {
    if (totalIncome - totalExpense > 0) {
      return "footer-column positive";
    } else if (totalIncome - totalExpense < 0) {
      return "footer-column negative";
    } else {
      return "footer-column neutral";
    }
  }

  return (
    <section className="display-footer">
      <FooterColumn
        header={"Total Income:"}
        amount={totalIncome.toFixed(2)}
        style={incomeStyling()}
      />
      <FooterColumn
        header={"Total Expenses:"}
        amount={totalExpense.toFixed(2)}
        style={expenseStyling()}
      />
      <FooterColumn
        header={"Balance:"}
        amount={(totalIncome - totalExpense).toFixed(2)}
        style={balanceStyling()}
      />
    </section>
  );
};

export default DisplayFooter;
