import axios from "axios"

const URL = "http://127.0.0.1:5005/"

export const Login = async (data : any) => {
    let res = await axios.post(`${URL}admin/login`, data)
    return res.data;
}