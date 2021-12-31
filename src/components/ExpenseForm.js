const ExpenseForm = () => {
    return (
        <form className="expense-form">
            <div>
                <p>Expense Name:</p>
                <input type="text" required />
            </div>

            <div>
                <p>Expense Amount:</p>
                <input type="number" min={0.00} step={0.01} required />
            </div>

            <div>
                <p>Expense Month:</p>
                <select required>
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
                <select required>
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