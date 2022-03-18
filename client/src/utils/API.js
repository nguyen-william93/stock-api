import axios from 'axios';

export const optionAPI = (url) => {
    return axios.request(url)
        .then((response) => response.data)
        .catch(err => err)
}