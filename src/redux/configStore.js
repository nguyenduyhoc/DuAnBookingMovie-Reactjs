import {applyMiddleware,combineReducers,createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import { AdminReducer } from './Reducers/AdminReducer';
import { CalendarReducer } from './Reducers/CalendarReducer';
import { CinemaReducer } from './Reducers/CinemaReducer';
import { MovieReducer } from './Reducers/MovieReducer';
import { TicketReducer } from './Reducers/TicketReducer';
import { UsersReducer } from './Reducers/UsersReducer';


const rootReducer = combineReducers({
MovieReducer,
UsersReducer,
CinemaReducer,
AdminReducer,
CalendarReducer,
TicketReducer
})
export const store = createStore(rootReducer,applyMiddleware(reduxThunk))