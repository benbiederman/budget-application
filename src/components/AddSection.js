import AddForm from "./AddForm";

const AddSection = (props) => {
    return (
        <section className="add-section">
            <AddForm 
                addIncome={props.addIncome}
                addExpense={props.addExpense}
            />
        </section>
    )
}

export default AddSection;