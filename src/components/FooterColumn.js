import ColumnHeader from "./ColumnHeader";


const FooterColumn = (props) => {
    return (
        <section className="footer-column">
            <ColumnHeader header={props.header} />
            <p>${props.amount}</p>
        </section>
    )
}

export default FooterColumn;