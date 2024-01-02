import { call } from 'redux-saga/effects';
import { documentApi } from '../slices/documentApi';

export function* fetchDocumentSaga() {
    try {
        yield call(documentApi.endpoints.fetchTariff.initiate)
    } catch (err) {
        console.error("Error fetchingdocument", err);
    }
}

export function* postDocumentSaga(action) {
    const { body } = action.payload;
    try {
        yield call(documentApi.endpoints.postTariff.initiate, body)
    } catch (err) {
        console.error("Error creatingdocument", err);
    }
}

export function* putDocumentSaga(action) {
    const { id, body } = action.payload;
    try {
        yield call(documentApi.endpoints.putTariff.initiate, id, body)
    } catch (err) {
        console.error("Error updatingdocument", err);
    }
}

export function* deleteDocumentSaga(action) {
    const { id } = action.payload;
    try {
        yield call(documentApi.endpoints.deleteTariff.initiate, id)
    } catch (err) {
        console.error("Error deletingdocument with id: ", id, err);
    }
}