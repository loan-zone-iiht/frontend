import axios from 'axios';
const API = process.env.REACT_APP_SERVER_URL;


const instance = axios.create({
    baseURL: `${API}`,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;
