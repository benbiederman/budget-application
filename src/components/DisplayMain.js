import CategoryColumn from "./CategoryColumn";
import DataColumn from "./DataColumn";

const DisplayMain = () => {
    return (
        <section className="display-main">
            <DataColumn header={"Income"}/>
            <DataColumn header={"Expense - Individual"} />
            <CategoryColumn header={"Expense - Category"} />
        </section>
    )
}

export default DisplayMain;