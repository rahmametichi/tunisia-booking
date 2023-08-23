export const addToCart = (item) => (dispatch, getState) => {

  var cartItem = {
    nom: item.nom,
    _id: item._id,
    image1: item.image1,
    prix: item.prix,
  };
      
  dispatch({ type: "ADD_TO_CART", payload: cartItem });

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const deleteFromCart=(item)=> (dispatch , getState)=> {
  dispatch({ type : 'DELETE_FROM_CART' , payload:item})
  localStorage.setItem('cartItems' , JSON.stringify(getState().cartReducer.cartItems))
}
