import { put, takeLatest } from 'redux-saga/effects';
import { fetchFoods, fetchFoodsSuccess, fetchFoodsFailure } from '../redux/food/foodActions';
import { FETCH_FOODS_REQUEST, FETCH_FOODS_REQUEST_ASYNC } from '../redux/food/foodTypes';

function* fetchFoodsSaga() {
    yield put({ type: FETCH_FOODS_REQUEST });
    try {
        const res = yield fetchFoods();
        yield put(fetchFoodsSuccess(res.data))
    } catch (e) {
        yield put(fetchFoodsFailure(e))
    }
}

function* rootSaga() {
    yield takeLatest(FETCH_FOODS_REQUEST_ASYNC, fetchFoodsSaga);
}

export default rootSaga;