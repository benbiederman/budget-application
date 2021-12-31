const Data = (props) => {
    return (
        <div className="data" tabIndex={0}>
            <button className="x-btn">X</button>
            <h3>Income | January</h3>
            <p>${props.amount.toFixed(2)}</p>
        </div>
    )
}

export default Data;