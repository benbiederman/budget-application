const CategoryData = (props) => {
    return (
        <div className="data">
            <h3>{props.header}</h3>
            <p>${props.amount.toFixed(2)}</p>
        </div>
    )
}

export default CategoryData;