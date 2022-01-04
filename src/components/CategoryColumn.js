import React, { useState, useEffect } from "react";
import CategoryData from "./CategoryData";
import ColumnHeader from "./ColumnHeader";

const CategoryColumn = (props) => {
    // State
    const[housing, setHousing] = useState();
    const[transportation, setTransportation] = useState();
    const[food, setFood] = useState();
    const[utilities, setUtilities] = useState();
    const[medical, setMedical] = useState();
    const[recreation, setRecreation] = useState();
    const[misc, setMisc] = useState();

    useEffect(() => {
        setHousing(0);
        setTransportation(0);
        setFood(0);
        setUtilities(0);
        setMedical(0);
        setRecreation(0);
        setMisc(0);

        props.data.map((d) => {
            if(d.category === 'housing'){
                setHousing(prevState => prevState + d.amount);
            } else if(d.category === 'transportation'){
                setTransportation(prevState => prevState + d.amount);
            } else if(d.category === 'food'){
                setFood(prevState => prevState + d.amount);
            } else if(d.category === 'utilities'){
                setUtilities(prevState => prevState + d.amount);
            } else if(d.medical === 'medical'){
                setMedical(prevState => prevState + d.amount);
            } else if(d.medical === 'recreation'){
                setRecreation(prevState => prevState + d.amount);
            } else{
                setMisc(prevState => prevState + d.amount);
            }
        })
    }, [props.data])

    

    return (
        <section className="display-column">
            <ColumnHeader header={props.header} />
            <div className="column-data">
                <CategoryData header={"Housing"} amount={housing.toFixed(2)} />
                <CategoryData header={"Transportation"} amount={transportation.toFixed(2)} />
                <CategoryData header={"Food"} amount={food.toFixed(2)} />
                <CategoryData header={"Utilities"} amount={utilities.toFixed(2)} />
                <CategoryData header={"Medical"} amount={medical.toFixed(2)} />
                <CategoryData header={"Recreation"} amount={recreation.toFixed(2)} />
                <CategoryData header={"Misc."} amount={misc.toFixed(2)} />
            </div>
        </section>
    )
}

export default CategoryColumn;