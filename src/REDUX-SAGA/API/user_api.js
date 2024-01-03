import axios from "axios"

export const get_user = async(action) => {
    return axios.get("http://localhost:3001/posts").then((res)=>{
        return {
            data: res.data,
            status: res.status
        }
    }).catch((error)=>{
        console.log(error);
    })
}

export const post_user = async(action) => {
    return axios.post("http://localhost:3001/posts",action.payload).then((res)=>{
        return {
            data: res.data,
            status: res.status
        }
    }).catch((error)=>{
        console.log(error);
    })
}

export const delete_user = async(action) => {
    return axios.delete(`http://localhost:3001/posts/${action.payload.id}`).then((res)=>{
        const id = action.payload.id
        const status = res.status
        return{
            id,
            status
        }
    }).catch((error)=>{
        console.log(error);
    })
}

export const update_user = async(action) => {
    return axios.put(`http://localhost:3001/posts/${action.payload.id}`,action.payload).then((res)=>{
        const data = res.data
        const status = res.status
        const index = action.index
        return{
            // index,
            data,
            status,
            index
        }
    }).catch((error)=>{
        console.log(error);
    })
}