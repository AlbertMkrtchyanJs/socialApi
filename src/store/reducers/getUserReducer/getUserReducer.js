import { API } from "../../../api/api"
import { getUserAC } from "./actions"
import { GET_USERS } from "./type"

const initState ={
    users: []
}

const getUserReducer = (state = initState,action) =>{
    switch(action.type){
        case GET_USERS:
            return{
                ...state,
                users: action.payload
            }
            default:
                return state
    }
}

export const getUserTC = (page = 1) => {
    return (dispatch) => {
        API.getUsers(page)
        .then((res) => dispatch(getUserAC(res.data.items)))
    }
}

export default getUserReducer