import { API } from "../../../api/api";
import { loginAC } from "../actions";
import { LOGIN } from "../type";

const initState = {
    userId : localStorage.getItem('userId') ? JSON.parse(localStorage.getItem('userId')) : null,
    session : false
}

const authReducer = (state = initState,action) => {
    switch(action.type){
        case LOGIN:
            localStorage.setItem("userId", JSON.stringify(action.payload));
            return{
                ...state,
                userId : action.payload,
                session : true
            }
        default : 
        return state    
    }
}

export const loginTC = (email,password) => {
    return (dispatch) => {
        API.logIn(email,password)
        .then((res) => dispatch(loginAC(res.data.data.userId)))
    }
}

export default authReducer