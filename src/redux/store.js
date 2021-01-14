import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './cart/cartReducer';
import foodReducer from './food/foodReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ food: foodReducer, cart: cartReducer });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const foodSelector = state => state.food.foodItems;
export const cartSelector = state => state.cart.cartItems;

export default store;
