import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import createSagaMonitor from "@clarketm/saga-monitor";

import createRootReducer from "./reducers";
import rootSaga from "./sagas";

export let history = createBrowserHistory();

function configureStoreDev(preloadedState) {
  let sagaMiddleware = createSagaMiddleware({
    sagaMonitor: createSagaMonitor({
      level: "log",
      actionDispatch: true,
    }),
  });

  let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  let middlewares = [sagaMiddleware];

  let store = createStore(
    createRootReducer(),
    preloadedState,
    composeEnhancer(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

let configureStore = configureStoreDev;

export default configureStore;
