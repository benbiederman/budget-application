const CategoryData = (props) => {
    return (
        <div className="data">
            <h3>{props.header}</h3>
            <p>${props.amount}</p>
        </div>
    )
}

export default CategoryData;