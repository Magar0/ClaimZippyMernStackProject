import { call } from 'redux-saga/effects';
import { tariffApi } from '../slices/tariffAPI';

export function* fetchTariffSaga() {
    try {
        yield call(tariffApi.endpoints.fetchTariff.initiate)
    } catch (err) {
        console.error("Error fetching tariff", err);
    }
}

export function* postTariffSaga(action) {
    const { body } = action.payload;
    try {
        yield call(tariffApi.endpoints.postTariff.initiate, body)
    } catch (err) {
        console.error("Error creating tariff", err);
    }
}

export function* putTariffSaga(action) {
    const { id, body } = action.payload;
    console.log("id", id);
    try {
        yield call(tariffApi.endpoints.putTariff.initiate, id, body);
    } catch (err) {
        console.error("Error updating tariff", err);
    }
}

export function* deleteTariffSaga(action) {
    const { id } = action.payload;
    try {
        yield call(tariffApi.endpoints.deleteTariff.initiate, id)
    } catch (err) {
        console.error("Error deleting tariff with id: ", id, err);
    }
}

