import axios from 'axios';

export const test = (url) => {
    return axios.request(url)
        .then((response) => response.data)
        .catch(err => err)
}