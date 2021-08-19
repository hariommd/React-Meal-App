import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

function Navbar(props) {
  console.log(props);
  var [searchText, setSearchText] = useState(undefined);
  function getSearchText(event) {
    setSearchText(event.target.value);
  }
  function searchMeal(e) {
    console.log(props);
    console.log(searchText);
    if (searchText) {
      var url = "/search?q=" + searchText;
      props.history.push(url);
    }
    e.preventDefault();
  }
  return (
    <nav class="navbar navbar-expand-sm bg-secondary navbar-light py-3 border-bottom">
      <div class="container-fluid">
        <Link to="/">
          <a class="navbar-brand">
            <span>HD's Meal App</span>
          </a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <Link to="/">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
            </Link>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                onChange={getSearchText}
                placeholder="Search for Meal"
                aria-label="Search"
              />
              <button class="btn btn-info" type="button" onClick={searchMeal}>
                Search
              </button>
            </form>
            <Link to="/contact"><li class="nav-item">
              <a class="nav-link">
                Contact us
              </a>
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
