import { useState, useEffect } from "react";
import axios from "axios";

function MealDetails(props) {
  var [mealdetails, setmealdetails] = useState();
  useEffect(() => {
    var apiurl =
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +
      props.match.params.mealid;

    axios({
      method: "get",
      url: apiurl,
    }).then(
      (response) => {
        console.log(response.data);
        setmealdetails(response.data.meals[0]);
      },
      (error) => {}
    );
  }, []);
  var mealIngredients = []
  if(mealdetails!==undefined){
  for(let i=1;i<=20;i++){
      if(mealdetails["strIngredient"+i].length>1){
            mealIngredients.push(mealdetails["strIngredient"+i]+" -- "+mealdetails["strMeasure"+i])
        }
      
  }}
  return (
    <div>
      {mealdetails && mealdetails !== undefined ? (
        <div className={"mealDetails"}>
          <div>
            <h2 className={"text-center mb-3"}>{mealdetails.strMeal}</h2>
            <div className={"imgWrapper"}>
              <img
                src={mealdetails.strMealThumb}
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div>
          <div>
          <h2 className={"text-center mb-1"}>Ingredients</h2>
            <div className={"ingredientWrapper"}>
                {mealIngredients.map((data,index)=>{
                    return <span className={"ingredientBox"}>{data}</span>
                })}
            </div>
          </div>
          <div className={"instructionWrapper"}>
              <p>
                {mealdetails.strInstructions}
              </p>
              <a className={"btn btn-danger"} href={mealdetails.strYoutube} >Click Here for Youtube Tutorial !!</a>
          </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MealDetails;
