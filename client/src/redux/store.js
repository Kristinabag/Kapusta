import {applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initState from './initState';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { watcherWeatherLoad } from './sagas/weather/weather';

const weatherSagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(weatherSagaMiddleware)));

weatherSagaMiddleware.run(watcherWeatherLoad);

export default store;
