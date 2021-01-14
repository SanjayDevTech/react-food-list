import axios from "axios";
import { FETCH_FOODS_FAILURE, FETCH_FOODS_REQUEST, FETCH_FOODS_SUCCESS } from "./foodTypes";

export const fetchFoods = () => dispatch => {
    dispatch(fetchFoodsRequest());
    axios.get("https://json-placeholder-server.herokuapp.com/foods")
        .then(res => dispatch(fetchFoodsSuccess(res.data)))
        .catch(e => dispatch(fetchFoodsFailure(e)))
};

const fetchFoodsRequest = () => ({
    type: FETCH_FOODS_REQUEST,
});

export const fetchFoodsSuccess = foods => ({
    type: FETCH_FOODS_SUCCESS,
    payload: foods,
});

export const fetchFoodsFailure = error => ({
    type: FETCH_FOODS_FAILURE,
    payload: error,
});
