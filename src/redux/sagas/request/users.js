import axios from 'axios';

export default function requestGetUsers() {
    return axios.request({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users"
    });
}