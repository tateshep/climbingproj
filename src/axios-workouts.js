import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://climbingproj.firebaseio.com'
});

export default instance;