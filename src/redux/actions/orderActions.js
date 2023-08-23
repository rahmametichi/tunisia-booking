import axios from "axios";
import jwt_decode from "jwt-decode";

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  const cartItems = getState().cartReducer.cartItems;
  var decoded = jwt_decode(localStorage.getItem("JWT"));
  localStorage.removeItem("cartItems");
  dispatch({
    type: "PLACE_ORDER_REQUEST",
  });

  try {
    const response = await axios.post(
      "http://localhost:5000/api/orders/placeorder",
      { token, subtotal, cartItems, decoded },
      { headers: { "Access-Control-Allow-Origin": "*" } }
    );
    dispatch({
      type: "PLACE_ORDER_SUCCESS",
      payload: response.data.data,
    });
    alert("Votre ticket est reservée avec succès");
  } catch (error) {
    dispatch({
      type: "PLACE_ORDER_FAILED",
    });
  }
};

export const getAllOrders = () => (dispatch, getState) => {
  dispatch({ type: "GET_ALLORDERS_REQUEST" });
  axios
    .get("http://localhost:5000/api/orders/getallorders")
    .then((res) => {
      dispatch({ type: "GET_ALLORDERS_SUCCESS", payload: res.data });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: "GET_ALLORDERS_FAILED", payload: err });
    });
};

export const getOrdersByUserId = () => (dispatch, getState) => {
  var decoded = jwt_decode(localStorage.getItem("JWT"));

  dispatch({ type: "GET_ORDERSBYUSERID_REQUEST" });
  axios
    .post("/api/orders/getordersbyuserid", { userid: decoded.id })
    .then((res) => {
      dispatch({ type: "GET_ORDERSBYUSERID_SUCCESS", payload: res.data });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: "GET_ORDERSBYUSERID_FAILED", payload: err });
    });
};
