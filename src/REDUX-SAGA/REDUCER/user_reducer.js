const { GET_USER_PROCESS, GET_USER_SUCCESS, GET_USER_ERROR, POST_USER_PROCESS, POST_USER_SUCCESS, POST_USER_ERROR, DELETE_USER_SUCCESS, DELETE_USER_ERROR, DELETE_USER_PROCESS } = require("../ACTIONS/user_action");

const initialState = {
    user_data: [],
    isLoading: false,
    isError: null,
  };


export const user_reducer = (state = initialState, action) => {
    const data = action.data
    switch (action.type) {
        case GET_USER_PROCESS:{
            return{
                ...state,
                isLoading:true,
            }
        }
        case GET_USER_SUCCESS:{
            // const data = action.data
            return{
                ...state,
                user_data: data
            }
        }
        case GET_USER_ERROR:{
            return{
                ...state,
                isError:true,
                isLoading:false,
                data
            }
        }
        case POST_USER_PROCESS:{
            return{
                ...state,
                isLoading:true,
            }
        }
        case POST_USER_SUCCESS:{
            // const data = action.data
            return{
                ...state,
                user_data: state.user_data.concat(data)
            }
        }
        case POST_USER_ERROR:{
            return{
                ...state,
                isError:true,
                isLoading:false,
                data
            }
        }
        case DELETE_USER_PROCESS:{
            return{
                ...state,
                isLoading:true,
            }
        }
        case DELETE_USER_SUCCESS:{
            const index = action.index
            state.user_data.splice(index,1)
            return{
                ...state,
            }
        }
        case DELETE_USER_ERROR:{
            return{
                ...state,
                isError:true,
                isLoading:false,
                data
            }
        }
        default:
            return({
                name:"Hello"
            })
            break;
    }
}