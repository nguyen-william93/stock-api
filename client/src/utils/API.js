import axios from 'axios';

export const API = (url) => {
    return axios.request(url)
        .then((response) => response.data)
        .catch(err => err)
}