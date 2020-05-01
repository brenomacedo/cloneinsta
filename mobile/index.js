import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import axios from 'axios'
axios.defaults.baseURL = 'https://cloneinstagram-afa2f.firebaseio.com/'

import React from 'react'
import { Provider } from 'react-redux'
import storeConfig from './src/store/storeConfig'
const store = storeConfig()
const Redux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
