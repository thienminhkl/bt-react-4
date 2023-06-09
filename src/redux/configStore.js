import { combineReducers, createStore } from "redux";
import { MovieTicketReducer } from "./MovieTicketReducer";

const rootReducer = combineReducers({
    MovieTicketReducer: MovieTicketReducer,

})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
