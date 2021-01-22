import { applyMiddleware, combineReducers, createStore } from 'redux';
// import thunk from 'redux-thunk';
import cartReducer from './cart/cartReducer';
import foodReducer from './food/foodReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ food: foodReducer, cart: cartReducer });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export const foodSelector = state => state.food.foodItems;
export const foodLoadingSelector = state => state.food.loading;
export const cartSelector = state => state.cart.cartItems;

export default store;
