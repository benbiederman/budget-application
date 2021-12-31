import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm";
import IncomeForm from "./IncomeForm";

const AddForm = () => {
    // State
    const[form, setForm] = useState('income');

    // Handler
    const incomeBtnHandler = () => {
        setForm('income');
    }

    const expenseBtnHandler = () => {
        setForm('expense');
    }

    // Functions
    function incomeBtnStyling(){
        if(form === 'income'){
            return "header-btn header-btn-active income-btn"
        } else {
            return "header-btn income-btn"
        }
    }

    function expenseBtnStyling(){
        if(form === 'expense'){
            return "header-btn header-btn-active expense-btn"
        } else {
            return "header-btn expense-btn"
        }
    }

    function formGenerator(){
        if(form === 'income'){
            return <IncomeForm />
        } else {
            return <ExpenseForm />
        }
    }

    return (
        <section className="add-form">
            <div className="form-header">
                <button onClick={incomeBtnHandler} className={incomeBtnStyling()}>Add Income</button>
                <button onClick={expenseBtnHandler} className={expenseBtnStyling()}>Add Expense</button>
            </div>
            {formGenerator()}
        </section>
    )
}

export default AddForm;