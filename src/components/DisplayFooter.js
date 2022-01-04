import React, { useState, useEffect } from "react";
import FooterColumn from "./FooterColumn";

const DisplayFooter = (props) => {
    // State
    const[totalIncome, setTotalIncome] = useState(0);
    const[totalExpense, setTotalExpense] = useState(0)

    // Effect
    useEffect(() => {
        setTotalIncome(0);
        setTotalExpense(0);

        props.income.map((i) => {
            setTotalIncome(prevState => prevState + i.amount);
        })

        props.expense.map((e) => {
            setTotalExpense(prevState => prevState + e.amount)
        })
    }, [props.income, props.expense])


    return (
        <section className="display-footer">
            <FooterColumn header={"Total Income:"} amount={totalIncome.toFixed(2)} />
            <FooterColumn header={"Total Expenses:"} amount={totalExpense.toFixed(2)} />
            <FooterColumn header={"Balance:"} amount={(totalIncome - totalExpense).toFixed(2)} />
        </section>
    )
}

export default DisplayFooter;