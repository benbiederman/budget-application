import ColumnHeader from "./ColumnHeader";
import Data from "./Data";

const DataColumn = (props) => {
    return (
        <section className="display-column">
            <ColumnHeader header={props.header} />
            <div className="column-data">
                
            </div>
        </section>
    )
}

export default DataColumn;