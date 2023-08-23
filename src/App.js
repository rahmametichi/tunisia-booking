import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import LogOrsign from "./components/Login-Signup/LogOrsign";
import Signup from "./components/Login-Signup/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Museepage from "./components/Museepage/Museepage";
import MuseeDetails from "./components/MuseeDetails/MuseeDetails";
import Hotelpage from "./components/Hotelpage/Hotelpage";
import HotelDetails from "./components/HotelDetails/HotelDetails";
import Cafepage from "./components/Cafepage/Cafepage";
import CafeDetails from "./components/CafeDetails/CafeDetails";
import Accueil from "./components/Accueil/Accueil";
import Cart from "./components/Cart/Cart";
import OrderList from "./components/OrderList/OrderList";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/login">
            <LogOrsign />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/accueil">
            <Accueil />
          </Route>
          <Route path="/register">
            <Signup />
          </Route>
          <Route path="/ticket">
            <OrderList />
          </Route>
          <Route path="/Home">
            <Navbar />
          </Route>
          <Route path="/museesdetails/:id">
            <MuseeDetails />
          </Route>
          <Route exact path="/museespage">
            <Museepage />
          </Route>

          <Route exact path="/hotelspage">
            <Hotelpage />
          </Route>
          <Route path="/hotelsdetails/:id">
            <HotelDetails />
          </Route>

          <Route exact path="/cafepage">
            <Cafepage />
          </Route>
          <Route path="/cafedetails/:id">
            <CafeDetails />
          </Route>

          {/* <Route exact path="/volspage">
            <Volpage voldata={voldata} />
          </Route>
          <Route exact path="/volsdetails/:id">
            <VolDetails voldata={voldata} />
          </Route> */}

          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
