import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const ExpenseForm = (props) => {
    // State
    const[name, setName] = useState('');
    const[amount, setAmount] = useState('');
    const[month, setMonth] = useState('');
    const[category, setCategory] = useState('');

    // Handler
    function nameHandler(e){
        setName(e.target.value);
    }

    function amountHandler(e){
        setAmount(parseFloat(e.target.value));
    }

    function monthHandler(e){
        setMonth(e.target.value);
    }

    function categoryHandler(e){
        setCategory(e.target.value);
    }

    function formHandler(e){
        e.preventDefault();
        let expense = {name: name, amount: amount, month: month, category: category, id: uuidv4()}

        // Calls up to App.js to add Expense
        props.addExpense(expense);

        // Reset form upon submission 
        setName('');
        setAmount('');
        setMonth('');
        setCategory('');

    }

    return (
        <form className="expense-form" onSubmit={formHandler}>
            <div>
                <p>Expense Name:</p>
                <input onChange={nameHandler} value={name} type="text" required />
            </div>

            <div>
                <p>Expense Amount:</p>
                <input onChange={amountHandler} value={amount} type="number" min={0.00} step={0.01} required />
            </div>

            <div>
                <p>Expense Month:</p>
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

            <div>
                <p>Expense Category:</p>
                <select onChange={categoryHandler} value={category} required>
                    <option value="">- Please Select One -</option>
                    <option value="housing">Housing</option>
                    <option value="transportation">Transportation</option>
                    <option value="food">Food</option>
                    <option value="utilities">Utilities</option>
                    <option value="medical">Medical</option>
                    <option value="recreation">Recreation</option>
                    <option value="misc">Misc.</option>
                </select>
            </div>

            <button className="submit-btn">Submit</button>
        </form>
    )
}

export default ExpenseForm;