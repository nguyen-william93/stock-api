import axios from 'axios';

export const test = (data) => {
    return axios.request(data)
        .then((response) => response.data)
        .catch(err => err)
}