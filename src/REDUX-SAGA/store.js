import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";

// Import Combination of all Reducer

// Import All Saga code
import { rootSaga } from "./ROOTSAGA";
import rootReducer from "./ROOTREDUCER";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
        rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;