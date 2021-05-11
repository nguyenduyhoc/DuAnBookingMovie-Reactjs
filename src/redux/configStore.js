import {applyMiddleware,combineReducers,createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import { AdminReducer } from './Reducers/AdminReducer';
import { CinemaReducer } from './Reducers/CinemaReducer';
import { MovieReducer } from './Reducers/MovieReducer';
import { UsersReducer } from './Reducers/UsersReducer';


const rootReducer = combineReducers({
MovieReducer,
UsersReducer,
CinemaReducer,
AdminReducer,

})
export const store = createStore(rootReducer,applyMiddleware(reduxThunk))