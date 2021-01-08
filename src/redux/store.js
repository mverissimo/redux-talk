import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import createSagaMonitor from "@clarketm/saga-monitor";

import createRootReducer from "./reducers";
import rootSaga from "./sagas";

export const history = createBrowserHistory();

function configureStoreDev(preloadedState) {
  const sagaMiddleware = createSagaMiddleware({
    sagaMonitor: createSagaMonitor({
      level: "log",
      actionDispatch: true,
    }),
  });

  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = [sagaMiddleware];

  const store = createStore(
    createRootReducer(),
    preloadedState,
    composeEnhancer(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

const configureStore = configureStoreDev;

export default configureStore;
