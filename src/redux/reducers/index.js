import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { cartReducer } from './cartReducer';
import { IncrementReducer } from './IncrementReducer';


export const AllReducers = combineReducers({
    productReducer: productReducer,
    cartReducer: cartReducer,
    IncrementReducer: IncrementReducer
});