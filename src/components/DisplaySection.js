import React, { useState, useEffect } from "react";
import DisplayFooter from "./DisplayFooter";
import DisplayHeader from "./DisplayHeader";
import DisplayMain from "./DisplayMain";

const DisplaySection = (props) => {
    // State
    const[month, setMonth] = useState('ytd');
    const[filteredIncome, setFilteredIncome] = useState([]);
    const[filteredExpense, setFilteredExpense] = useState([]);

    // Effect
    // Header Dropdown to change Month
    useEffect(() => {
        if(month === 'ytd'){
            setFilteredIncome(props.income)
            setFilteredExpense(props.expense)
        } else {
            setFilteredIncome(
                props.income.filter(i => {
                    return i.month === month
                })
            )

            setFilteredExpense(
                props.expense.filter(e => {
                    return e.month === month
                })
            )
        }
    }, [month])

    // Functions
    function updateMonth(e){
        setMonth(e.target.value)
    }

    return (
        <section className="display-section">
            <DisplayHeader updateMonth={updateMonth} />
            <DisplayMain 
                income={filteredIncome}
                expense={filteredExpense}
            />
            <DisplayFooter 
                income={filteredIncome}
                expense={filteredExpense}
            />
        </section>
    )
}

export default DisplaySection;