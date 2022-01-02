import FooterColumn from "./FooterColumn";

const DisplayFooter = () => {
    return (
        <section className="display-footer">
            <FooterColumn header={"Total Income:"} amount={1234} />
            <FooterColumn header={"Total Expenses:"} amount={1234} />
            <FooterColumn header={"Balance:"} amount={1234} />
        </section>
    )
}

export default DisplayFooter;