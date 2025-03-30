import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import getUserReducer from "./reducers/getUserReducer/getUserReducer";
import authReducer from "./reducers/authreducer/authReducer";
import profileReducer from "./reducers/profileReducer/profileReducer";


const rootReducer = combineReducers({
    getUserState: getUserReducer,
    authState : authReducer,
    profileState : profileReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store