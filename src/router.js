import React from "react";
import App from './App';
import Welcome from "./component/welcome";
import Login from "./component/Login"
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

const router = (

    <Router history={history}>
        <switch>
        <Route path="/" component={Login}/>
        <Route path="/success" component={Welcome}/>
        </switch>
    </Router>
);

export {router};

