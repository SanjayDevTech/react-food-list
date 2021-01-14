import { FETCH_FOODS_FAILURE, FETCH_FOODS_REQUEST, FETCH_FOODS_SUCCESS } from "./foodTypes";

const initialState = {
    loading: false,
    foodItems: [],
    error: '',
};

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FOODS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case FETCH_FOODS_SUCCESS:
            return {
                loading: false,
                foodItems: action.payload,
                error: '',
            };

        case FETCH_FOODS_FAILURE:
            return {
                loading: false,
                foodItems: [],
                error: action.payload,
            };

        default:
            return state;
    }
};

export default foodReducer;