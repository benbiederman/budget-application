import DisplayFooter from "./DisplayFooter";
import DisplayHeader from "./DisplayHeader";
import DisplayMain from "./DisplayMain";

const DisplaySection = () => {
    return (
        <section className="display-section">
            <DisplayHeader />
            <DisplayMain />
            <DisplayFooter />
        </section>
    )
}

export default DisplaySection;