import "./App.css";
import React from "react";

// import { hot } from 'react-hot-loader/root';
import HotApp from "./HotApp";

// import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer";

import thunk from "redux-thunk";

// Redux store persistence
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import { PersistGate } from "redux-persist/integration/react";
import ErrorBoundary from "./components/ErrorBoundary";

import sagas from "./redux/sagas";
import createSagaMiddleware from "redux-saga";

let persistedReducer = rootReducer;

const persist = false;
const initialState = {};

if (persist) {
  const persistConfig = {
    key: "root",
    storage
  };

  persistedReducer = persistReducer(persistConfig, rootReducer);
}
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middleWare = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);

// then run the saga
sagaMiddleware.run(sagas);

let persistor = persistStore(store);

export default props => (
  <ErrorBoundary>
    <Provider store={store}>
      {persist ? (
        <PersistGate loading={null} persistor={persistor}>
          <HotApp isWeb={props.isWeb} />
        </PersistGate>
      ) : (
        <HotApp isWeb={props.isWeb} />
      )}
    </Provider>
  </ErrorBoundary>
);

// export default hot(App);
