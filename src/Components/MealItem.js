import { Link } from "react-router-dom";

function MealItem(props) {

  return (
    <Link to={"/meal/" + props.data.idMeal}><div class="card mealItem" style={{ width: "13rem", margin: "1rem" }}>
        <img
          src={props.data.strMealThumb} className="card-img-top" alt="..." />
        <div class="card-body">
        <h5 class="card-title text-center">{props.data.strMeal}</h5>
      </div>
    </div>
    </Link>
  );
}

export default MealItem;