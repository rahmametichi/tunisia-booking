import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import { cartReducer } from "../redux/reducers/cartReducer";
import { addMuseeReviewReducer } from "../redux/reducers/museeReducer";
import {
  placeOrderReducer,
  getOrdersByUserIdReducer,
  getAllOrdersReducer,
} from "../redux/reducers/orderReducer";
import { getAllMuseesReducer } from "../redux/reducers/museeReducer";
import { getAllHotelsReducer } from "./reducers/hotelReducer";
import {
  getAllCafesReducer,
  addCafeReviewReducer,
} from "./reducers/cafeReducer";
const finalReducer = combineReducers({
  getAllMuseesReducer,
  addMuseeReviewReducer,
  cartReducer,
  placeOrderReducer,
  getAllOrdersReducer,
  getAllHotelsReducer,
  getAllCafesReducer,
  addCafeReviewReducer,
  getOrdersByUserIdReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartReducer: { cartItems: cartItems },
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
