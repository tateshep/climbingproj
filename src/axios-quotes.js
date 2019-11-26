import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://quotes.rest'
});

export default instance;