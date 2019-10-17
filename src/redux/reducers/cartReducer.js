const initialState = {
  items: []
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, items: action.payload.cartItem };
    case "REMOVE_FROM_CART":
      return { ...state, items: action.payload.cartItem };
    default:
      return state;
  }
};
