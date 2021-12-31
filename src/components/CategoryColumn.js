import React, { useState } from "react";
import CategoryData from "./CategoryData";
import ColumnHeader from "./ColumnHeader";

const CategoryColumn = (props) => {
    return (
        <section className="display-column">
            <ColumnHeader header={props.header} />
            <div className="column-data">
                <CategoryData header={"Housing"} amount={1234.00} />
                <CategoryData header={"Transportation"} amount={1234} />
                <CategoryData header={"Food"} amount={1234.00} />
                <CategoryData header={"Utilities"} amount={1234} />
                <CategoryData header={"Medical"} amount={1234.00} />
                <CategoryData header={"Recreation"} amount={1234} />
                <CategoryData header={"Misc."} amount={1234} />
            </div>
        </section>
    )
}

export default CategoryColumn;