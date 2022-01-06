import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const IncomeForm = (props) => {
  // State
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [month, setMonth] = useState("");

  // Handler
  function nameHandler(e) {
    setName(e.target.value);
  }

  function amountHandler(e) {
    setAmount(parseFloat(e.target.value));
  }

  function monthHandler(e) {
    setMonth(e.target.value);
  }

  function formHandler(e) {
    e.preventDefault();
    let income = { name: name, amount: amount, month: month, id: uuidv4() };

    // Calls up to App.js to add Income
    props.addIncome(income);

    // Reset form upon submission
    setName("");
    setAmount("");
    setMonth("");
  }

  return (
    <form className="income-form" onSubmit={formHandler}>
      <div>
        <p>Income Source:</p>
        <select value={name} onChange={nameHandler} required>
          <option value="">- Please Select One -</option>
          <option value="paycheck">Paycheck</option>
          <option value="rental">Rental</option>
          <option value="interest">Interest</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <p>Income Amount:</p>
        <input
          onChange={amountHandler}
          value={amount}
          type="number"
          min="0.00"
          step="0.01"
          required
        />
      </div>

      <div>
        <p>Income Month:</p>
        <select onChange={monthHandler} value={month} required>
          <option value="">- Please Select One -</option>
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>
      </div>

      <button className="submit-btn">Submit</button>
    </form>
  );
};

export default IncomeForm;
