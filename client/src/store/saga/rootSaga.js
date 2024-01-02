import { fetchTariffSaga, putTariffSaga, postTariffSaga, deleteTariffSaga } from "./tariffSaga";
import { fetchDocumentSaga, postDocumentSaga, putDocumentSaga, deleteDocumentSaga } from "./documentSaga";
import { takeLatest } from 'redux-saga/effects';

export function* rootSaga() {
    //tariff Api
    yield takeLatest('tariffApi/fetchTariff/initiate', fetchTariffSaga);
    yield takeLatest('tariffApi/putTariff/initiate', putTariffSaga);
    yield takeLatest('tariffApi/postTariff/initiate', postTariffSaga);
    yield takeLatest('tariffApi/deleteTariff/initiate', deleteTariffSaga);

    //document Api
    yield takeLatest('documentApi/fetchDocumnet/initiate', fetchDocumentSaga);
    yield takeLatest('documentApi/postDocumnet/initiate', postDocumentSaga);
    yield takeLatest('documentApi/putDocumnet/initiate', putDocumentSaga);
    yield takeLatest('documentApi/deleteDocumnet/initiate', deleteDocumentSaga);

}
