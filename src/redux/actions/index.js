import {
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENTED_ITEM,
  DECREMENTED_ITEM
} from "../constants/actionType";

export const fetchProducts = () => dispatch => {
  fetch("https://api.myjson.com/bins/qhnfp")
    .then(response => response.json())
    .then(data => {
      return dispatch({
        type: FETCH_PRODUCTS,
        payload: data
      });
    });
};

export const addToCart = (items, product) => dispatch => {
  const cartItem = [...items];

  let productAlreadyInCart = false;
  cartItem.forEach(item => {
    if (item.id === product.id) {
      productAlreadyInCart = true;
      item.count++;
    }
  });

  if (!productAlreadyInCart) {
    cartItem.push({
      ...product,
      count: 1
    });
  }

  return dispatch({
    type: ADD_TO_CART,
    payload: {
      cartItem: cartItem
    }
  });
};

export const removeFromCart = (items, product) => dispatch => {
  const cartItem = items.slice().filter(it => it.id !== product.id);
  return dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      cartItem: cartItem
    }
  });
};

export const incrementedItem = (val, item) => (dispatch) => {
  return dispatch({
    type: INCREMENTED_ITEM,
    payload: val + 1
  })
}


export const decrementedItem = (val, item) => (dispatch) => {
  return dispatch({
    type: DECREMENTED_ITEM,
    payload: val -1
  })
}
