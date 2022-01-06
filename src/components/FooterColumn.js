import ColumnHeader from "./ColumnHeader";

const FooterColumn = (props) => {
  return (
    <section className={props.style}>
      <ColumnHeader header={props.header} />
      <p>${props.amount}</p>
    </section>
  );
};

export default FooterColumn;
