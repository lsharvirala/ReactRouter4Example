/**
 * Created by Mittapalli on 6/23/2017.
 */
import {combineReducers} from 'redux';
import LoginReducer from './loginReducer';

const allReducer = combineReducers(
    {
        loginReducer:LoginReducer
    }

);

export default allReducer;