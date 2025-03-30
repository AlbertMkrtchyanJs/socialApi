import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import getUserReducer from "./reducers/getUserReducer/getUserReducer";
import authReducer from "./reducers/authreducer/authReducer";


const rootReducer = combineReducers({
    getUserState: getUserReducer,
    authState : authReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store