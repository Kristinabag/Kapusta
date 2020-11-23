import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import initState from './initState';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer, initState(), composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

store.subscribe(() => {
  localStorage.setItem('user', JSON.stringify(store.getState().user));
});

sagaMiddleware.run(rootSaga);

export default store;
