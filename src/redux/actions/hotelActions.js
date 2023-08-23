import axios from "axios";

export const getAllHotels = () => async (dispatch) => {
  axios
    .get("http://localhost:5000/api/hotels/hotelsList")
    .then((res) => {
      dispatch({ type: "GET_HOTEL_SUCCESS", payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: "GET_HOTEL_FAILED", payload: err });
    });
};

export const addHotelReviewh = (review, hotelid,currentUser) => (dispatch, getState) => {
  dispatch({ type: "ADD_MUSEE_REVIEW_REQUEST" });

  axios
    .post("/api/hotels/addreviewh", { review, hotelid,currentUser })
    .then((res) => {
      console.log(res);
      dispatch({ type: "ADD_PRODUCT_REVIEW_SUCCESS" });

      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: "ADD_PRODUCT_REVIEW_FAILED" });
    });
};
