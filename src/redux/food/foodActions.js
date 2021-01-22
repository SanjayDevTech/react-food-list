import axios from "axios";
import { FETCH_FOODS_FAILURE, FETCH_FOODS_REQUEST, FETCH_FOODS_SUCCESS } from "./foodTypes";

export const fetchFoods = () => axios.get("https://json-placeholder-server.herokuapp.com/foods");

export const fetchFoodsRequest = () => ({
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
