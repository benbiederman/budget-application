import CategoryColumn from "./CategoryColumn";
import DataColumn from "./DataColumn";

const DisplayMain = (props) => {
    return (
        <section className="display-main">
            <DataColumn header={"Income"} data={props.income} />
            <DataColumn header={"Expense - Individual"} data={props.expense} />
            <CategoryColumn header={"Expense - Category"} data={props.expense} />
        </section>
    )
}

export default DisplayMain;