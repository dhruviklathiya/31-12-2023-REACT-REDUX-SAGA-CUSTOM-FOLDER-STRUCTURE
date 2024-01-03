import axios from "axios";

export const get_admin = () => {
    return axios.get("http://localhost:3001/posts").then((res)=>{
        return {
            data: res.data,
            status: res.status
        }
    }).catch((error)=>{
        console.log(error);
    })
}