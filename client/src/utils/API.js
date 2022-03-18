import axios from 'axios';

export const optionAPI = (url) => {
    return axios.request(url)
        .then((response) => response.data)
        .catch(err => err)
};

export const newsAPI = async (symbol) => {
    const apiKey = 'bOejVfVBzBIyafwrA3lmEh7OpKC7rKHq'
    const url = {
        method: 'GET',
        url: `https://api.polygon.io/v2/reference/news?ticker=${symbol}&apiKey=${apiKey}`,
    };
    return await axios.request(url)
        .then((response) => response.data)
        .catch(err => err);
};