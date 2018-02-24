import React from 'react';
import { AppRegistry } from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import App from './src/App';
import allReducers from './src/reducers';


const store = createStore(allReducers, applyMiddleware(thunk));

const MainApp = () =>(<Provider store= {store}><App /></Provider>);

AppRegistry.registerComponent('almundoapp', () => MainApp);
