import queryString from "query-string";
import { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import MealItem from "./MealItem";


function Search(props) {
  
  let query = queryString.parse(props.location.search).q;
  var[mealData,setmealData]=useState(undefined)
  useEffect(() => {
    let apiurl ="https://www.themealdb.com/api/json/v1/1/search.php?s="+ query;
    console.log(apiurl)
    axios({
        method:"get",
      url: apiurl,
    }).then(
      (response) => {
        console.log(response)
        setmealData(response.data.meals)
      },
      (error) => {
        console.log(error);
      }
    );
  }, [query]);

  return (
    <div>
        { mealData && mealData!==undefined ? ( <div className={"searchList"}>
            {mealData.map((item,index)=>{
               return <MealItem key={index} data={item} />
            })}
        </div> ):<h2 className={"text-danger text-center"}>Sorry !! No Meal Found</h2>}
    </div>
  );
}

export default withRouter(Search);