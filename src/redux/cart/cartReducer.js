import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from './cartTypes';

const initialState = {
    cartItems: [{id:'1', count: 0}],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            let finalCartItems = state.cartItems.filter((cart) => cart.id === action.payload);
            if (finalCartItems.length === 0) {
              finalCartItems = state.cartItems.concat({id: action.payload, count: 0});
            } else {
              finalCartItems = [...state.cartItems];
            }
            let result = {
                ...state,
                cartItems: finalCartItems.map(cart => {
                    if (cart.id === action.payload) {
                        return { ...cart, count: cart.count + 1 };
                    }
                    return {...cart};
                })
            };
            return result;

        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems
                  .filter(cart => cart.count > 0)
                  .map(cart => {
                    if (cart.id === action.payload) {
                        return { ...cart, count: cart.count - 1 };
                    }
                    return cart;
                })
            };

        default:
            return state;
    }
};

export default cartReducer;
