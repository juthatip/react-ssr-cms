import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './reducers';
import saga from './saga';

const getComposer = () => {
  const reduxDevToolsCompose =
    (process.env.NODE_ENV === 'development' &&
      process.browser &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  return reduxDevToolsCompose;
};

const configureStore = initialState => {
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [sagaMiddleware];
  if (process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
  }

  const middlewareEnhancer = applyMiddleware(...middleWares);

  const composer = getComposer();
  const enhancer = composer(middlewareEnhancer);

  const store = createStore(rootReducer, initialState, enhancer);

  store.sagaTask = sagaMiddleware.run(saga);

  return store;
};

export default configureStore;
