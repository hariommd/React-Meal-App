import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  var [category, setCategory] = useState();
  useEffect(() => {
    var apiurl = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
    axios({
      method: "get",
      url: apiurl,
    }).then(
      (response) => {
        console.log(response.data);
        setCategory(response.data.meals);
      },
      (error) => {}
    );
  }, []);
  console.log(category)
  return (
    <div className={"bg-secondary p-4"}>
      <div className={"container-fluid"}>
        <h1 className={"text-warning text-center"}>Categories of Meals !!</h1>
        { category && category!==undefined? (
          <div className={"py-4 home-content "}>
          { category.map((item,index)=>{
            return <button className={"btn btn-outline-info btn-lg"}>{item.strArea}</button>
          }) }
          </div>):<h2>Some Error Occured while fetching categories !!</h2>}
      </div>
    </div>
  );
}

export default Home;
