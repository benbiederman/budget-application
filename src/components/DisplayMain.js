import CategoryColumn from "./CategoryColumn";
import DataColumn from "./DataColumn";

const DisplayMain = (props) => {
  return (
    <section className="display-main">
      <DataColumn
        header={"Income"}
        data={props.income}
        removeData={props.removeIncome}
      />
      <DataColumn
        header={"Expense - Individual"}
        data={props.expense}
        removeData={props.removeExpense}
      />
      <CategoryColumn header={"Expense - Category"} data={props.expense} />
    </section>
  );
};

export default DisplayMain;
