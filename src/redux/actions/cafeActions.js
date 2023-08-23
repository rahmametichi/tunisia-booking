import axios from "axios";

export const getAllCafes = () => async (dispatch) => {
  axios
    .get("http://localhost:5000/api/cafes/cafesList")
    .then((res) => {
      dispatch({ type: "GET_CAFE_SUCCESS", payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: "GET_CAFE_FAILED", payload: err });
    });
};

export const addCafeReviewc = (review, cafeid,currentUser) => (dispatch, getState) => {
  dispatch({ type: "ADD_MUSEE_REVIEW_REQUEST" });

  axios
    .post("/api/cafes/addreviewc", { review, cafeid,currentUser })
    .then((res) => {
      console.log(res);
      dispatch({ type: "ADD_PRODUCT_REVIEW_SUCCESS" });

      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: "ADD_PRODUCT_REVIEW_FAILED" });
    });
};
