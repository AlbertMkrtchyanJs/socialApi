import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import getUserReducer from "./reducers/getUserReducer/getUserReducer";


const rootReducer = combineReducers({
    getUserState: getUserReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store