const IncomeForm = () => {
    return (
        <form className="income-form">
            <div>
                <p>Income Source:</p>
                <select required>
                    <option value="">- Please Select One -</option>
                    <option value="paycheck">Paycheck</option>
                    <option value="rental">Rental</option>
                    <option value="interest">Interest</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div>
                <p>Income Amount:</p>
                <input type="number" min={0.00} step={0.01} required />
            </div>

            <div>
                <p>Income Month:</p>
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

            <button className="submit-btn">Submit</button>
        </form>
    )
}

export default IncomeForm;