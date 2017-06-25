import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import appReducer from './Reducers/appReducer'
import {router} from "./router";

 const store = createStore(
    appReducer
 )

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>
    , document.getElementById('root'));

