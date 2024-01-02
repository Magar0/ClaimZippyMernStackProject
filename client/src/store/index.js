import { configureStore } from "@reduxjs/toolkit";
import { rootSaga } from "./saga/rootSaga";
import createSagaMiddleware from 'redux-saga'
import taskSlices from "./slices/taskSlices";
import { tariffApi } from "./slices/tariffAPI";
import { documentApi } from "./slices/documentApi";



const URL = 'Http://localhost:3000'
const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
    reducer: {
        [tariffApi.reducerPath]: tariffApi.reducer,
        [documentApi.reducerPath]: documentApi.reducer,
        task: taskSlices,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        sagaMiddleWare,
        tariffApi.middleware,
        documentApi.middleware
    )
})

sagaMiddleWare.run(rootSaga)
export default store;