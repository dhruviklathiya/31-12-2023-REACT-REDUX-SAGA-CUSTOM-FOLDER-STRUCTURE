import axios from "axios"

export const get_user = async(action) => {
    return axios.get("http://localhost:3001/posts").then((res)=>{
        console.log(res);
        const data = res.data
        const status = res.status
        return {
            data,
            status
        }
    }).catch((error)=>{
        console.log(error);
    })
}
