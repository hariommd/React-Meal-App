import { useState, useEffect } from "react";
import axios from "axios";

function Home(props) {
  var [category, setCategory] = useState();
  useEffect(() => {
    var apiurl = "https://www.themealdb.com/api/json/v1/1/categories.php";
    axios({
      method: "get",
      url: apiurl,
    }).then(
      (response) => {
        console.log(response.data);
        setCategory(response.data.categories);
      },
      (error) => {}
    );
  }, []);
  var categoryBtnClick = (catName) =>{
    var url = "/category?q=" + catName
    props.history.push(url)
  }
  return (
    <div className={"bg-secondary p-4"}>
      <div className={"container-fluid"}>
        <h1 className={"text-warning text-center"}>Categories of Meals !!</h1>
        {category && category !== undefined ? (
          <div className={"py-4 home-content "}>
            {category.map((item, index) => {
              return (
                <div className={"categoryItem"}>
                  <div className={"imgWrapper"}>
                    <img
                      src={item.strCategoryThumb}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <p>{item.strCategoryDescription}</p>
                  <button className={"btn btn-outline-info btn-lg"} onClick={()=>{categoryBtnClick(item.strCategory)}}>
                    {item.strCategory}
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <h2>Some Error Occured while fetching categories !!</h2>
        )}
      </div>
    </div>
  );
}

export default Home;
