import { GET_ADMIN_ERROR, GET_ADMIN_PROCESS, GET_ADMIN_SUCCESS } from "../ACTIONS/admin_action";

const initialState = {
    admin:[],
    isloading:false,
    isError:null,
}

export const admin_reducer = (state = initialState, action) => {
    const data = action.data
    switch (action.type) {
        case GET_ADMIN_PROCESS:
            return{
                ...state
            }
        case GET_ADMIN_SUCCESS:
            return{
                ...state,
                admin: data,
            }
        case GET_ADMIN_ERROR:
            return{
                ...state
            }
        default:
            return{
                admin:[{title:"Try",author:"Again"}]
            }
            break;
    }
}