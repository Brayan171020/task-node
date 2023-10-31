import axios from 'axios';
//import { API_URL } from "../config";

const instance = axios.create({
    baseURL: 'https://task-node-production.up.railway.app/api',
    withCredentials: true
})

export default instance;