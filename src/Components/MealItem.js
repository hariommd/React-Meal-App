import { Link } from "react-router-dom";

function MealItem(props) {

  return (
    <div style={{ width: "16rem", margin: "1rem" }}>
    <Link to={"/meal/" + props.data.idMeal}>
      <div class="card mealItem" >
        <img
          src={props.data.strMealThumb} className="card-img-top" alt="..." />
        <div class="card-body">
         <div> <h5 class="card-title text-center">{props.data.strMeal}</h5></div>
        </div>
      </div>
    </Link>
    </div>
  );
}

export default MealItem;