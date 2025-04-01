import { API } from "../../../api/api"
import { profileAC } from "../actions"
import { GET_PROFILE } from "../type"

const initState ={
   profile : {}
}

const profileReducer = (state = initState,action) =>{
    switch(action.type){
        case GET_PROFILE:
            return{
                ...state,
                profile: action.payload
            }
            default:
                return state
    }
}

export const profileTC = (userId) => {
    return (dispatch) => {
        API.getProfile(userId)
        .then((res) => dispatch(profileAC(res.data)))
    }
}

export default profileReducer