export const getAllHotelsReducer = (state = { hotels: [] }, action) => {
  switch (action.type) {
    case "GET_HOTEL_REQUEST":
      return {
        loadingH: true,
      };

    case "GET_HOTEL_SUCCESS":
      return {
        hotels: action.payload,
        loadingH: false,
      };
    case "GET_HOTEL_FAILED":
      return {
        errorH: action.payload,
        loadingH: false,
      };
    default:
      return state;
  }
}; 



export const addHotelReviewReducer=(state ={} , action)=>{

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
};
