import ColumnHeader from "./ColumnHeader";
import Data from "./Data";
import NoData from "./NoData";

const DataColumn = (props) => {
    function generateData(){
        if(props.data.length === 0){
            return <NoData />
        } else {
            return props.data.map((d) => (
                <Data 
                name={d.name}
                month={d.month}
                amount={d.amount}
                key={d.id} />
            ))
        }
    }
    
    return (
        <section className="display-column">
            <ColumnHeader header={props.header} />
            <div className="column-data">
                {generateData()}
            </div>
        </section>
    )
}

export default DataColumn;