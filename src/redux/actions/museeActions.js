import axios from "axios";

export const getAllMusees = () => async (dispatch) => {
  axios
    .get("http://localhost:5000/api/musees/museesList")
    .then((res) => {
      dispatch({ type: "GET_MUSEE_SUCCESS", payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: "GET_MUSEE_FAILED", payload: err });
    });
};

export const addMuseeReview = (review, museeid,currentUser) => (dispatch, getState) => {
  dispatch({ type: "ADD_MUSEE_REVIEW_REQUEST" });

  axios
    .post("/api/musees/addreview", { review, museeid,currentUser })
    .then((res) => {
      console.log(res);
      dispatch({ type: "ADD_PRODUCT_REVIEW_SUCCESS" });

      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: "ADD_PRODUCT_REVIEW_FAILED" });
    });
};

// export const addProductReview = (review, museeid) => (dispatch, getState) => {
//   dispatch({ type: "ADD_PRODUCT_REVIEW_REQUEST" });

//   axios
//     .post("http://localhost:5000/api/musajouterreview", { review, museeid })
//     .then((res) => {
//       console.log(res);
//       dispatch({ type: "ADD_MUSEE_REVIEW_SUCCESS" });

//       window.location.reload();
//     })
//     .catch((err) => {
//       dispatch({ type: "ADD_MUSEE_REVIEW_FAILED" });
//     });
// };

