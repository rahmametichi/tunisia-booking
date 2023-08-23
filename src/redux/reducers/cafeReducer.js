export const getAllCafesReducer = (state = { cafes: [] }, action) => {
  switch (action.type) {
    case "GET_CAFE_REQUEST":
      return {
        loadingC: true,
      };

    case "GET_CAFE_SUCCESS":
      return {
        cafes: action.payload,
        loadingC: false,
      };
    case "GET_CAFE_FAILED":
      return {
        error: action.payload,
        loadingC: false,
      };
    default:
      return state;
  }
};


export const addCafeReviewReducer=(state ={} , action)=>{

  switch (action.type) {
      case 'ADD_PRODUCT_REVIEW_REQUEST': return {
          loading: true
      }

      case 'ADD_PRODUCT_REVIEW_SUCCESS': return {
          loading: false,
          success: true
      }
      case 'ADD_PRODUCT_REVIEW_FAILED': return {
          loading: false,
          error: true
      }

      default: return state
  }

}
