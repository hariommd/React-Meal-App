import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Search from './Components/Search';
import MealDetails from './Components/MealDetails';
import Category from './Components/Category';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar name="Hariom"></Navbar>
      <Route exact path="/"   component={Home}></Route>
      <Route exact path="/search" component={Search}></Route>
      <Route exact path="/meal/:mealid" component={MealDetails}></Route>
      <Route exact path="/category" component={Category}></Route>
      <Route exact path="/contact" component={Contact}></Route>
     </BrowserRouter>
    </div>
  );
}

export default App;
