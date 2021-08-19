import queryString from "query-string";
import { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import MealItem from "./MealItem";

function Category(props){

    let query = queryString.parse(props.location.search).q;
    var[categoryData,setcategoryData]=useState(undefined)
    useEffect(() => {
        let apiurl ="https://www.themealdb.com/api/json/v1/1/filter.php?c="+ query;
        console.log(apiurl)
        axios({
            method:"get",
        url: apiurl,
        }).then(
                (response) => {
                    console.log(response)
                    setcategoryData(response.data.meals)
                },
                (error) => {
                    console.log(error);
                }
                );
    }, [query]);

    return (
        <div>
            { categoryData && categoryData!==undefined ? ( <div className={"searchList"}>
                {categoryData.map((item,index)=>{
                return <MealItem key={index} data={item} />
                })}
            </div> ):<h2 className={"text-danger text-center"}>Invalid Category</h2>}
        </div>
    )
}


export default Category