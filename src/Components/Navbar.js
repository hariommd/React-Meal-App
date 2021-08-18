import { useState, useEffect } from "react"
import { withRouter } from "react-router-dom"

function Navbar(props){
  console.log(props)
    var[searchText,setSearchText]=useState(undefined)
    function getSearchText(event){
      setSearchText(event.target.value)
    }
    function searchMeal(e){
      
      console.log(props)
      console.log(searchText)
      if (searchText) {
        var url = "/search?q=" + searchText
        props.history.push(url)
      }
      e.preventDefault()
    }
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">HD's Meal App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <form class="d-flex">
        <input class="form-control me-2" type="search" onChange={getSearchText} placeholder="Search for Meal" aria-label="Search"/>
        <button class="btn btn-outline-primary" type="button" onClick={searchMeal}>Search</button>
      </form>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact us</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    )
}

export default withRouter(Navbar)