import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createHashHistory from 'history/createHashHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';

export const history = createHashHistory();
const routeMiddleware = routerMiddleware(history);

export default (initialState = {}, initialReducer = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware, routeMiddleware];

  const enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const store = createStore(
    combineReducers({ ...initialReducer, router: routerReducer }),
    initialState,
    compose(applyMiddleware(...middlewares), ...enhancers)
  );

  sagaMiddleware.run(rootSaga);

  store.asyncReducers = { ...initialReducer };

  return store;
};
