import axios from 'axios';
import myURL from './secrets';

const instance = axios.create({
    baseURL: myURL
});

export default instance;