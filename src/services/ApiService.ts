import axios from "axios";

export const ApiService = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers:{
        'content-type': 'aplication/json'
    }
})