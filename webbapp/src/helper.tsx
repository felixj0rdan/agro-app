import axios from "axios"

const URL = "http://127.0.0.1:5005/"

// const URL = "https://fc40-2409-40f4-1026-e09a-1912-b3ce-d6b4-12c.in.ngrok.io/"

export const Login = async (data : any) => {
    let res = await axios.post(`${URL}admin/login`, data)
    return res.data;
}

export const AddDailyPrice = async (data : any) => {
    let res = await axios.post(`${URL}add-dailyprice`, data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
    })
    return res.data;
}