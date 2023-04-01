import axios from "axios"
import Papa from 'papaparse';

// const URL = "http://127.0.0.1:5005/"

const URL = "https://46a8-115-96-212-47.in.ngrok.io"

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

export const GetDailyPrice = async () => {
    let response = await axios.get(`${URL}all-dailyprice`)
    return response.data.dailyprices;
}

export const GetData = async () => {
    let response = await axios.get(`${URL}data`)
    return parseCSV(response.data);
    // const parsedData = Papa.parse(response.data, { header: true }).data;
    // return parsedData;
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