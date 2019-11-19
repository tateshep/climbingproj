import axios from 'axios';
import myURL from './secrets';

const instance = axios.create({
    baseURL: 'https://climbingproj.firebaseio.com'
});

export default instance;