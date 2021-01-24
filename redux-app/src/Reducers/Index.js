import {combineReducers} from 'redux'
import counterReducer from './counter'
import LoggedReducer from './isLogged'

const allreducers = combineReducers({
    counter : counterReducer,
    islogged : LoggedReducer
});

export default allreducers;