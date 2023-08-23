export const getAllMuseesReducer =(state={musees:[]},action)=>{

    switch (action.type){
        case 'GET_MUSEE_REQUEST':return {
            loadingM:true
        }

        case 'GET_MUSEE_SUCCESS':return {
            musees:action.payload,
            loadingM:false
        }
        case 'GET_MUSEE_FAILED' : return {
            errorM : action.payload ,
            loadingM:false
        }
    default : return state  }
}


export const addMuseeReviewReducer=(state ={} , action)=>{

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


