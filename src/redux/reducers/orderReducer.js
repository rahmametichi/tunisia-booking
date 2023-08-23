
const initialState = {}

export const placeOrderReducer = (state = initialState, action) => {

    switch (action.type) {

case 'PLACE_ORDER_REQUEST' :
    return {
        loading : true
    }
case 'PLACE_ORDER_SUCCESS' :
    return {
    loading : false,
    success:true
    }
case 'PLACE_ORDER_FAILED' :
    return {    
        loading : false,
        error : action.payload
    }

default : return state

}


}

export const getAllOrdersReducer=(state={orders : []} , action)=>{

    switch(action.type)
    {
        case 'GET_ALLORDERS_REQUEST' : return{
            ...state,
            loading: true
        }
        case 'GET_ALLORDERS_SUCCESS' : return{
            ...state,
            loading: false,
            orders : action.payload
        }
        case 'GET_ALLORDERS_FAILED' : return{
            ...state,
            loading: false,
            error: true
        }

        default: return{state}
    }
}
export const getOrdersByUserIdReducer=(state={} , action)=>{

    switch(action.type)
    {
        case 'GET_ORDERSBYUSERID_REQUEST' : return{
            ...state,
            loading: true
        }
        case 'GET_ORDERSBYUSERID_SUCCESS' : return{
            ...state,
            loading: false,
            orders : action.payload
        }
        case 'GET_ORDERSBYUSERID_FAILED' : return{
            ...state,
            loading: false,
            error: true
        }

        default: return{state}
    }
}