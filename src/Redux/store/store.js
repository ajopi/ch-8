import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import  combineReducers  from "../Reducers/index";

const midleWareThunk = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(combineReducers, midleWareThunk)

export default store