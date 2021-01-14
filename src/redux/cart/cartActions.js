import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from './cartTypes';

export const addItemToCart = id => ({
    type: ADD_ITEM_TO_CART,
    payload: id
});

export const removeItemFromCart = id => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: id
});