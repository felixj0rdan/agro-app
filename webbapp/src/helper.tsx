import axios from "axios"
import Papa from 'papaparse';

// const URL = "http://127.0.0.1:5005/"

// const URL = "https://agro-appbackend-production.up.railway.app/"

const URL = "https://agro-backend2-production.up.railway.app/";
export const Login = async (data : any) => {
    let res = await axios.post(`${URL}admin/login`, data)
    return res.data;
}

export const AddDailyPrice = async (data : any) => {
    let res = await axios.post(`${URL}dailyprice/add`, data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
    })
    return res.data;
}

export const EditDailyPrice = async (data : any, id: string) => {
    let res = await axios.put(`${URL}dailyprice/edit/${id}`, data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
    })
    return res.data;
}

export const GetDailyPrice = async () => {
    let response = await axios.get(`${URL}dailyprice/all`)
    return response.data.dailyprices;
}

export const GetData = async () => {
    let response = await axios.get(`${URL}data`)
    return parseCSV(response.data);
}

export const PostRating = async (data:any) => {
    let response = await axios.post(`${URL}rating`, data)
    return response.data;
}

export const GetRatings = async () => {
    let response = await axios.get(`${URL}rating`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
    })
    return response.data;
}

function parseCSV(file: any) {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        // header: true,
        dynamicTyping: true,
        complete: (results: Papa.ParseResult<any>) => {
            resolve(results.data.map(Object.values));
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  }