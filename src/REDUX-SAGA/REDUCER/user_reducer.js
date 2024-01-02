const { GET_USER_PROCESS, GET_USER_SUCCESS, GET_USER_ERROR } = require("../ACTIONS/user");

const initialState = {
    user_data: [],
    isLoading: false,
    isError: null,
  };


const user_reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_PROCESS:{
            return{
                ...state,
                isLoading:true,
            }
        }
        case GET_USER_SUCCESS:{
            const data = action.data
            return{
                user_data: data
            }
        }
        case GET_USER_ERROR:{
            const data = action.data
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

module.exports = {
    user_reducer
}